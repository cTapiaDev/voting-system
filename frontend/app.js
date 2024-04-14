
const formulario = document.getElementById('formulario');
const sRegion = document.getElementById('vRegion');
const sComuna = document.getElementById('vComuna');
const sCandidato = document.getElementById('vCandidato');
const alertRes = document.getElementById('alertResponse');


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let datos = new FormData(formulario);

    fetch('http://localhost/voting-system/backend/post.php', {
        method: 'POST',
        body: datos,
    })
        .then( res => res.json())
        .then( data => {
            switchAlert(data);
            console.log(data);
        })
})

document.addEventListener("DOMContentLoaded", function() {
    aRegiones.regions.forEach(e => {
        createOption(e.name, sRegion);
    })
})

function printSelects() {
    aRegiones.regions.forEach(e => {
        if (sRegion.value === e.name) {
            cleanSelect(sComuna);
            e.communes.forEach(c => {
                createOption(c.name, sComuna);
            })
            
            cleanSelect(sCandidato);
            e.applicant.forEach(c => {
                createOption(c.name, sCandidato);
            })
        }
    })
}

function cleanSelect(e) {
    e.innerHTML = `<option value="---" selected="selected">---</option>`;
}

function createOption(name, select) {
    let opt = document.createElement("option");
    opt.text = name;
    select.add(opt);
}

function switchAlert(data) {

    alertRes.innerHTML = '';

    switch(data) {
        case 0:
            addAlert('Debes llenar todos los campos del formulario');
            break;
        
        case 1:
            addAlert('El email proporcionado es invalido');
            break;
        
        case 2:
            addAlert('El rut ingresado es invalido');
            break;

        case 3:
            addAlert('El rut ingresado ya votó');
            break;

        case 4:
            let alert = document.createElement("p");
            alert.innerText = 'Voto realizado con exito';
            alertRes.appendChild(alert);
            alertRes.classList.add('check-alert');
            alertRes.classList.remove('warning-alert');
            reload();
            break;

        default:
            alertRes.innerHTML = '';
            alertRes.classList.remove('warning-alert');
            break;
    }
}

function addAlert(message) {
    let alert = document.createElement("p");
    alert.innerText = message;
    alertRes.appendChild(alert);
    alertRes.classList.remove('check-alert');
    alertRes.classList.add('warning-alert');
}

const reload = (() => {
    setTimeout(() => {
        location.reload();
    }, 4000);
});

function onlyNumbers(e) {
    const key = window.Event ? e.which : e.keyCode;
    return (key >= 48 && key <= 57) || key === 75;
}

function onlyString(e) {
    const key = window.Event ? e.which : e.keyCode;
    return (key >= 97 && key <= 122) || (key >= 65 && key <= 90) || key === 209 || key === 241;
}







