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
let data = '{"sku":"b15800d2-e4c3-4e5b-8e9f-6f9e8be3e6fc-05","quantity":1}';

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://bvrurx66ya.execute-api.ap-southeast-1.amazonaws.com/cnh/user',
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
        'session': '3684da12-7509-4d21-9a84-3fda9aadd5af',
        'token': '06fee6f9-a3fe-415e-9a63-7c5784ba0333-1700662901',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
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
            console.count(error.response.data);
        });

}, 50);