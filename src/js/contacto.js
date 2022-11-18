// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }else{
            RegistrarContacto()
            //event.preventDefault()
        }

        form.classList.add('was-validated')
        }, false)
    })
})()

function RegistrarContacto(){;
    let nombres = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("apellido").value;
    let correo = document.querySelector("#email").value;
    let celular = document.querySelector("#telefono").value;
    let observaciones = document.querySelector("#observaciones").value;

    let url = `http://localhost:3000/usuarios`;
    let datos = {
        Nombre: nombres,
        Apellido: apellidos,
        Correo: correo,
        Celular: celular,
        Observaciones:observaciones
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje =>{
        console.log(mensaje)
    })

}
