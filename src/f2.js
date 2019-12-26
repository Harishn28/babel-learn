
import 'core-js';

const wait = (time) => new Promise(r => {
    setTimeout(r, time);
})

async function wru(){
    await wait(1000);
    console.log('wait Over');
}

wru();
