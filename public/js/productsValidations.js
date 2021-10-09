window.addEventListener('load',() =>{
    const errors = {};
    const formProducts = document.querySelector('.add-form');
    const description = document.querySelector('#description');
    const stock = document.querySelector('#stock');
    const price = document.querySelector('#price');
    const productImage = document.querySelector('#productImage');
    const id_brand = document.querySelector("#id_brand");
    const id_flavor = document.querySelector("#id_flavor");
    const id_size = document.querySelector("#id_size");

    function descriptionValidation(input){
        if(input.value == ""){
            input.style.border = "";
            input.classList.add('invalid');
            input.placeholder = "Este campo es obligatorio";
            errors[input.name] = `${input.name} is required`;
        }else if(input.value.length < 20){
            input.style.border = "";
            input.classList.add('invalid');
            input.placeholder = "La descripción debe contener al menos 20 caracteres";
            input.value = "";
            errors[input.name] = `${input.name} length`;
        }else{
            input.classList.remove('invalid');
            input.style.border = "solid green";
            delete errors[input.name];
        }
    }
    function validateDescription(){
        descriptionValidation(description);
    }
    description.addEventListener('blur', () => validateDescription());

    function cantValidation(input){
        if(input.value == ""){
            input.classList.add('invalid');
            input.style.border = "";
            input.placeholder = "Este campo es obligatorio";
            errors[input.name] = `${input.name} is required`;
        }else if(input.value < 1){
            input.classList.add('invalid');
            input.style.border = "";
            input.placeholder = "El valor debe ser mayor a 0";
            input.value = "";
            errors[input.name] = `${input.name} length`;
        } else{
            input.classList.remove('invalid');
            input.style.border = "solid green";
            delete errors[input.name];
        }
    }
    function validateCantSt(){
        cantValidation(stock);
    }
    function validateCantPr(){
        cantValidation(price);
    }
    stock.addEventListener('blur', () => validateCantSt());
    price.addEventListener('blur', () => validateCantPr());

    function imgProductValidation(input){
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
                    document.querySelector('.product-container-img').appendChild(etiqueta);
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
                    document.querySelector('.product-container-img').appendChild(etiqueta);
                }
            }
        }
    }
    function imgValidation(){
        imgProductValidation(productImage);
    }
    productImage.addEventListener('change', () => imgValidation());

    function selectValidation(input){
        if(input.value == ""){
            input.classList.add('invalid');
            input.style.border = "";
            errors[input.name] = `${input.name} is required`;
        } else{
            input.classList.remove('invalid');
            input.style.border = "solid green";
            delete errors[input.name];
        }
    }
    function selectBrand(){
        selectValidation(id_brand);
    }
    function selectFlavor(){
        selectValidation(id_flavor);
    }
    function selectSize(){
        selectValidation(id_size);
    }
    id_brand.addEventListener('blur', () => selectBrand());
    id_flavor.addEventListener('blur', () => selectFlavor());
    id_size.addEventListener('blur', () => selectSize());

    function formValidation() {
        validateDescription()
        validateCantSt()
        validateCantPr()
        selectBrand()
        selectFlavor()
        selectSize()  
    }

    formProducts.addEventListener("submit", function(e) {
        formValidation()
        if(Object.keys(errors).length) {
            e.preventDefault();
        }
    })
})