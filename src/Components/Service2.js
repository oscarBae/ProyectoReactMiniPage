import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../img/Post1.jpg';
import foto2 from '../img/instagramBlog.jpg';
import foto3 from '../img/Post2.jpg';

export default function Home () {
return (
        
        <div className="card">
                <div className="row">
                        <div className="col-sm-3 ">
                           <div className="card m-4 pl-4">
                                <div className="card-body">
                                        <img src={foto1} className="card-img-top" alt="..." />
                                        <h5 className="card-text text-center">Pinterest Management</h5>
                                        <a href="./servicios3" className="btn btn-secondary">Ir a Servicio</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="card m-4 pl-4">
                                <div className="card-body">
                                        <img src={foto2} class="card-img-top" alt="..." />
                                        <h5 className="card-title text-center">Instagram Strategy</h5>
                                        <a href="./servicios4" className="btn btn-secondary">Ir a Servicio</a>
                                </div>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="card m-4 pl-4">
                                <div className="card-body">
                                        <img src={foto3} class="card-img-top" alt="..." />
                                        <h5 className="card-title text-center">Brand Design</h5>
                                        <a href="./servicios5" className="btn btn-secondary">Ir a Servicio</a>
                                </div>
                           </div>
                        </div>
                </div>
        </div> 
  );
};
  

