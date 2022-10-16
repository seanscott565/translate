const input = document.querySelector('input');
const translate = document.querySelector('translate');
const output = document.querySelector('output');
let inputVal = input.value;
const spanish = document.getElementById('eu');
const russian = document.getElementById('ru');
const chinese = document.getElementById('zh');
const langSelect = document.getElementById('languageSelect')


function loadingAnimation() {
    document.getElementById("output").innerText = "Loading.";
    setTimeout(function () {
        document.getElementById("output").innerText = "Loading..";
    } , 700);
    setTimeout(function () {
        document.getElementById("output").innerText = "Loading...";
    } , 1000);

}


const KEY = '3984098d58mshe329bdcd36f6853p1d8defjsn16e9ebd94eb2';

const HEADER_OPTIONS = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',

}

function langTranslate(lang){
    let langToPrint = ''
    switch (lang){
        case "es": langToPrint = "Spanish"; break;
        case "ru": langToPrint = "Russian"; break;
        case "fr": langToPrint = "French"; break;
    }
    langSelect.innerText = `Selected langauge ${langToPrint}`
    loadingAnimation();

    const options = {
        method: 'POST',
        headers: HEADER_OPTIONS,
        body: JSON.stringify({q: document.getElementById("input").value, "source":"en", "target":lang})
    }
    fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("output").innerText = response.data.translations.translatedText
        })
        .catch(err => console.error(err));
}