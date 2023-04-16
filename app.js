
var rut = document.getElementById('rut');
var nombre = document.getElementById('nombre');
var apellidoPaterno = document.getElementById('apellidopaterno');
var apellidoMaterno = document.getElementById('apellidomaterno');
var fechaNac = document.getElementById('fechanac');
var edad = document.getElementById('edad');
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var profesion = document.getElementById('profesion');
var error = document.getElementById('error')

error.style.color = 'red';


var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajesError = [];

        if(rut.value === null || rut.value === ''){
            mensajesError.push('Ingresa tu rut');
    
        }
        
        
        if(nombre.values === null || nombre.values === ''){
            mensajesError.push('Ingresa tu nombre');
    
        }

        if(nombre.values === null || nombre.values === ' '){
            mensajesError.push('Ingresa tu nombre');
    
        }

        if(apellidoPaterno.values === null || apellidoPaterno.values === ' '){
            mensajesError.push('Ingresa tu apellido paterno');
    
        }

        if(apellidoMaterno.values === null || apellidoMaterno.values === ' '){
            mensajesError.push('Ingresa tu apellido materno');
    
        }

        if(fechaNac.value === null || fechaNac.value === ' '){
            mensajesError.push('Ingresa tu fecha de nacimiento');
    
        }

        if(edad.value === null || edad.value === ' '){
            mensajesError.push('Ingresa tu edad');
    
        }

        if(email.value === null || email.value === ' '){
            mensajesError.push('Ingresa tu email');
    
        }

        if(celular.value === null || celular.value === ' '){
            mensajesError.push('Ingresa tu celular');

    
        }

        if(profesion.value === null || profesion.value === ' '){
            mensajesError.push('Ingresa tu profesión');
    
        }
    
        
    
           error.innerHTML = mensajesError.join(', ');

    })

    
    function validarRut() {
        const rutInput = document.getElementById("rut");
        const rut = rutInput.value.replace(/\./g, "").replace("-", ""); // Eliminar puntos y guión del valor del input
        if (rut.length < 9 || rut.length > 10) { // Validar la longitud del RUT
           
          rutInput.setCustomValidity("El RUT debe tener entre 9 y 10 caracteres"); // Establecer mensaje de error personalizado en el input
        } else {
          document.getElementById("error").innerHTML = "";
          rutInput.setCustomValidity(""); // Restablecer mensaje de error personalizado en el input
        }
      }

      function validarNombre() {
        const nombreInput = document.getElementById("nombre");
        const nombre = nombreInput.value
        if (nombre.length < 3 || nombre.length > 20) { // Validar la longitud del RUT
            
          nombreInput.setCustomValidity("El NOMBRE debe tener entre 3 y 20 caracteres"); // Establecer mensaje de error personalizado en el input
        } else {
          document.getElementById("error").innerHTML = "";
          nombreInput.setCustomValidity(""); // Restablecer mensaje de error personalizado en el input
        }
      }
  
      function validarApellidoPaterno() {
        const apellidoPaternoInput = document.getElementById("apellidopaterno");
        const apellidoPaterno = apellidoPaternoInput.value
        if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) { // Validar la longitud del RUT
           
          apellidoPaternoInput.setCustomValidity("El APELLIDO PATERNO debe tener entre 3 y 20 caracteres"); // Establecer mensaje de error personalizado en el input
        } else {
          document.getElementById("error").innerHTML = "";
          apellidoPaternoInput.setCustomValidity(""); // Restablecer mensaje de error personalizado en el input
        }
      }
  
      function validarApellidoMaterno() {
        const apellidoMaternoInput = document.getElementById("apellidomaterno");
        const apellidoMaterno = apellidoMaternoInput.value
        if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) { // Validar la longitud del RUT
            
          apellidoMaternoInput.setCustomValidity("El APELLIDO MATERNO debe tener entre 3 y 20 caracteres"); // Establecer mensaje de error personalizado en el input
        } else {
          document.getElementById("error").innerHTML = "";
          apellidoMaternoInput.setCustomValidity(""); // Restablecer mensaje de error personalizado en el input
        }
      }
  

      function validarCelular() {
        const celularInput = document.getElementById("celular");
        const celular = celularInput.value
        if (celular.length < 9 || celular.length > 12) { // Validar la longitud del RUT
           
          celularInput.setCustomValidity("El número de celular debe tener entre 9 y 12 dígitos"); // Establecer mensaje de error personalizado en el input
        } else {
          document.getElementById("error").innerHTML = "";
          celularInput.setCustomValidity(""); // Restablecer mensaje de error personalizado en el input
        }
      }
