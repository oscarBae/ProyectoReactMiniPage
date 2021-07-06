import React from 'react';
import Carousel from '../Components/Carousel';
import Header from '../Components/Header';



export default function About () {

return (
        <div className="">
        <div className="Sidebar">
                <div className="main-content">
                        <Header />
                        <a className="miPagina" href="/"><bottom>Mi Página Web </bottom></a>
                        <span className="Bienveside">Sobre Nosotros</span>
                                
                        <div className="imageAbout">
                                <Carousel />
                        </div>
                                <span className="bienvenAbout">"Sobre Nosotros"</span>
                        <div className="AboutPage">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Culpa nihil impedit natus nostrum?Velit accusantium id quos,
                                        nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus
                                        vero eum facere exercitationem velit suscipit ipsam placeat libero. </p>
                                <div>
                                <a className="" href="./"><bottom className="btn btn-secondary">Ver más</bottom></a>
                                </div>
                        </div>
                        
                </div> 
        </div>
        </div>
    );
};
  
