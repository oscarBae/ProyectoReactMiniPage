import React from 'react';
import suscribe from '../img/imagen4.jpg'
import {Input } from 'reactstrap';


function HomePage() {
    return (
        
        <div className="card text-white m-5 pl-5 col-md-8">
                    <img className="card-img p-sm" src={suscribe} alt=""/>
                    <div className="card-img-overlay">
                    <h1 className="card-title bg-secondary text-center ">Suscribite </h1>
                    <p className="card-text bg-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="p-2 md-3">
                    <Input  className="p-2 md-3 "type="email" name="email" id="exampleEmail" placeholder="Ingresa tú email" />
                    </div>
                    <br />
                    <div className="p-2 flex-fill bd-highlight">
                    <a className="text-center" href="./"><bottom className="btn btn-secondary">Enviar</bottom></a>
                    </div>                 
                    </div>
      </div>
      
    );
}

export default HomePage;

/*<div className="">
                                  
                                  <div className="suscribepage">
                                  <img className="imagesuscribe" src={suscribe} alt=""/>
                                 
                                      <h1 className="titulo">Suscribite </h1>
                                      <p className="subtitulo">Sign up with your email address to receive news and updates.</p>
                                      
                                  </div>
                                  <div className="ventana">
                                  <Input  type="email" name="email" id="exampleEmail" placeholder="Ingresa tú email" />
                                          
                                  </div>
                                  <div>
                                      <a className="enviar" href="./"><bottom className="btn btn-secondary">Enviar</bottom></a>
                                  </div>
                                      <p className="suscribe2">Suscribite</p>     
                          </div>*/