let inputText = document.querySelector("#input-text");
let outputText = document.querySelector("#output-text");
let btnEncrypt = document.querySelector("#btn-encript");
let btnDecrypt = document.querySelector("#btn-decrypt");
let btnCopy= document.querySelector("#btn-copy");
const regex = new RegExp('[à-úÀ-ÚA-Z]')


btnEncrypt.addEventListener("click", event => {
  event.preventDefault();

    if (checkInput(inputText.value)){
        outputText.value = encrypt(inputText.value);
        inputText.value = "";
    };
})

btnDecrypt.addEventListener("click", event => {
    event.preventDefault()

    if (checkInput(inputText.value)){
        outputText.value = decrypt(inputText.value);
        inputText.value = "";
    };
})

btnCopy.addEventListener("click", event => {
    event.preventDefault()

    outputText.select()

    document.execCommand("copy")
    outputText.value = ''
})

function encrypt(input) {
    let textEncrypt = input
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat')
        .toLowerCase();

    return textEncrypt;
}

function decrypt(input) {
    let textDecrypto = input
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');

    return textDecrypto;
}

function checkInput(inputText) {
    if (regex.test(inputText)) {
        outputText.value =  "O TEXTO NÃO PODE CONTER LETRAS MAIÚSCULAS OU ACENTOS";
        return false;
    } else {
        return  true;
    }
}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/