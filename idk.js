const request = require('request')

request('https://www.facebook.com/', (err, res, data) => {
    if (err) { console.log(err) }
    const splitData = data.split('"')
    let index = 0
    setInterval(function(){
        console.log(splitData[index++ % splitData.length]);
    }, 50)
})