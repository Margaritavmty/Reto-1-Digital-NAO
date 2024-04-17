(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
         
            // Aquí agregamos la redirección después de que el formulario sea válido
          window.location.href = "url_de_la_otra_pagina";
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  