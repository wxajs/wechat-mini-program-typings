import path from 'path';
import {writeFileSync} from 'fs';
import mkdirp from 'mkdirp';
import debugPkg from 'debug';
import Request from './request.mjs';

const debug = debugPkg('wxa-ns');

const request = new Request('https://developers.weixin.qq.com/miniprogram/dev/api/');

const store = path.join(path.dirname(import.meta.url), './../dist').slice(5);

mkdirp(store);

const fieldMap = {
  属性: 'name',
  类型: 'type',
  说明: 'desc',
  最低版本: 'version',
  默认值: 'default',
  必填: 'required',

};

const fetchIndex = async ()=>{
  let parent = [];
  const api = [];

  try {
    const now = Date.now();
    const $ = await request.send({uri: '/'});

    console.log('load cheerio ', Date.now() - now);
    console.log('start searching');
    $('#book-search-results > div.search-noresults > section')
        .children()
        .each(function(index, el) {
          // console.log(el)
          const $this = $(this);

          if ($this.is('h3,h4')) parent.push($this.text());

          if ($this.is('table')) {
            // api map;
            // console.log(api);
            $this.find('tbody tr').each(function(index, tr) {
              const $tr = $(this);

              const $td0 = $tr.children('td:nth-child(1)');
              const $td1 = $tr.children('td:nth-child(2)');

              const $tda = $td0.children('a');
              // api
              const name = $tda.text();
              const href = $tda.attr('href');
              const desc = $td1.text();

              name.split('.').reduce((space, key, index, arr)=>{
                if (arr.length < 2) return [];

                let namespace = space.find((item)=>item.name===key);

                if (namespace == null) {
                  namespace = {name: key};

                  space.push(namespace);
                }


                if (index === arr.length-1) {
                  namespace.href = href;
                  namespace.desc = desc;
                  namespace.parent = parent;
                } else {
                  namespace.children = namespace.children || [];
                  return namespace.children;
                }
              }, api);
            });

            parent = [];
          }
        });

    console.log('end searching');
    // console.log(api);
    // finish
    writeFileSync(path.join(store, 'wx.index.json'), JSON.stringify(api, void(0), 4));

    return api;
  } catch (e) {
    console.error(e);
  }
};

