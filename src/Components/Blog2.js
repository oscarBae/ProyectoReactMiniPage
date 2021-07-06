import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../img/Post1.jpg';
import foto2 from '../img/instagramBlog.jpg';
import foto3 from '../img/Post2.jpg';



export default function Home () {
return (
        
        <div className="blog2">
                <div className="row w-250 h100">
                        <div className="col-sm-3">
                           <div className="card">
                                <div className="card-body">
                                        <img src={foto1} className="card-img-top" alt="..." />
                                        <h5 className="card-text text-center">Pinterest</h5>
                                        <a href="./Post1" className="btn btn-secondary">Post 1</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="card">
                                <div className="card-body">
                                        <img src={foto2} class="card-img-top" alt="..." />
                                        <h5 className="card-title text-center">Instagram</h5>
                                        <a href="./Post2" className="btn btn-secondary">Post 2</a>
                                </div>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="card">
                                <div className="card-body">
                                        <img src={foto3} class="card-img-top" alt="..." />
                                        <h5 className="card-title text-center">Brand Design</h5>
                                        <a href="./Post3" className="btn btn-secondary">Post 3</a>
                                </div>
                           </div>
                        </div>
                </div>
        </div> 
  );
};
  

