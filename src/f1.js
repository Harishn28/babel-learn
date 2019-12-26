import 'core-js';
import 'regenerator-runtime/runtime';


const p = new Promise((resolve) => {
    resolve(2);
})

p.finally(() => {
    console.log('Promise finally');
})
