import React  from 'react';
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import foto1 from '../img/Post3.jpg';


export default function Home () {
return (
       <div className="Post1">
             <div >
                <ul className="navBlog">
                        <li><a href="/">Home</a></li>
                        <li><a href="./about">Sobre nosotros</a></li>
                        <li><a href="./servicios">Servicios</a></li>
                        <li><a ><Nav>
                                <UncontrolledDropdown >
                                <DropdownToggle tag="a">Galería</DropdownToggle>
                                        <DropdownMenu  >
                                                <DropdownItem  href="./galeria">galeria</DropdownItem>
                                                <DropdownItem  href="./galeria2">galeria2</DropdownItem>
                                                <DropdownItem  href="./galeria3">galeria3</DropdownItem>
                                        </DropdownMenu>
                                </UncontrolledDropdown>
                           </Nav></a>
                        </li>
                        <li><a href="./blog">Blog</a></li>
                        <li><a href="./contacto">Contacto</a></li>
                </ul>
        <div className="iconsNavBlog"> 
                <a href="https://www.facebook.com/" target="_blanck"><FacebookOutlined style={{fontSize: "30px", color:"white"}} padding="10%"/></a>
                <a href="https://www.instagram.com/?hl=es-la" target="_blanck"><InstagramOutlined style={{fontSize: "30px", color:"white"}}padding="10%"/></a>
                <a href="https://www.linkedin.com/" target="_blanck"><LinkedinOutlined style={{fontSize: "30px", color:"white"}}padding="10%"/></a>
        </div>    
       
        <a className="blogNav" href="/"><bottom>Mi Página Web </bottom></a>
            <h1 className="miBlog">"Post 3"</h1>
                <div className="media">
                    <img src={foto1} class="align-self-start mr-3" alt="..."/>
                    <div className="media-body">
                        <h5 className="mt-0">Top-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                        <a className="page-item" href="./Post2" tabindex="-1" aria-disabled="true">Anterior</a>
                        </li>
                        <li className="page-item"><a class="page-item" href="./Post1">1</a></li>
                        <li className="page-item"><a class="page-item" href="Post2">2</a></li>
                        <li className="page-item"><a class="page-item" href="Post3">3</a></li>
                        <li className="page-item">
                        <a className="page-item" href="./blog">Siguiente</a>
                        </li>
                    </ul>
                </nav>
        </div>
    </div>  
    );
};