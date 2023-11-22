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
let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://bvrurx66ya.execute-api.ap-southeast-1.amazonaws.com/cloudsearch',
    headers: {
        'authority': 'bvrurx66ya.execute-api.ap-southeast-1.amazonaws.com',
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'text/plain;charset=UTF-8',
        'origin': 'https://www.cardsandhobbies.com',
        'referer': 'https://www.cardsandhobbies.com/',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    },
    data: `{"set":${lorem.generateParagraphs(20)},"size":20,"suggest":true}`
};


setInterval(() => {
    axios.request(config)
        .then((response) => {
            console.count(response);
            writeToFile()
        })
        .catch((error) => {
            console.log(error);
        });

}, 50);