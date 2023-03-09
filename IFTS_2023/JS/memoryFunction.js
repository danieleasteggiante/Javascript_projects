//seleziono gli oggetti del DOM
let cardsContainer =  document.getElementById("cards-container");
let start = document.getElementById("start");
let punteggioLabel = document.getElementById("punteggio");

//inizializzo le variabili del gioco
let CARDS_NUMBER; //numero di carte
let immagini; //immagini originali
let immagini2; //immagini copia
let immaginiOnCard = []; //array di controllo
let cardsImgDefault = '<i class="fa fa-question-circle fa-5x"></i>'; // immagine di default
let punteggio = 0; // setto il punteggio a zero
let cardTmp = undefined; // inizializzo la variabile carta tmp (o carta precedente)


//aggiungo il listener al bottone con le funzioni di gioco
start.addEventListener("click", () =>{
    let numberInput = parseInt(document.getElementById("cards-number").value); //recupero il valore dell'input
    immagini = []; // dichiaro vuoto l'array originale
    immagini2 = []; // dichiaro vuoto l'array copia
    //se il numero non è multiplo di 4 o è maggiore di tutte le immagini disponibili dichiaro errore
    if((numberInput%4 != 0) || (numberInput > img.length)){ 
        alert("numero sbagliato"); 
        return;
    } 
    // se è multiplo di 4 e inferiore o uguale al numero totale di immagini inizio
    if((numberInput%4 === 0) && (numberInput <= img.length)){
        CARDS_NUMBER = numberInput; // setto la variabile di gioco CARDS NUMBER
        immagini = img.splice(0,CARDS_NUMBER/2); // divido l array di immagini totale in 2

        immagini = immagini.concat(immagini); //raddoppio le immagini cosi ho immagine e copia
        immaginiOnCard = [...immagini]; //copio l array in un altro di riserva
        createGraphics(); //chiamo la funzione crea grafica
    }
})


function getCard(){
    let thiscard = this; //inizializzo la variabile carta attuale

    let cardImage  = immaginiOnCard.filter(element => element.id === thiscard.getAttribute("card"))[0]; //filtro per attributo card
    thiscard.innerHTML = cardImage.icon; // carico l'immagine recuperata dall'attributo card
    
    setTimeout(cardCallback,1000) //setto timeout di un secondo
    
    //funzione di callback del timeout
    function cardCallback(){  
        if (cardTmp!== undefined){//se la carta tmp non è undefined
            let cardImagePrev  = immaginiOnCard.filter(element => element.id === cardTmp.getAttribute("card"))[0]; //inizializzo una variabile che mi prende l'immagine dall'array di controllo
            
            let controlAttCard = thiscard.getAttribute("card") === cardTmp.getAttribute("card"); //se l attributo card della carta attuale eliminando il 2 finale se c'è è uguale all'attributo card della carta precedente
            let controlId = thiscard.id !== cardTmp.id; //se l'id è diverso, cosi se uno clicca la stessa foto 2 volte non prende il valore corretto

            let totalControl = controlAttCard && controlId; //tengo valore di ritorno in una variabile booleana
            
            if(totalControl){
                punteggio++;//punteggio aumenta
                punteggioLabel.innerText = punteggio;//scrivo il punteggio
                
                thiscard.setAttribute("class","discovered"); //setto l'attributo carta trovata
                cardTmp.setAttribute("class","discovered"); //in entrambe
                
                cardTmp.innerHTML = cardImagePrev.icon; //setto anche l'immagine della carta precedente
                
                thiscard.removeEventListener("click", getCard); //tolgo gli ascoltatori
                cardTmp.removeEventListener("click", getCard);
                
                cardTmp = undefined;//elimino il contenuto nella variabile temporanea
                return 
            }
            //altrimenti
            thiscard.innerHTML = cardsImgDefault;//risetto l'immagine di default
            punteggio--;//punteggio cala
            punteggioLabel.innerText = punteggio;//aggiorno il punteggio
            cardTmp = undefined;//svuoto la variabile
            return
        }

        if(cardTmp === undefined){//se la variabile temporanea è undefined 
            cardTmp = thiscard;//la inizializzo a questa
            thiscard.innerHTML = cardsImgDefault;//e la rinascondo
            return
        }
    }
}

function hideCallback(){
    for (const child of cardsContainer.children){
        child.innerHTML = cardsImgDefault; // nascondo
        child.setAttribute("class","default")
    } 
}

function createGraphics() {
    [...cardsContainer.children].forEach(c => c.remove()); //elimino tutto quello che c'è
    punteggio = 0; //inizializzo il punteggio a zero
    punteggioLabel.innerText = punteggio; //scrivo il punteggio
    cardTmp = undefined;

    //creo il contenuto (carte)
    for(let i=0; i < CARDS_NUMBER; i++){
        let div = document.createElement("div"); //prima i div
        div.setAttribute("id","card" + i); //poi do un id progressivo per controllo incrociato successivo
        div.setAttribute("class","discovered"); //aggiungo la classe default che intende le carte "girate"

        let randNr = parseInt(Math.random()*immagini.length); //inizializzo un numero casuale 

        div.setAttribute("card",immagini[randNr].id); //do un attributo card e lo setto al nome dell'identificatore della carta "pescata casualmente dal mazzo"
        div.innerHTML = immagini[randNr].icon; //inserisco l'immagine
        
        immagini.splice(randNr,1); //tolgo la carta dall'array in modo che non si ripeta
        
        div.addEventListener("click", getCard); //attacco un listener per far "girare la carta"
        cardsContainer.appendChild(div);
    }
    
    setTimeout(hideCallback,4000); // nascondo le immagini dopo 5 secondi
}
