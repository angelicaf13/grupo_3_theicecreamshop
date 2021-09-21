function confirmDelete() {
  const mensaje = confirm("¿Realmente deseas eliminar el producto? Recuerda que no podras recuperar la información");
  const formularioDelete = document.getElementById("mensaje-emergente");
  if (mensaje === true) {
      formularioDelete.method = "POST";
      formularioDelete.action = "/products/delete/<%= producto.id_product %>?_method=PUT";
      formularioDelete.submit();
        alert("¡Producto eliminado!");
    } else {
        alert("La acción no se realizó");
    return ;
    }
}
