import React  from 'react';
import avatar from '../img/contacto.jpg'
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact () {
return (
        
        <div className="Sidebar">
                <div className="main-content">
                <a className="miPagina" href="/"><bottom>Mi Página Web </bottom></a>
                        <span className="sideWelcome">Contacto</span>
                        <Header />
                                <img className="imageContacto" src={avatar} alt=""/>
                                        <span className="bienvenidos">Contactanos</span>
                        <div className="HomePage">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Culpa nihil impedit natus nostrum?Velit accusantium id quos,
                                        nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus
                                        vero eum facere exercitationem velit suscipit ipsam placeat libero. </p>
                                <div>
                                     <a className="btn btn-secondary" href="./formulario"><bottom>Formulario</bottom></a>
                                </div>
                        </div>
                        
                </div> 

        </div>
    );
};
  

