function mostrarPresupuestos() {
    async function getPresupuestos() {
        const HTMLResponse=document.querySelector('.mPresupuestos');
        HTMLResponse.innerHTML = '';
        let url = await fetch('http://localhost:3000/presupuestos');
        const data = await url.json(url);
        //console.log(data)
        let tpl=``;
        for (let i= 0; i < data.length; i++) {
           tpl=`
              <tr> 
                <td scope="row">${data[i].idBudget}</td>
                <td>${data[i].creationDate}</td>
                <td>${data[i].project}</td>
                <td>${data[i].version}</td>
                <td><button id="btnModificar" class="w-40 btn btn-primary btn-lg btnModificar" type="button" onclick="modificar()"><i class="fas fa-pencil-alt"></i></button> <button id="btnEliminar" class="w-40 btn btn-danger btn-lg btnEliminar" type="button" data-toggle="modal" data-target="#modalEliminar"><i class="fas fa-trash-alt"></i></button></td>
              </tr> `
           HTMLResponse.innerHTML +=`${tpl}`;
        } 
    }
    getPresupuestos();
}

function eliminar(){
    alert("Se estan eliminando filas")
}

function modificar(){
    alert("Se estan modificando filas")
}

async function logOut(){
    let token = await JSON.parse(localStorage.getItem('Presupuestos_token')); //Obtencion del token
    if (token != undefined) {
        localStorage.removeItem('Presupuestos_token');
        alert("Ha cerrado sesión");
        window.location="./login.html";
    } else{
        alert("Su sesión ha caducado.");
        window.location="./login.html";
    }
}

function nuevo(){
    window.location="./nuevo.html"; //Redirigir a la pagina
}

function aceptarEnv(){
    alert("Enviado correctamente.");
}

function aceptarElim(){
    alert("Eliminado correctamente.");
}

mostrarPresupuestos();