const fetchApi = async (api)=>{
  const typing = {};
  try {
    debug(api);

    const $ = await request.send({
      uri: api.href,
    });
    const $md = $('#book-search-results > div.search-noresults > section');

    // api 描述
    const apiDesc = `
            ${$md.children('h3').text()}
            ${$md.children('h3 + blockquote').text()}
            ${$md.children('h3:first-child ~ p:nth-of-type(1)').text()}
        `;

    // debug($md);
    typing.apiDesc = apiDesc;

    const $params = $md.children('h4#参数');

    if ($params) {
      typing.params = [];
      let temp = {};
      let mark = void(0);
      let last = void(0); // 记住正在处理的行
      let type = 'obj'; // 记住下一个table类型
      $params.nextUntil('h4').each((idx, el)=>{
        const $el = $(el);

        if ($el.is('h5')) {
        // 每一个h5标签都是一个参数，需要push一个新的param。
          temp = {
            alias: $el.text(),
            type: $el.text().split(' ')[0],
            name: $el.text().split(' ')[1],
          };

          typing.params.push(temp);
          last = temp;
          type = 'obj';
        }

        if ($el.is('table')) {
        // 输入参数table
          switch (type) {
          // 对象参数
            case 'obj': {
              // console.log('last', last);
              last.fields = [];

              const th = $el.find('thead > tr > th').map((idx, el)=>$(el).text()).get();

              $el.find('tbody > tr').each((idx, el)=>{
                const field = $(el).children('td').map((idx, el)=>$(el).text()).get();

                last.fields.push(th.reduce((ret, cur, idx)=>{
                  ret[fieldMap[cur]] = field[idx];
                  return ret;
                }, {}));
              });

              break;
            }
            // 枚举值
            case 'enum': {
              last.enums = $el.find('tbody > tr > td:nth-child(1)').map((idx, el)=>$(el).text()).get();

              break;
            }
            // 回调函数
            case 'fn': {
              last.fields = [];
              const $body = $el.find('tbody > tr');

              $body.each((idx, el)=>{
                const field = $(el).children('td').map((idx, el)=>$(el).text()).get();

                last.fields.push({
                  name: field[0],
                  type: field[1],
                  desc: field[3],
                  version: field[4],
                });
              });
            }
          }
        }

        if ($el.is('p') && ~['obj', 'fn'].indexOf(type) ) {
          const str = $el.text();
          // console.log(str);
          if ( /([^\s]*)\s的合法值/.test(str) ) {
            let target = RegExp.$1.split('.');
            if (last.name !== target[0]) {
              // 重置last，如果找不到就是上一个参数的枚举值
              last = last.fields && last.fields.find((f)=>f.name===target[0]) || typing.params.find((param)=>param.name===target[0]) || mark;
            }

            target = target.slice(1);
            // console.log('typing', typing);
            // console.log('last', last);

            target.reduce((prev, cur, idx, arr)=>{
              // console.log(prev, cur);
              const p = prev.fields.find((item)=>item.name===cur);

              if (idx === arr.length -1) {
                last = p;
              }

              return p;
            }, last);

            type = 'enum';
          } else if (/([^\s]*)\s的结构/.test(str)) {
            let target = RegExp.$1.split('.');

            // console.log('yyyy', last);
            if (last.name !== target[0]) {
              // console.log('last', last);
              // 重置last，如果找不到就是上一个参数的参数
              last = last.fields && last.fields.find((f)=>f.name===target[0]) || typing.params.find((param)=>param.name===target[0]) || mark;
            }

            // console.log('typings', typing);
            target = target.slice(1);
            target.reduce((prev, cur, idx, arr)=>{
              const p = prev.fields.find((item)=>item.name===cur);

              if (idx === arr.length -1) {
                last = p;
              }

              return p;
            }, last);

            type = 'obj';
          }
        }

        if ( $el.is('h6')) {
          const content = $el.text();
          if ( /([^\s]*)\s回调函数/.test(content) ) {
            // 回调函数，一般只有一个object值。简化处理，否则需要一行一行扫描处理。
            const target = RegExp.$1.split('.');
            const param = typing.params.find((item)=>item.name===target[0]);
            last = param.fields.find((item)=>item.name===target[1]);
            const tar = $el.next().next().text().split(' ');
            // console.log('xxx', last, tar);

            temp = {
              alias: tar,
              type: tar[0],
              name: tar[1],
            };

            last.fields = [temp];
            last = temp;

            type = 'fn';
          } else if ( /参数/.test(content) ) {
            // 回调函数的参数说明
            // console.log('回调函数');
            type = 'obj';
            const field = $el.next().text().split(' ');

            temp = {
              name: field[1],
              type: field[0],
              alias: field.join(),
            };

            typing.params[typing.params.length-1].params = [temp];

            last = temp;
            // 特殊情况下需要回溯位置
            mark = last;
          }
        }
      });
    }

    const $return = $md.children('h4#返回值');

    if ($return) {
      typing.returns = {};
      const $returnEl = $md.children('h4#返回值 + h5');

      const p = $returnEl.text().split(' ');
      if (p.length > 1) {
        typing.returns.name = $returnEl.text();
        typing.returns.type = p[0];
        typing.returns.name = p[1];

        const $body = $returnEl.next();

        if ($body.is('table')) {
          typing.returns.fields = [];
          const th = $body.find('thead > tr > th').map((idx, el)=>$(el).text()).get();

          $body.find('tbody > tr').each((idx, el)=>{
            const field = $(el).children('td').map((idx, el)=>$(el).text()).get();

            typing.returns.fields.push(th.reduce((ret, cur, idx)=>{
              ret[fieldMap[cur]] = field[idx];
              return ret;
            }, {}));
          });

          // $body.find('tbody > tr').each((idx, tr)=>{
          //   const field = $(tr).children('td').map((idx, el)=>$(el).text());

          //   typing.returns.fields.push({
          //     name: field[0],
          //     type: field[1],
          //     desc: field[2],
          //     version: field[3],
          //   });
          // });
        }
      } else {
        typing.returns.type = $returnEl.text();
        typing.returns.desc = $returnEl.next('p').text();
      }
    }

    api.typing = typing;
    return typing;
  } catch (error) {
    console.log(error);
  }
};

const start = async ()=>{
  const index = await fetchIndex();

  // await fetchApi(index[0].children[0]);
  // await fetchApi(index[0].children[1]);
  // await fetchApi(index.find((ns)=>ns.name==='wx').children.find((item)=>item.href==='wx.onAppShow.html'));
  // await fetchApi(index.find((ns)=>ns.name==='wx').children.find((item)=>item.href==='wx.getSystemInfoSync.html'));
  // await fetchApi(index.find((ns)=>ns.name==='wx').children.find((item)=>item.href==='wx.showToast.html'));
  // await fetchApi(index.find((ns)=>ns.name==='wx').children.find((item)=>item.href==='wx.setNavigationBarColor.html'));
  // await fetchApi(index.find((ns)=>ns.name==='wx').children.find((item)=>item.href==='wx.createAnimation.html'));
  // await fetchApi(index.find((ns)=>ns.name==='IntersectionObserver').children.find((item)=>item.href==='IntersectionObserver.observe.html'));
  // await fetchApi(index.find((ns)=>ns.name==='wx').children.find((item)=>item.href==='wx.addCard.html'));

  const tasks = index.reduce((task, namespace)=>{
    const t = task.concat(namespace.children.map((api)=>fetchApi(api)));

    return t;
  }, []);

  await Promise.all(tasks);

  writeFileSync(path.join(store, 'wx.namespace.json'), JSON.stringify(index, void(0), 4));

  return tasks.length;
};


start()
    .then((ret)=>{
      console.log('Done with ', ret, ' Tasks');
    })
    .catch((e)=>{
      console.log(e);
    });
