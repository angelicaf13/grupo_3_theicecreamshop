window.onload = function(){
    let errors = {};
    let form = document.getElementsByClassName("register-form")
    let name = document.getElementById('first_name');
    let lastName = document.getElementById('last_name');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let profileImg = document.getElementById('profileImage');

    let lastEmailValue = "";

    name.focus();

    function namesValidation(input){

        if(input.value == ""){
            input.classList.add('invalid');
            input.placeholder = "Este campo es obligatorio"
            errors[input.name] = `${input.name} is required`
        }else if(input.value.length < 2){
            input.classList.add('invalid');
            input.placeholder = "Se deben ingresar al menos 2 caracteres"
            input.value = ""
            errors[input.name] = `${input.name} does not have the required length`
        }else{
            input.classList.remove('invalid');
            delete errors[input.name]
        }
    }

    function emailValidation(input){
        const result = /\S+@\S+\.\S+/.test(input.value)

        if(input.value == ""){
            input.classList.add('invalid');
            input.placeholder = "Este campo es obligatorio"
            errors[input.name] = `${input.name} is required`
        }else if(!result) {
            input.classList.add('invalid');
            input.placeholder = "El correo ingresado no es valido"
            lastEmailValue = input.value;
            input.value = ""
            errors[input.name] = `${input.name} is not an email`
        } else {
            input.classList.remove('invalid');
            lastEmailValue = input.value;
            delete errors[input.name] 
        }

    }

    function passValidation(input){
        if(input.value == ""){
            input.classList.add('invalid');
            input.placeholder = "Este campo es obligatorio"
            errors[input.name] = `${input.name} is required`
        }else if(input.value.length < 8){
            input.classList.add('invalid');
            input.placeholder = "Se deben ingresar al menos 8 caracteres"
            input.value = ""
            errors[input.name] = `${input.name} does not have the required length`
        }else{
            input.classList.remove('invalid');
            delete errors[input.name]
        }
    }

    function imageValidation(input){
        if(input.value != ""){
            let fileName = input.value;
            let extension = fileName.substring(fileName.lastIndexOf('.') + 1);
            if(!['PNG', 'JPG', 'JPEG', 'GIF'].includes(extension.toUpperCase())){ //Formato invalido
                if(document.querySelector('.image-format-message')){
                    document.querySelector('.image-format-message').style.color = 'FireBrick';
                    document.querySelector('.image-format-message').innerText = "Las extensiones validas son PNG, JPG, JPEG y GIF."
                }else{
                let node = document.createElement("P");
                let message = document.createTextNode("Las extensiones validas son PNG, JPG, JPEG y GIF.");
                node.style.color = 'FireBrick';
                node.classList.add('image-format-message')
                node.appendChild(message);
                document.querySelector('.img-container').appendChild(node);
            }
            }else{ // Formato valido
                if(document.querySelector('.image-format-message')){
                    document.querySelector('.image-format-message').style.color = 'MediumSeaGreen';
                    document.querySelector('.image-format-message').innerText = "Archivo cargado correctamente."
                }else{
                    let node = document.createElement("P");
                    let message = document.createTextNode("Archivo cargado correctamente.");
                    node.style.color = 'MediumSeaGreen';
                    node.classList.add('image-format-message')
                    node.appendChild(message);
                    document.querySelector('.img-container').appendChild(node);
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

    function validatePass(){
        passValidation(pass);
    }

    function validateImg(){
        imageValidation(profileImg)
    }

    name.addEventListener('blur', () => validateName())
    lastName.addEventListener('blur', () => validateLastName())
    
    email.addEventListener('blur', () => validateEmail())
    email.addEventListener('focus', () => {
        email.value = lastEmailValue;
    })
    
    pass.addEventListener('blur', () => validatePass())

    profileImg.addEventListener('change', () => validateImg())


    
}