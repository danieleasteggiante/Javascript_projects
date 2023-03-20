const SIZE_GAME=5;
let divCaselle = document.getElementById("caselle");
let divVerifica = document.getElementById("verifica");
let btnLingo =  document.getElementById("btnLingo");
let btnVerifica = document.getElementById("btnVerifica");

let parole = ["acuto", "adagi", "acido", "boria", "gesso", "gioca", "gioia", "gemma", "lunga", "carta", "sorta","porta", "lanci"];
let parolaScelta;
let parolaTentata;
let nrTentativi = 0;

btnLingo.addEventListener("click", ()=>{
    parolaScelta = parole[parseInt(Math.random()*parole.length)];
    alert("Prova a indovinare")
    console.log(parolaScelta);
})

btnVerifica.addEventListener("click", startGame);

function startGame(){
    if(parolaScelta== undefined){
        alert("Scegli parola cliccando su Lingo!");
        return;
    }
    let parolaTentata = "";
    for(let i = 0; i < SIZE_GAME; i++){
        let letteraTmp =  document.getElementById("verifica" + i).value;
        parolaTentata += letteraTmp;
    }
    scriviParola(parolaTentata);
    nrTentativi++; 
}

function scriviParola(pTentata){
    checkIfWinOrLoose(pTentata);
    for (let i = 0; i < SIZE_GAME; i++) {
        let casella = document.getElementById("r"+nrTentativi+"casella"+i);
        if(pTentata[i] == parolaScelta[i]) casella.setAttribute("class","casella ok");
        else if(parolaScelta.includes(pTentata[i])) casella.setAttribute("class","casella quasi")
        else casella.setAttribute("class","casella error");
        casella.innerText = pTentata[i];        
    }
}

function checkIfWinOrLoose(pTentata){
    if(pTentata == parolaScelta){
        alert("Vittoria");
        location.reload();
    }

    if (nrTentativi>=SIZE_GAME) {
        alert("Hai perso la parola era: " + parolaScelta);
        location.reload();
    }
}


function createGraphics(){
    for(let i = 0; i< SIZE_GAME; i++){
        let riga = document.createElement("div");
        riga.setAttribute("id", "row"+i);
        riga.setAttribute("class", "riga");
        for(let j = 0; j < SIZE_GAME; j++){
            let casella = document.createElement("div");
            casella.setAttribute("id", "r"+i+"casella"+j);
            casella.setAttribute("class", "casella");
            riga.appendChild(casella);
            }
        divCaselle.append(riga);
    }
    
    for(let i = 0; i < SIZE_GAME; i++){
        let casella = document.createElement("div");
        casella.setAttribute("class", "casella verifica");
        var inputText = document.createElement("INPUT");
        inputText.setAttribute("type", "text");
        inputText.setAttribute("id", "verifica"+i);
        casella.appendChild(inputText);
        divVerifica.appendChild(casella);
    }
}

document.addEventListener("DOMContentLoaded",createGraphics);


