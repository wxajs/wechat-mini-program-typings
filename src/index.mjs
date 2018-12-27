import path from 'path';
import { writeFileSync } from 'fs';
import request from 'request-promise-native';
import mkdirp from 'mkdirp';
import cheerio from 'cheerio'

const rq = request.defaults({
    baseUrl: 'https://developers.weixin.qq.com/miniprogram/dev/api/'
});

const store = path.join(path.dirname(import.meta.url), './../dist').slice(5);

mkdirp(store)


let start = async ()=>{
    let parent = [];
    let api = [];

    try {
        const body = await rq({
            uri: '/',
            // transform: (body)=>cheerio.load(body)
        });

        let now = Date.now();
        const $ = cheerio.load(body);

        console.log('load cheerio ', Date.now() - now);
        console.log('start searching');
        $('#book-search-results > div.search-noresults > section')
        .children()
        .each(function(index, el){
            // console.log(el)
            let $this = $(this);

            if ($this.is('h3,h4')) parent.push($this.text());

            if ($this.is('table')) {
                // api map;
                console.log(api);
                $this.find('tbody tr').each(function(index, tr){
                    let $tr = $(this);

                    let $td0 = $tr.children('td:nth-child(1)');
                    let $td1 = $tr.children('td:nth-child(2)');

                    let $tda = $td0.children('a');
                    // api
                    let name = $tda.text();
                    let href = $tda.attr('href');
                    let desc = $td1.text();

                    name.split('.').reduce((space, key, index, arr)=>{
                        if(arr.length < 2) return [];

                        let namespace = space.find((item)=>item.name===key)
                        
                        if(namespace == null) {
                            namespace = {name: key};

                            space.push(namespace);
                            console.log(space)
                        }
                        
                        
                        if (index === arr.length-1) {
                            namespace.href = href;
                            namespace.desc = desc;
                            namespace.parent = parent;
                        } else {
                            namespace.children = namespace.children || [];
                            return namespace.children;
                        }

                    }, api)
                });

                parent = [];
            }
        });

        console.log('end searching');
        console.log(api);
        // finish 
        writeFileSync(path.join(store, 'wx.json'), JSON.stringify(api, void(0), 4));
    } catch (e) {
        console.error(e);
    }
}


start()
.then((ret)=>{
    console.log(ret)
})
