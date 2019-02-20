import {
    version
} from 'pack';

let arrowFn = ()=>{
    console.log("我是箭头函数.")
}

export default function () {
    arrowFn();
    console.log('version ' + version);
    console.log('projectVersion: __WEEX_VERSION__');
}
