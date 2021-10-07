function agregarFlujo(){
    var mFlujo = document.getElementById("mFlujo");
    var row = mFlujo.insertRow(0);
    var mes = row.insertCell(0);
    var ingreso = row.insertCell(1);
    var egreso = row.insertCell(2);
    var total = row.insertCell(3);
    var acum = row.insertCell(4);

    let meses = `<select class="form-select" aria-label="Default select example">
        <option selected>Meses</option>
        <option value="1">Enero</option>
        <option value="2">Febrero</option>
        <option value="3">Marzo</option>
        <option value="4">Abril</option>
        <option value="5">Mayo</option>
        <option value="6">Junio</option>
        <option value="7">Julio</option>
        <option value="8">Agosto</option>
        <option value="9">Septiembre</option>
        <option value="10">Octubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>
    </select>`;

    let cantIngreso = `<input type="number" class="form-control" id="ingreso" placeholder="" value="">`;

    mes.innerHTML = meses;
    ingreso.innerHTML = cantIngreso;
    egreso.innerHTML = "-";
    total.innerHTML = "-";
    acum.innerHTML = "-";
}

function agregarIngres(){

}

function agregarCostD(){

}

function agregarGasto(){

}

function agregarRecurso(){

}

function eliminar(){
    alert("Se esta eliminando la última fila")
    // var mFlujo = document.getElementById("mFlujo");
    // var row = mFlujo.removeAttribute(0);
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