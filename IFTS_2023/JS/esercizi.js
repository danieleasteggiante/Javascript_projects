/////////////////////////////////////////////////////////////////////////////////
// Esercizi /////////////////////////////////////////////////////////////////////
// con ForEach //////////////////////////////////////////////////////////////////

console.log("Esercizi/////////////////////////////////////////////////////////");

let vocali = ["a","e","i","o","u"];

let parola2 = "Supercalifragilistichespiralidoso";
let i = 0;
let parola2Arr = parola2.split(""); // Trasforma stringa in array

parola2Arr.forEach(element => {
    if(vocali.includes(element)) i++;
});

console.log(i);

/////////////////////////////////////////////////////////////////////////////////
//con switch //

let counter = 0;
for(let i = 0; i < parola2.length; i++){
    switch(parola2[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u": counter++; break;
    }   
}
console.log(counter);

////////////////////////////////////////////////////////////////////////////////
// Esercizi sulla pagina ///////////////////////////////////////////////////////

function copia(){
    let testo = document.getElementById("testo").value;
    //document.getElementById("output").innerHTML = testo; // quando c'è codice HTML es <h1>...
    //document.getElementById("output").textContent = testo; // quando è solo testo è preferibile
    return testo;
}

function addN(){

    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let somma = n1 + n2;
    //document.getElementById("output").innerHTML = testo; // quando c'è codice HTML es <h1>...
    //document.getElementById("output").textContent = somma;
    return somma;
}7

function getFrutta(){
    let frutta = document.getElementById("frutta").innerHTML.replaceAll(" ","").split(",");;
    return frutta;
}

function control(myArray){
    let frutto = document.getElementById("frutto").value;
    let output = myArray.indexOf(frutto) != -1 ? frutto : "Non c'è";
    return output;
}

function output() {
    let testo = copia();
    let somma = addN();
    let frutto = control(getFrutta());

    document.getElementById("output").innerHTML = testo + "<br>"+ somma + "<br>" + frutto;
}

function concatena(){
    let testo = document.getElementById("testo").value;
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let frutto = document.getElementById("frutto").value;
    document.getElementById("output").innerHTML = testo + n1 + n2 + frutto;
}

document.getElementById("b1").addEventListener("click", output);

////////////////////////////////////////////////////////////////////////////////
