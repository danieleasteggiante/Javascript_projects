// tipi di ritorno Live o statica (con i query ritorna lista statica), getElement...//
//(ritornano lista Live che si modifica in diretta)//

function setBinary(){
    let cifra  = this.textContent === "1" ? "0" : "1"; //lo parsifica da solo
    this.textContent = cifra;
}

function toDecimal(){
    let first = 0;
    let second = 0;

    for(let i = 1; i < 9; i++){
        let el = parseInt(document.getElementById("bin" + i).textContent);
        i < 5 ? first += el*Math.pow(2,i-1) : second += el*Math.pow(2,(i-1)-4);
    }

    document.getElementById("hex2").textContent = toHex(first);
    document.getElementById("hex1").textContent = toHex(second);
}

function toHex(decimal){
    switch(decimal){
        case 10:
            return "a";
        case 11:
            return "b";
        case 12:
            return "c";
        case 13:
            return "d";
        case 14:
            return "e";
        case 15:
            return "f";
        default:
            return decimal;
    }
}

function bindAction(tipe, arr, myFun){
    arr.forEach(element => {
        let e = document.getElementById(tipe + element.toString());
        e.addEventListener("click", myFun);
    });
}

function converti(){
    binaryId = [1,2,3,4,5,6,7,8];
    bindAction("bin", binaryId, setBinary);
    bindAction("bin", binaryId, toDecimal);   
};

converti();
