import React  from 'react';
import avatar from '../img/portada2.jpg'
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home () {
return (
        
        <div className="Sidebar">
                <div className="main-content">
                        <span className="sideLogo">Mi página Web</span>
                        <span className="sideWelcome">Bienvenidos</span>
                                <Header />
                                        
        
                                <img className=" image img-fluid" src={avatar} alt="Responsive image"/>
                                        <span className="bienvenidos">"Bienvenidos"</span>
                        <div className="container">
                        <div className="">
                        <div className="HomePage">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Culpa nihil impedit natus nostrum?Velit accusantium id quos,
                                        nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus
                                        vero eum facere exercitationem velit suscipit ipsam placeat libero. </p>
                                <div>
                                     <a className="btn btn-secondary" href="#"><bottom>Ingresar</bottom></a>
                                </div>
                        </div>
                        </div>
                        </div>
                </div> 

        </div>
    );
};
  

