/////////////////////////////////////////////////////////////////////////////////////////////////////////
// listener all'avvio del DOM //

// Scrivo la funzione col metodo classico
function ready(){
    console.log("documento pronto!");
}

//Richiamo la funzione attaccata ad un evento (col listener) - programmazione ad eventi
document.addEventListener("DOMContentLoaded",ready);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scope resolution //

//let è una variabile all'interno del blocco, var è in tutto il DOM
let el = 4;
var el3 = 7
if(true){
    var el2 = 10;
    let el4 = 20
    //console.log(el2); // Stampa la variabile
}
//console.log(el4); //errore

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// scambio variabili //

let a = 10;
let b = 20;

//scambio lista servono le parentesi quadre
[a,b] = [b,a]; 
console.log(a,b);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// cicli for //

let parola = "ciao";
let array_nomi = [];
array_nomi.push('Fabio','Luigi','Mauro')

// classico
for(let i = 0; i < parola.length;i++) console.log(parola.charAt(i),i,array_nomi[i]); 

// foreach in js
for(el of array_nomi) console.log(el); 

//forEach metodo degli array
array_nomi.forEach((valore, indice) => console.log(valore,indice)); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// arrow function //

// senza argomenti
let myFunction = () => console.log("ciao arrow");
myFunction();

//con argomenti
let myFunctionArgs = arg => console.log(arg);
myFunctionArgs("arrow function args");

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// funzioni array //

// controllo se esiste un elemento in un array
console.log(array_nomi.indexOf("Fabio"));

//-1 significa che l elemento non c'è ritorna -1 e stampa non c'è
if (array_nomi.indexOf("Maurizio") == -1) console.log("non presente"); 

// controllo di nuovo se l elemento è presente ritorna true
console.log(array_nomi.includes("Luigi"));

//da stringa a array
let myString = "Ciao mi chiamo Mario";

myStringArray = myString.split(" ");
console.log(myStringArray);

// inverso dello split ritorna una stringa da un array inserendo un carattere separatore tra gli elementi
let myStringSeparatore = myStringArray.join(".");
console.log(myStringSeparatore);

////////////////////////////////////////////////////////////////////////////////////////////////////////////



