let d = document;

let $nombre = d.getElementById("input-nombre")
let $apellido = d.getElementById("input-apellido")
let $email = d.getElementById("input-email")
let $tel = d.getElementById("input-telefono")
let $provincia = d.getElementById("input-provincia")
let $ciudad = d.getElementById("input-ciudad")
let $optionAdoption = d.querySelectorAll('input[type = "checkbox"]')
let $tengoMasc = d.getElementsByName("opciones")
// let $debSaber = d.getElementById("input-debSaber")
let $comoHogar = d.getElementById("input-comoHogar")
// let $duda = d.getElementById("input-dudas")
let $pHogar = d.getElementById("p-hogar")
let $pMascotasSiNo = d.getElementById("mascotas-sino")
let $pQueAdopto = d.getElementById("que-adoptar")
let $pCiudad = d.getElementById("p-ciudad")
let $pProvincia = d.getElementById("p-provincia")
let $pTelefono = d.getElementById("p-telefono")
let $pEmail = d.getElementById("p-email")
let $pApe = d.getElementById("p-ape")
let $pNom = d.getElementById("p-name")
let alMenosUnCheckbox = false
let alMenosUnRadio = false
let validacion
let $sendBtn = d.getElementById("send-btn")
let $cancelBtn = d.getElementById("cancel-btn")

function mostrarAviso(esteElemento) {
    esteElemento.style.display = "block"
}

function validar() {
    validacion = true
    if ($nombre.value == "") {
        validacion = false
        mostrarAviso($pNom)
    }

    if ($apellido.value == "") {
        validacion = false
        mostrarAviso($pApe)
    }

    if ($email.value == "") {
        validacion = false
        mostrarAviso($pEmail)
    }

    if ($tel.value == "") {
        validacion = false
        mostrarAviso($pTelefono)
    }

    if ($provincia.value == "") {
        validacion = false
        mostrarAviso($pProvincia)
    }

    if ($ciudad.value == "") {
        validacion = false
        mostrarAviso($pCiudad)
    }

    for(let i = 0; i < $optionAdoption.length; i++){
        if($optionAdoption[i].checked){
            alMenosUnCheckbox = true
            break
        }
     }
     if(alMenosUnCheckbox == false){
        validacion = false
        mostrarAviso($pQueAdopto)
     }

     for(let i = 0; i < $tengoMasc.length; i++){
        if($tengoMasc[i].checked){
            alMenosUnRadio = true
            break
        }
     }
     if(alMenosUnRadio == false){
        validacion = false
        mostrarAviso($pMascotasSiNo)
     }

     if($comoHogar.value == ""){
        validacion = false
        mostrarAviso($pHogar)
     }
}

function redireccion(){
    window.location.href = "../index.html"
}

function enviarCuestionario(){
    validar();
    if(validacion == true){
        alert("El formulario fue enviado con éxito, serás redirigido a la página de Inicio")
        setTimeout(redireccion, 1000)
    }
}

function cancelarCuestionario(){
    alert("El cuestionario fue cancelado, serás redirigido a la página de Inicio")
    setTimeout(redireccion, 1000)
}


// enviarCuestionario()

$sendBtn.addEventListener("click",enviarCuestionario)
$cancelBtn.addEventListener("click",cancelarCuestionario)