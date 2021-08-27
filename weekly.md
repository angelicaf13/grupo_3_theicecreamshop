# Weekly
En el presente archivo se presentan los avances semanales para cada uno de los sprints que se van realizando, comenzado con el Sprint 2.

## Sprint 2

En este sprint nos encargamos de realizar las vistas del sitio. Al finalizar, se obtuvieron 7 archivos HTML:
* [index.html](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/index.html)
* [login.html](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/login.html)
* [productCar.html](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/productCar.html)
* [productDetail.html](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/productDetail.html)
* [productList.html](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/productList.html)
* [profile.html](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/profile.html)
* [register.html](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/register.html)

De igual forma se desarrollaron los estilos para estas vistas, trabajando en dos archivos CSS:
* [style.css](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/public/css/style.css)
* [style-2.css](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/public/css/style-2.css)

Se presentó un caso particular donde fue necesaria la implementación del Wireframe para una de las 7 vistas que aún no se tenía en consideración, siendo este el siguiente: 
* [perfilUsuario.png](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/wireframes/perfilUsuario.png)

Durante el desarrollo de este sprint no se presentaron impedimentos, sin embargo se presentaron casos en donde al trabajar con las vistas en HTML se omitía la inclusión de algún elemento HTML que previamente había sido considerado en los Wireframes, para solucionar esto fue importante que todo el equipo revisara las vistas, tanto propias como las que trabajaba alguien más, de esta forma fue fácil identificar alguna omisión o elemento faltante y la persona responsable de la vista se encargaba de realizar la correción debida. 

La planeación de tareas a realizar para esta siguiente semana son aquellas identificadas en el documento del Sprint 3 y las cuales han sido agregadas al [tablero de Trello](https://trello.com/invite/b/FT08391N/8bc0086cf580c94f71dada66c6cf43e0/equipo-3) del equipo.

## Sprint 3 - Semana 1

En esta reunión se analizaron las tareas realizadas a lo largo de la semana, se incluyeron las vistas siguientes:
* [addProduct.ejs](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/products/addProduct.ejs)
* [updateProduct.ejs](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/products/updateProduct.ejs)

Se aplico el patrón de diseño MVC y se organizo la información por medio de las carpetas:
* routes
* controllers

Se muestran las pantallas por medio de la renderización.
Todas las vistas tienen extención ejs.

Por el momento no encontramos impedimentos para continuar trabajando en este sprint.

## Sprint 3 - Semana 2

En este periodo se realizaron mejoras en las vistas ejs, modificando los estilos CSS y agregando animaciones en los formularios faltantes. También se inició con la configuración para la carga de información de manera dinámica, para lo cual se creó el archivo [products.json](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/data/products.json) donde se almacena la información de los productos y del cual se obtiene la información para [productList.ejs](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/products/productList.ejs).

## Sprint 4 - Semana 1

Se desarrollaron las funcionalidades para la edición y eliminación de productos y de igual forma se habilitó la funcionalidad para registrar un producto nuevo, para ello se utilizaron los métodos/verbos HTTP previamente estudiados, estos son GET, POST, PUT y DELETE. Además, se realizó la instalación y configuración de Multer en el proyecto, para lograr el almacenamiento de imágenes. También, se agregaron nuevos campos de información en el archivo [products.json](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/data/products.json) y se creó una versión inicial del archivo [users.json](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/data/users.json), con el objetivo de mantener la información de los usuarios del sitio. Un aspecto importante fue la detección de ciertos errores en los enlaces de redireccionamiento del sitio y con lo cual se decidió realizar un periodo de pruebas al estado actual del proyecto, para detectar errores y ahorrar tiempo en un futuro. 

## Sprint 4 - Semana 2

Se hicieron mejoras a los trabajos de la semana pasada como la separación del middleware multer en una carpeta aparte para mantener el código lo más organizado posible. Se modificó la vista de detalle de producto para cambiar el precio de la nieve dependiendo de la presentación del mismo, y los formularios de registro y modificación de producto. Además, se decidió agregar un mensaje de confirmación a la hora de querer elimnar un producto (DELETE). Se siguieron haciendo pruebas para verificar que la página funcione correctamente y mejoras de diseño. 

## Sprint 5 - Semana 1

Se realizó la repartición de tareas para este sprint, identificando las actividades requeridas para cumplir con los objetivos del sprint. De igual forma se solucionaron algunos errores encontrados en el funcionamiento de la página al realizar pruebas, uno de ellos fue durante el proceso de eliminación de un producto, ya que se añadió una ventana emergente para que el usuario confirme la eliminación, sin embargo se presentó el problema en donde no se completaba la eliminación. 

## Sprint 5 - Semana 2

Siguiendo la retroalimentación y los comentarios recibidos por parte de los profesores, se hicieron algunas modificaciones a la estructura y organización del proyecto y sus carpetas y archivos. Por una parte se dividieron y organizaron los archivos de imágenes, al igual que se agruparon los archivos para las fuentes utilizadas en los textos del sitio web. De igual forma, se iniciaron con las tareas asignadas de este sprint, específicamente con el proceso de registro y la validación en el formulario de este mismo. 

## Sprint 5 - Semana 3

Las modificaciones de esta semana tuvieron que ver con la validación y funcionalidad del formulario de login, además de agregar las funcionalidades de session y las cookies para mantener la información del usuario conectado en el sitio. 

## Sprint 5 - Semana 4

En esta última semana del Sprint 5 se realizaron ciertas modificaciones a las vistas de [productList.ejs](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/products/productList.ejs) y [profile.ejs](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/users/profile.ejs), en el primer caso, se incluyo una validación para comprobar si el usuario es de tipo cliente o administrador y basándose en esto incluir o no el botón de edición de productos (ya que solo los administradores tienen acceso a esta función), para lo cual se incluyo el middleware [adminMiddleware.js](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/middleware/adminMiddleware.js), este último también es utilizado para la validación del tipo de usuario en la vista del perfil, donde se incluye o no un botón para la inclusión de un nuevo producto (cosa que solo un administrador puede hacer). También se incluyo una validación extra del tipo de usuario, esto al momento de ingresar directamente la URL para ingresar a la vista de [addProduct.ejs](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/products/addProduct.ejs), en la que si el usuario no es administrador, entonces es redireccionado a la vista [accessError.ejs](https://github.com/angelicaf13/grupo_3_theicecreamshop/blob/main/views/errores/accessError.ejs). 

## Sprint 6 - Semana 1
