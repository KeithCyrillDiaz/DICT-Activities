

const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Step 1 complete`);
            resolve();
        },1000)
    })
}

step1();