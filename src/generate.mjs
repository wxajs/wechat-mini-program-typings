import api from '../dist/wx.namespace.json';
import {writeFileSync} from 'fs';
import path from 'path';
import debugPkg from 'debug';

const debug = debugPkg('generator');


// debug(api);

const interfaceQueue = [];

/**
 *
 * @param {Any} field
 * @return {Boolean}
 */
function isFalsy(field) {
  return field == null || field === '';
}

/**
 * judage if optionalField
 *
 * @param {String} field
 * @return {Boolean}
 */
function isOptional(field) {
  return field && field === '否';
}

/**
 *
 * @param {Any} type
 * @return {Any}
 */
function fixDocType(type) {
  if (/(\w+)\.(<\w+>)/.test(type)) {
    // 修复文档 Array.<object> 写法
    type = RegExp.$1+RegExp.$2;
  }

  return type;
}

/**
 * capitalized string
 *
 * @param {String} str
 * @return {String}
 */
function capitalized(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 *
 * @param {Object} field
 * @param {String} inter name of interface
 * @return {String}
 */
function fieldGenerator(field, inter='') {
  let {type, name, href, params, returns, fields, desc, required, version} = field;
  debug('field %s.%s %O', inter, name, field);

  type = fixDocType(type);

  // 拼接参数名
  const nextInter = inter + capitalized(name);
  // 拼接注释
  const comment = desc && '/**\n' + desc.split('\n').map((item)=>'* '+item.replace(/\s+/g, ' ')).join('\n') + '\n*/' || '';

  if (type === 'function') {
    // interfaceQueue.push([inter+name, ])
    // 返回值是Object需要递归处理，返回值是function
    let paramsString = '';
    if (Array.isArray(params)) {
      paramsString = params.reduce((ret, param)=>{
        debug('param %O', param);
        return ret +
        fieldGenerator(param, nextInter).replace(/[;\n]/g, '').replace(/\s+/g, ' ')+',';
      }, '').replace(/,$/, '');
    }

    let returnsString;
    if (isFalsy(returns) || isFalsy(returns.type)) {
      // 啥都没返回
      returnsString = 'never';
    } else if ( returns.type.toLowerCase() === 'object') {
      if (!isFalsy(returns.fields)) {
        const interfaceName = returns.name + inter + 'Returns';
        interfaceQueue.push([interfaceName, returns.fields]);
        returnsString = interfaceName;
      } else {
        returnsString = 'object';
      }
    } else {
      returnsString = fixDocType(returns.type);
    }

    return `
      ${desc && comment || ''}
      ${name}: (${paramsString})=>${returnsString};
    `;
  } else if (type.toLowerCase() === 'object') {
    // 新增 interface，递归生成。
    debug('push interfaceQueue %O, %O', field, fields);
    if (!isFalsy(fields)) {
      interfaceQueue.push([nextInter+'Field', fields]);

      return `
      ${name}: ${nextInter}Field;
      `;
    } else {
      return `
      ${name}: object
      `;
    }
  } else {
    // 输出域的名，类型，是否可选
    // 有几个文档是 / 分割类型
    return `
    ${desc && comment || ''}
    ${name}${isOptional(required)?'?':''}: ${type.replace(/\//g, '|')};
    `;
  }
}

/**
 *
 * @param {String} name
 * @param {Array<Object>} fields
 * @return {String}
 */
function interfaceGenerator(name, fields) {
  debug('interface ', name, fields);
  return `
  declare interface ${name} {
    ${fields.reduce((ret, field)=>ret+fieldGenerator(field, name), '')}
  }
  `;
}

/**
 * format api from json.
 *
 * @param {String} name
 */
function formatApi(name) {
  if (name) {
    const consoleApi = api.find((item)=>item.name===name);
    const fields = consoleApi.children.map((field)=>{
      const {params, returns, apiDesc} = field.typing;

      return {...field, params, returns, desc: apiDesc, type: 'function'};
    });

    interfaceQueue.push([consoleApi.name, fields]);
  } else {
    api.forEach((item)=>{
      const name = item.name;
      const fields = item.children.map((field)=>{
        const {params, returns, apiDesc} = field.typing;

        return {...field, params, returns, desc: apiDesc, type: 'function'};
      });

      interfaceQueue.push([name, fields]);
    });
  }
}

/**
 * start generate.
 */
function start() {
  formatApi();
  // debug(interfaceQueue);

  let task = interfaceQueue.shift();

  const typings = [];

  while (task) {
    debug('task', task[0]);
    typings.push(interfaceGenerator(...task));

    task = interfaceQueue.shift();
  }

  writeFileSync(path.join(process.cwd(), 'dist/wx.d.ts'), typings.join(''));
}

start();
