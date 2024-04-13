
const formulario = document.getElementById('formulario');
const sRegion = document.getElementById('vRegion');
const sComuna = document.getElementById('vComuna');
const sCandidato = document.getElementById('vCandidato');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let datos = new FormData(formulario);

    fetch('http://localhost/voting-system/backend/post.php', {
        method: 'POST',
        body: datos,
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)
        })
})

document.addEventListener("DOMContentLoaded", function() {
    aRegiones.regions.forEach(e => {
        let option = document.createElement("option");
        option.text = e.name;
        sRegion.add(option);
    })
})

function printSelects() {
    aRegiones.regions.forEach(e => {
        if (sRegion.value === e.name) {
            cleanSelect(sComuna);
            e.communes.forEach(c => {
                let opt = document.createElement("option");
                opt.text = c.name;
                sComuna.add(opt);
            })
            
            cleanSelect(sCandidato);
            e.applicant.forEach(c => {
                let opt = document.createElement("option");
                opt.text = c.name;
                sCandidato.add(opt);
            })
        }
    })
}

function cleanSelect(e) {
    e.innerHTML = `<option value="---" selected="selected">---</option>`;
}







