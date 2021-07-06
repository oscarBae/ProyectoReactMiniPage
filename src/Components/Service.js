import React from 'react';
import ServiCarousel from '../Components/ServiCarousel';
import Header from '../Components/Header';


function serviCarousel() {
    return (
        
        <div className="Sidebar">
                <div className="main-content">
                
                <a className="miPagina" href="/"><bottom>Mi Página Web </bottom></a>
                        <span className="ServiceSide">Servicios</span>
                    <Header />            
                    <div className="imageAbout">
                        <ServiCarousel />
                        
                    </div>
                                        <span className="bienvenService">"Nuestros Servicios"</span>
                        <div className="AboutPage">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Culpa nihil impedit natus nostrum?Velit accusantium id quos,
                                        nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus
                                        vero eum facere exercitationem velit suscipit ipsam placeat libero. </p>
                                       
                        </div>
                        
                </div> 

        
</div>
    );
};
  

export default serviCarousel;