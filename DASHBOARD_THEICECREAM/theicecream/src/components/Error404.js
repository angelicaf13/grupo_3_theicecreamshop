import React from 'react';
import error from '../assets/img/logo_errores/err.jpg';
function Error404 (){
    return(
<body>
    <div class="ex3">
    <p class="err">¡ERROR!</p>
    </div>
    <div class="ex">
    <p class="err">Lo sentimos, no se encuentra la página seleccionada</p>
    <img src={error} class="err1"/>
    </div>
</body>
    )
}
export default Error404;