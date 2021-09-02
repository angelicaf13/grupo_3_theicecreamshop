function confirmDelete() {
  const mensaje = confirm("¿Realmente deseas eliminar el producto? Recuerda que no podras recuperar la información");
  const formularioDelete = document.getElementById("mensaje-emergente");
  if (mensaje === true) {
      formularioDelete.method = "POST";
      formularioDelete.action = "/products/delete/<%= productToEdit.id %>?_method=DELETE";
      formularioDelete.submit();
        alert("¡Producto eliminado!");
    } else {
        alert("La acción no se realizó");
    return ;
    }
}
