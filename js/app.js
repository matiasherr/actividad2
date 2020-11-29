function escribe() {
    escribir = document.getElementById("saludo");
    miNombre = "<h3> Bienvenido   " + document.completar.name.value + " ahora te hare una pregunta y tendrás 4 oportunidades para responder correctamente</h3";
    escribir.innerHTML = miNombre;
    document.getElementById("answer").className = "vs1";
}
window.onload = function () {
    document.completar.saludo.onclick = escribe;
}
var oport = 4;
var correct = "EEVEE";
function adivina() {
    if(oport>0){
    var pknom = document.getElementById("pkname").value;
    if (pknom == "")
        alert("debe colocar un nombre de pokemon");
    else {
        var pkname1 = pknom.toUpperCase();
        if (pkname1 == correct)
            alert("correcto");
        else {
          document.getElementById("fail").classList.remove('vs0');
          document.getElementById("intent").innerHTML="Tienes "+ (oport-1) +" opciones para responder:";
          pknom = "";
          oport--;
        }
    }
 } if (oport == 0){
   alert ("Se terminaron tus intentos");
 }
}
