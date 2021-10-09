window.addEventListener('load',() =>{
    const formDelete = document.querySelector('#mensaje-emergente');
    const formActive = document.querySelector('#mensaje-emergente2');

    formDelete.addEventListener("submit", function(e) {
        const respuesta = confirm('¿Estas seguro de eliminar el producto?');
        if(respuesta == false){
            e.preventDefault();
        }
    })
    formActive.addEventListener("submit", function(e) {
        const respuesta = confirm('¿Estas seguro de activar el producto?');
        if(respuesta == false){
            e.preventDefault();
        }
    })
})