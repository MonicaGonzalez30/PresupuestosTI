function agregar(){
    var mFlujo = document.getElementById("mFlujo");
    var row = mFlujo.insertRow(0);
    var mes = row.insertCell(0);
    var ingreso = row.insertCell(1);
    var egreso = row.insertCell(2);
    var total = row.insertCell(3);
    var acum = row.insertCell(4);

    mes.innerHTML = "Enero";
    ingreso.innerHTML = "100";
    egreso.innerHTML = "60";
    total.innerHTML = "40";
    acum.innerHTML = "40";
}

function eliminar(){
    //alert("Se estan eliminando filas")
    
}

function guardar(){
    //alert("Se estan agregando filas")
    window.location="./index.html"; //Redirigir a la pagina
}

function cancelar(){
    window.location="./index.html";
}