async function aceptarModi(){
    const id = document.getElementById("idBudgetM");
    const idBudget = String(id.value); //obtener el valor

    let url = await fetch('http://localhost:3000/presupuesto/'+idBudget, {
        method: "GET"
    });
    //Regreso de la respuesta
    const data = await url.json(url);
    console.log(data)
    if (data != "El presupuesto no existe.") {
        //Mostrar la información
        const id = document.getElementById("idPres");
        const proyecto = document.getElementById("nomProyect");
        const version = document.getElementById("version");
        
        id.value = data.idBudget;
        proyecto.value = data.project;
        version.value = data.version;

        alert("Datos cargados, cierre el mensaje de modificar para visualizarlos.");
    } else {
        alert("El presupuesto no existe.")
        window.location="./index.html";
    }
}

function guardarModificado(){
    async function createPresupuesto() {
        let id = document.getElementById('idPres').value;
        let version = document.getElementById('version').value;
        
        let token = await JSON.parse(localStorage.getItem('Presupuestos_token')); //Obtencion del token

        if (token != undefined || token != null) {
            let modificar = {
                idBudget: id,
                version: version
            };
            let url = await fetch('http://localhost:3000/updatePresupuesto', {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(modificar),
            });
            const data = await url.text();
            console.log(data)
            if (data != "El presupuesto no existe.") {
                alert("Presupuesto modificado correctamente.");
                window.location="./index.html"; //Redirigir a la pagina
            } else {
                alert("El presupuesto no pudo modificarse.")
                window.location="./index.html";
            }
        } else {
            alert("No puede realizar la modificación de un presupuesto. Su sesión ha cadudado.")
            window.location="./login.html";
        }
    }
    createPresupuesto();
}

function cancelar(){
    window.location="./index.html";
}