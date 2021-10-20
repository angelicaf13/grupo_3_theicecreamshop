import React from 'react';
import home1 from '../assets/img/homepage/1.png';
import home2 from '../assets/img/homepage/2.jpg';
import home3 from '../assets/img/homepage/3.jpg';
import home4 from '../assets/img/homepage/4.jpg';
import home5 from '../assets/img/homepage/5.jpg';
import home6 from '../assets/img/homepage/6.jpg';
function Main(){
    return(
    <main>
        <section>
            <div className="mySlides">
                <div className="numbertext"></div>
                  <img src={home1} style={{width: "100%"}} />
              </div>
        </section>
        <section>
            <header>
                <h2>Acerca de nosotros</h2>
            </header>
            <article id="historia-link" className="historia">
                Nuestra historia: The IceCreamShop nace en 2021 como un proyecto de las fundadoras Ana Hernández, Angélica Figueroa, 
                y Victoria Fierro con el objetivo de crear una página web que concentre las mejores marcas de helado a nivel mundial.
                Nuestro objetivo es llevar hasta la puerta de tu casa los mejores sabores y texturas con sólo un click. Nos interesa 
                brindar experiencias nuevas, por lo que siempre encontrarás nuevos productos en la página, siempre comprometidos a que 
                los mismos estén elaborados con ingredientes de la más alta calidad.
            </article>
        </section>
        <section id="marcas-link" className="container-2">
            <div className="gallery">
            <figure className="gallery-item-1">
                <div className="text-brand">
                <h2>Ben & Jerry's</h2>
                <p>Desde una estación de servicio renovada en Burlington, Vermont, 
                   hasta lugares lejanos con nombres que a menudo pronunciamos mal, 
                   el viaje que comenzó en 1978 con dos tipos, y el negocio de helados 
                   que construyeron es tan legendario como el helado es eufórico.
                </p>
            </div>
                <img src={home2} className="gallery-img"/>
            </figure>
            <figure className="gallery-item-2">
                <div className="text-brand">
                    <h2>Thrifty</h2>
                    <p>Thrifty Ice Cream es una empresa 100% norteamericana fundada 
                       en el Estado de California en 1940, que se ha dedicado exclusivamente 
                       a la elaboración de helados de crema de la más alta calidad.
                    </p>
                </div>
                <img src={home3} className="gallery-img"/>
            </figure>
            <figure className="gallery-item-3">
                <div className="text-brand">
                    <h2>Häagen Dazs</h2>
                    <p>Häagen-Dazs ha fabricado helados como ningún otro desde 1960. 
                        La visión de su fundador, Reuben Mattus, fue desarrollar el helado 
                        más extraordinario que el mundo haya probado, una cucharada de lujo 
                        para escapar de lo cotidiano.
                    </p>
                </div>
                <img src={home4} className="gallery-img"/>
            </figure>
            <figure className="gallery-item-4">
                <div className="text-brand">
                    <h2>Holanda</h2>
                    <p>Helados Holanda tiene su origen en 1927 cuando Don Francisco Alatorre 
                       instaló un puesto en el jardín del Buen Tono junto al actual mercado 
                       de San Juan en el centro de la Ciudad de México. Desde entonces su misión
                       ha sido poner tantas sonrisas en la gente como sea posible ofreciendo productos 
                       tanto clásicos como deliciosos.
                    </p>
                </div>
                <img src={home5} className="gallery-img"/>
            </figure>
            <figure className="gallery-item-5">
                <div className="text-brand">
                    <h2>Blue Bell</h2>
                    <p>Blue Bell Ice Cream es elaborado a la antigua, utilizando los ingredientes
                       más deliciosos y de la más alta calidad. Lo cual complementan con las habilidades 
                       y el conocimiento que han desarrollado durante más de 100 años 
                       de producir más sabores de los que se pueden alcanzar con una cuchara.
                    </p>
                </div>
                <img src={home6} className="gallery-img" />
            </figure>
            </div>
        </section>
       <div id="contactanos-link" className="contacto-box">
        <section className="contacto">
            <p>Síguenos en Instagram<a href="#">@TheIceCreamShop</a></p>
            <i className="fab fa-instagram"></i>
        </section>
        <section className="comentario">
            <p className="contacto">¡DÉJANOS TUS COMENTARIOS ANÓNIMOS!</p>
            <textarea name="textarea" rows="10" cols="40">    </textarea>
            <div className="botones-comentario">
                <button type="submit" className="comments-button-right">Enviar</button>
            </div>
        </section>
       </div>
    </main>
    )
}
export default Main;