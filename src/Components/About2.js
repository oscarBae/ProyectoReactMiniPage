import React from 'react';
import suscribe from '../img/suscribe5.jpg'


function AboutPage() {
    return (
        <div class="card text-center p-1 align-items-center">
        <div className="card text-white m-1 pl-5 col-xl-4">
        <div className="card text-white">
        <img src={suscribe} className="card-img" alt="..."/>
        <div className="card-img-overlay  ">
            <a className="btn btn-secondary btn-lg btn-block text-white w-25" href="./servicios"><bottom>Ver Nuestros Servicios</bottom></a>
        </div>
      </div>
      </div>
      </div>
    );
}

export default AboutPage;

/*<div className="container">
<div className="verServicios">
                          
            <div className="">
                  <img className="imagesAbout" src={suscribe} alt=""/>
           
                <div className="container">
                    <a className="verServ" href="./servicios"><bottom>Ver Nuestros Servicios</bottom></a>
                </div>
            </div>
</div>
</div>*/