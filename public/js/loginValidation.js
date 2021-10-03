window.onload = function() {
    let errores = {};
    let formulario = document.querySelector('.login-form');
    let email = document.querySelector('#email');
    let password = document.querySelector('#pass');
    
    email.focus();

    function validateIsRequired(input) {
        const inputName = input.name;

        if(input.value === "") {
            input.classList.add('invalid');
            console.log('value is required');
            errores[inputName] = `${inputName} is required`
        } else {
            input.classList.remove('invalid');
            //input.classList.add('valid');
            console.log('value is valid');
            delete errores[inputName]
        }
    }

    function emailIsValid (input) {
        const inputName = input.name;
        const result = /\S+@\S+\.\S+/.test(input.value)

        if(result) {
            input.classList.remove('invalid');
            //input.classList.add('valid');
            console.log('value is email');
            delete errores[inputName]
        } else {
            input.classList.add('invalid');
            console.log('value is not an email');
            errores[inputName] = `${inputName} is not an email`
        }
     }

    function validateEmail() {
        validateIsRequired(email);
        emailIsValid(email);
    }

    function validatePassword() {
        validateIsRequired(password);
    }

    function validateForm() {
        validateEmail()
        validatePassword()
    }

    email.addEventListener("blur", function(){
        validateEmail()
    })
            
    password.addEventListener("blur", function(){
        validatePassword()
    })

    formulario.addEventListener("submit", function(e) {

        validateForm()
        
        if(Object.keys(errores).length) {
            e.preventDefault();
            let ulErrores = document.querySelector("ul.errores");
            ulErrores.classList.add('alert-warning');
            ulErrores.innerHTML += `<pre><code>${JSON.stringify(errores, null, 4)}</pre></code>`
        } else {
            console.log('Todo bien')
        }
    })
}