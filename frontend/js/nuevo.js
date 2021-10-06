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
    async function createPresupuesto() {
        let fecha = document.getElementById('fechaC').value;
        let proyecto = document.getElementById('nombP').value;
        let version = document.getElementById('version').value;

        let token = await JSON.parse(localStorage.getItem('Presupuestos_token')); //Obtencion del token

        if (token != undefined || token != null) {
            let dataInsert = {
                creationDate: fecha,
                project: proyecto,
                version: version
            };
            let url = await fetch('http://localhost:3000/createPresupuesto', {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(dataInsert),
            });
            const data = await url.text();
            console.log(data)
            if (data == "Presupuesto creado.") {
                alert("Presupuesto creado correctamente.");
                window.location="./index.html"; //Redirigir a la pagina
            } else {
                alert("El presupuesto no pudo crearse.")
                window.location="./index.html";
            }
        } else {
            alert("No puede realizar la creación de un presupuesto. Su sesión ha cadudado.")
            window.location="./login.html";
        }
    }
    createPresupuesto();
}

function cancelar(){
    window.location="./index.html";
}