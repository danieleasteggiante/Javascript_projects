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

    move(dadoNumber){
        let actualNr = this.position + dadoNumber;
        let intervalId = setInterval(()=>{
            if (this.position >= actualNr) clearInterval(intervalId);
            let oldPosition = document.getElementById(this.name);
            oldPosition.remove();
            this.changePosition(1);
            this.render();
        },200);
    }
    
    render(){
        let position = document.getElementById("number" + this.position);
        let pedina = document.createElement("div");
        pedina.setAttribute("class","pedinaClass");
        pedina.setAttribute("id", this.name)
        pedina.style.backgroundColor = this.color;
        position.appendChild(pedina);
    }

    checkVictory(){
        if((this.position + dadoNumber) >= ((nrRow*2 + nrCol*2)-1)){
            alert(this.name + " hai vinto!");
            location.reload()
        } 
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
let player1 = new Player(0, "blue", "Daniele");
let player2 = new Player(0, "red", "Aste");
let players = [player1,player2];
let choosePlayer = 0;

player1.render();
player2.render();


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
            
        players[choosePlayer].checkVictory();
        players[choosePlayer].move(dadoNumber);
        choosePlayer == 0 ? choosePlayer = 1 : choosePlayer = 0; 
    })
}

btLanciaDado.addEventListener("click", rollDice);





