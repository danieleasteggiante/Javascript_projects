//Creo elementi
let myWord = document.getElementById("word");
let divSelectWord = document.createElement("div");
let input = document.createElement("input");
let send = document.createElement("input");

//setto attributi e classi
send.setAttribute("type","submit");
send.textContent="invia"

divSelectWord.setAttribute("class","sendWord");
input.setAttribute("type","text");

//collego gli elementi
myWord.appendChild(divSelectWord);

divSelectWord.appendChild(input);
divSelectWord.appendChild(send);

//inizializzo la variabile parola che mi serve per creare la parola da ricomporre e l'array
let wordInput = undefined;
let wordInputArr = undefined;

//creo la funzione dove scompongo la parola
function changeWord(){
    myChar = this.textContent;
    let index = wordInputArr.indexOf(myChar);
    wordInputArr.splice(index, 1);
    wordInputArr.push(myChar);

    renderWord();
}

function renderWord(){
    let mySection = document.getElementById("compone");
    [...mySection.children].forEach(c => c.remove());
    
    let color = wordInput == wordInputArr.join("") ? "letterOK" : "letter"

    wordInputArr.forEach(element => {
        let letter = document.createElement("div");
        letter.setAttribute("class", color);
        mySection.appendChild(letter);
        letter.textContent = element;

        letter.addEventListener("click", changeWord);
    });
}

//creo la funzione dove setto la parola e dove la creo graficamente
function createWord(){
    wordInput = input.value;
    wordInputArr = wordInput.split("");

    renderWord();    
}

//setto il btn listener
send.addEventListener("click",createWord);



