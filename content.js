function messaging(data) {
    return new Promise((resolve,reject) => {
        chrome.runtime.sendMessage({greeting: 'hello'}, result => {
            resolve(result);
        })
    })
}



messaging().then(bgResult => {console.log(bgResult)});