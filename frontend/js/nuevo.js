function agregar(){
    const HTMLTitulo = document.querySelector("#nuevaColumna");
    const HTMLIngresos = document.querySelector(".ingresos");
    const HTMLEgresos = document.querySelector(".egresos");
    const HTMLTotal = document.querySelector(".total");
    const HTMLAcumulado = document.querySelector(".acumulado");

    let titulo = `<th scope="col">Columna</th>`;
    let ingresos = `<td>ColumnaIngresos</td>`;
    let egresos = `<td>ColumnaEngresos</td>`;
    let total = `<td>ColumnaTotal</td>`;
    let acum = `<td>ColumnaAcumulado</td>`;

    HTMLTitulo.innerHTML = `${titulo}`;
    HTMLIngresos.innerHTML = `${ingresos}`;
    HTMLEgresos.innerHTML = `${egresos}`;
    HTMLTotal.innerHTML = `${total}`;
    HTMLAcumulado.innerHTML = `${acum}`;
    //alert("Se estan agregando columnas")
}

function eliminar(){
    //alert("Se estan eliminando columnas")
    
}

function guardar(){
    //alert("Se estan agregando columnas")
    window.location="./index.html"; //Redirigir a la pagina
}

function cancelar(){
    window.location="./index.html";
}