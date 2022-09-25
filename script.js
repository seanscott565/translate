const input = document.querySelector('input');
const translate = document.querySelector('translate');
const output = document.querySelector('output');
let inputVal = input.value;
const spanish = document.getElementById('eu');
const russian = document.getElementById('ru');
const chinese = document.getElementById('zh');



function spanishSelect() {
    languageSelect.innerText = `Selected language: Spanish`;
    console.log("Spanish");
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3984098d58mshe329bdcd36f6853p1d8defjsn16e9ebd94eb2',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',

        },
        body: JSON.stringify({q: document.getElementById("input").value, "source":"en", "target":"es"})
    };
    fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => document.getElementById("output").innerText = response.data.translations.translatedText)
        .catch(err => console.error(err));
}


function russianSelect() {
    languageSelect.innerText = `Selected language: Russian `;
    console.log("Russian");
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3984098d58mshe329bdcd36f6853p1d8defjsn16e9ebd94eb2',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',

        },
        body: JSON.stringify({q: document.getElementById("input").value, "source":"en", "target":"ru"})
    };
    fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => document.getElementById("output").innerText = response.data.translations.translatedText)
        .catch(err => console.error(err));
}

function frenchSelect() {
    languageSelect.innerText = `Selected language: French `;
    console.log("French");
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3984098d58mshe329bdcd36f6853p1d8defjsn16e9ebd94eb2',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',

        },
        body: JSON.stringify({q: document.getElementById("input").value, "source":"en", "target":"fr"})
    };
    fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => document.getElementById("output").innerText = response.data.translations.translatedText)
        .catch(err => console.error(err));
}