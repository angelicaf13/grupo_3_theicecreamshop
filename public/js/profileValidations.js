window.addEventListener('load',() =>{
    let errors = {};
    let perfilForm = document.querySelector(".perfil-form")
    let name = document.querySelector('#first_names');
    let lastName = document.querySelector('#last_names');
    let email = document.querySelector('#emails');
    let perfilImg = document.querySelector('#profileImages');

    name.focus();

    function namesValidation(input){
        if(input.value == ""){
            input.style.border = "solid maroon";
            input.placeholder = "Este campo es obligatorio"
            errors[input.name] = `${input.name} is required`
        }else if(input.value.length < 2){
            input.style.border = "solid maroon";
            input.placeholder = "Se deben ingresar al menos 2 caracteres"
            input.value = ""
            errors[input.name] = `${input.name} does not have the required length`
        }else{
            input.style.border = "solid green";
            delete errors[input.name]
        }
    }

    function emailValidation(input){
        const result = /\S+@\S+\.\S+/.test(input.value)

        if(input.value == ""){
            input.style.border = "solid maroon";
            input.placeholder = "Este campo es obligatorio"
            errors[input.name] = `${input.name} is required`
        }else if(!result) {
            input.style.border = "solid maroon";
            input.placeholder = "El correo ingresado no es valido"
            input.value = ""
            errors[input.name] = `${input.name} is not an email`
        } else {
            input.style.border = "solid green";
            delete errors[input.name] 
        }

    }

    function validationImagen(input){
        if(input.value != ""){
            const file = input.value;
            const extension = file.substring(file.lastIndexOf('.') + 1);
            if(!['PNG', 'JPG', 'JPEG', 'GIF'].includes(extension.toUpperCase())){ 
                if(document.querySelector('.format')){
                    document.querySelector('.format').style.color = 'FireBrick';
                    document.querySelector('.format').innerText = "Las extensiones válidas son PNG, JPG, JPEG y GIF.";
                }else{
                    const etiqueta = document.createElement("P");
                    const msg = document.createTextNode("Las extensiones válidas son PNG, JPG, JPEG y GIF.");
                    etiqueta.style.color = 'FireBrick';
                    etiqueta.classList.add('format');
                    etiqueta.appendChild(msg);
                    document.querySelector('.perfil-class').appendChild(etiqueta);
            }
            }else{ 
                if(document.querySelector('.format')){
                    document.querySelector('.format').style.color = 'MediumSeaGreen';
                    document.querySelector('.format').innerText = "Archivo cargado correctamente.";
                }else{
                    const etiqueta = document.createElement("P");
                    const msg = document.createTextNode("Archivo cargado correctamente.");
                    etiqueta.style.color = 'MediumSeaGreen';
                    etiqueta.classList.add('format');
                    etiqueta.appendChild(msg);
                    document.querySelector('.perfil-class').appendChild(etiqueta);
                }
            }
        }
    }

    function validateName(){
        namesValidation(name);
    }

    function validateLastName(){
        namesValidation(lastName);
    }

    function validateEmail(){
        emailValidation(email);
    }

    function validateImg(){
        validationImagen(perfilImg);
    }

    name.addEventListener('blur', () => validateName());
    lastName.addEventListener('blur', () => validateLastName());
    email.addEventListener('blur', () => validateEmail());
    perfilImg.addEventListener('change', () => validateImg());

    function formValidation() {
        validateName(),
        validateLastName(),
        validateEmail(),
        validateImg() 
    }

    perfilForm.addEventListener("submit", function(e) {
        formValidation()
        if(Object.keys(errors).length) {
            e.preventDefault();
        }
    })
})