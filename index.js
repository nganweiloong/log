const axios = require('axios');
const { LoremIpsum } = require('lorem-ipsum');
const qs = require('qs');

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

let data = qs.stringify({
    'PARS.DUMMY.MENSYS.1': '',
    'MUA_CODE.DUMMY.MENSYS.1': 'QA TEST',
    'PASSWORD.DUMMY.MENSYS.1': lorem.generateParagraphs(1),
    'BP101.DUMMY_B.MENSYS': 'Log In'
});

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://maya.um.edu.my/sitsvision/wrd/SIW_LGN',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    },
    data: data
};

setInterval(() => {
    console.log(data);
}, 50);