import path from 'path';
import { writeFileSync } from 'fs';
import request from 'request-promise-native';
import mkdirp from 'mkdirp';

const rq = request.defaults({
    baseUrl: 'https://developers.weixin.qq.com/miniprogram/dev/api/'
});

const store = path.join(path.dirname(import.meta.url), './../store').slice(5);
console.log(store);

mkdirp(store)


let start = async ()=>{
    try {
        const index = await rq('/');
        
        console.log(Object.keys(index));

        writeFileSync(path.join(store, 'api.html'), index);
    } catch (e) {
        console.error(e);
    }
}


start()
.then((ret)=>{
    console.log(ret)
})
