"use strict"
function search(element) {
    element.onclick = function (e) {
        e.preventDefault();
        let leftPart = '', rightPart = '.com';
        let digits = Math.floor(Math.random() * 100) + 1;
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for(let i = 0; i < digits; ++i){
            const randomIndex = Math.floor(Math.random() * characters.length);
            leftPart += characters.charAt(randomIndex);
        }
        const result = 'https://' + leftPart + rightPart;
        document.querySelector('#out_link').href = result;
        document.querySelector('#out_link').innerHTML = result;
    }
}

search(document.querySelector('#generate'));

