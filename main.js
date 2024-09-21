let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let seguridadTexto = document.getElementById('seguridad');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

let numeroDigitado = parseInt (cantidad.value);
//console.log(typeof cantidad);

if(numeroDigitado < 8){
    alert("La cantidad de caracteres tiene que ser mayor que 8");
    return;
}

let password = '';
for(let i= 0; i < numeroDigitado; i++){

    let caracterAleatorio = cadenaCaracteres[Math.floor (Math.random() * cadenaCaracteres.length)];

    password+=caracterAleatorio;
}

contrasena.value = password;
verificarSeguridad(password); // Validar seguridad de la contraseña validada

}

                       // Limpiar el texto de seguridad

function limpiar(){
    contrasena.value = '';
    cantidad.value = '';
    seguridadTexto.innerHTML = '';  
}

function verificarSeguridad(password){
    let seguridad = 'Débil';

                                      //  Criterios de seguridad
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);
    const esLarga = password.length >= 8;

                              //  Determinar nivel de seguridad
    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial && esLarga){
        seguridad = 'fuerte';
    } 
    else if ((tieneMayuscula || tieneMinuscula) && tieneNumero && esLarga){
        seguridad = 'Media';
    }

    seguridadTexto.innerHTML = `Seguridad de la contraseña: ${seguridad}`;

}

    botonGenerar.addEventListener('click', generar);
    botonLimpiar.addEventListener('click', limpiar);








