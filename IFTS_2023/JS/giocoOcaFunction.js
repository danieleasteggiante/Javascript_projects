let nrCasella = 0;
let nrRow = 8;
let nrCol = 4;
let dado = [1,2,3,4,5,6];

class Player {
    constructor(position, color, name) {
      this.position = position;
      this.color = color;
      this.name = name;
    }
    changePosition(number, direction="+"){
        direction == "+" ? this.position+=number : this.position-=number;
    }
}

function createCaselleList(nr=10, parent, classType, arrivo, andamento ="c"){
    nrCasella = andamento == "c" ? nrCasella : arrivo-1;
    for(let i = 0; i< nr; i++){
        let casella = document.createElement("div");
        casella.setAttribute("class",classType);
        casella.setAttribute("id","number" + nrCasella);
        casella.innerHTML="<h2>" + nrCasella + "</h2>";
        parent.appendChild(casella);
        andamento == "c" ?  nrCasella++ : nrCasella --;
    }
}

let tavoloTop = document.getElementById("tavoloTop");
tavoloTop.setAttribute("class", "row");

let colLeft = document.getElementById("colLeft");
colLeft.setAttribute("class", "colLeft");

let colRight = document.getElementById("colRight");
colRight.setAttribute("class", "colRight");

let tavoloBottom = document.getElementById("tavoloBottom");
tavoloBottom.setAttribute("class", "row");

createCaselleList(nrRow, tavoloTop,"caselleRow", nrRow);
createCaselleList(nrCol, colRight,"caselleColRight", nrRow + nrCol);
createCaselleList(nrRow, tavoloBottom,"caselleRow", nrRow*2 + nrCol,"d");
createCaselleList(nrCol, colLeft,"caselleColLeft", nrRow*2 + nrCol*2,"d");

let dadoDiv = document.getElementById("dado");
let btLanciaDado = document.getElementById("lanciaDado");
let player = new Player(0, "blue", "Daniele");
render();

function rollDice(){
    let counter = 0;
    function startGame(){
        return new Promise((resolve, reject) => {
            let interval = setInterval(()=>{
                let random = parseInt(Math.random()*dado.length);
                    dadoDiv.innerHTML="<h1>" + dado[random] + "<h1>";
                    dadoNumber = dado[random];
                    counter++;
                    if(counter>=5){
                        clearInterval(interval);
                        resolve(dadoNumber);
                    } 
             }, 100);
            });
    }

    startGame().then((dadoNumber)=>{
        checkVictory();
        move(dadoNumber);
       
    })
}

btLanciaDado.addEventListener("click", rollDice);

function render(){
    let position = document.getElementById("number" + player.position);
    let pedina = document.createElement("div");
    pedina.setAttribute("class","pedinaClass");
    pedina.setAttribute("id", player.nome)
    pedina.style.backgroundColor = player.color;
    position.appendChild(pedina);
}

function move(dadoNumber){
    let actualNr = player.position + dadoNumber;
    let intervalId = setInterval(()=>{
        if (player.position >= actualNr-1) clearInterval(intervalId);
        let oldPosition = document.getElementById(player.id);
        oldPosition.remove();
        player.changePosition(1);
        render();
    },200);
}

function checkVictory(){
    if((player.position + dadoNumber) >= (nrRow*2 + nrCol*2)){
        alert(player.name + " hai vinto!");
        location.reload()
    } 
}

