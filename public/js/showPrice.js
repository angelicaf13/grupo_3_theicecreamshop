function showPrice(){
    const priceText = document.querySelector(".precios h3")
    const selected = document.querySelector(".size-select").value;

     priceText.innerText = "Precio: " + selected + " MXN";
    

}
