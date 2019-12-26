

const wait = (time) => new Promise(r => {
    setTimeout(r, time);
})

async function wru(){
    await wait(1000).finally(r=>console.log('finally'));
    console.log('wait Over');
}

wru();
