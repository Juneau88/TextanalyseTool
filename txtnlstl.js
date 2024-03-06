// Textanalyse-Tool 

import { question } from "readline-sync";

function verbNum(txt) {
    const verbum = txt.split(' ');
    return verbum.length;
}

function numVerbUnica(txt) {
    const verbum = txt.toLowerCase().split(' ');
    const verbUnica = new Set(verbum); // einfacher als arrays mit push. 
    return verbUnica.size;
}

function invLongVerb(txt) {
    const verbum = txt.split(' ');
    let longVerb = '';

    for (let verb of verbum) {
        if (verb.length > longVerb.length) {
            longVerb = verb;
        }
    }

    return longVerb;
}

const txt = question("Hey! Schreib ein paar Worte:");
const numVerb = verbNum(txt);
const unicVerbNum = numVerbUnica(txt);
const verbLongis = invLongVerb(txt);

console.log(`Es wurden ${numVerb} geschrieben`);
console.log(`Davon sind ${unicVerbNum} unterschiedlich`);
console.log(`Das längste Wort lautet: ${verbLongis}`);


