import { encode, decode } from "https://encoder.js.is-a.dev/encoder.js@1.0.1.js";

document.getElementById("btn").onclick = function () { encryption() };

function encryption() {
    const log     = document.getElementById("log");
    const resultat = document.getElementById("res");

    const pass    = log.textContent;
    const encoded = encode(pass, true);

    let texting = resultat.textContent;  
    resultat.textContent = `text: "${pass}": "${encoded}"`;

    texting = "dzdzqd"; 
    console.log(pass);
    console.log(`text: "${pass}": "${encoded}"`);
}