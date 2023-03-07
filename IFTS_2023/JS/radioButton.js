document.getElementById("base1").addEventListener('change',cambioBase); 
document.getElementById("base2").addEventListener('change',cambioBase);
document.getElementById("base3").addEventListener('change',cambioBase);

function cambioBase(){ document.getElementById("hx").innerHTML="Valore <spanid='sp1'>"+this.value+"</span>"; }