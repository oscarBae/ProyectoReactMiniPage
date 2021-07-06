import React from 'react';
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import avatar from '../img/notebook.jpg';
import Footer from '../Components/Footer';


function ServiceTwo() {
    return (
        <div className="ServiceTwo">
        
                <div className="serviceImage">
                <ul className="navService">
                                <li><a href="./">Home</a></li>
                                <li><a href="./about">Sobre nosotros</a></li>
                                <li><a href="./servicios">Servicios</a></li>
                                <li><a ><Nav>
                                        <UncontrolledDropdown >
                                                <DropdownToggle tag="a">
                                                        Galería
                                                </DropdownToggle>
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
                <div className="iconsNavService"> 
                        <a href="https://www.facebook.com/" target="_blanck"><FacebookOutlined style={{fontSize: "30px", color:"gray"}} padding="10%"/></a>
                        <a href="https://www.instagram.com/?hl=es-la" target="_blanck"><InstagramOutlined style={{fontSize: "30px", color:"gray"}}padding="10%"/></a>
                        <a href="https://www.linkedin.com/" target="_blanck"><LinkedinOutlined style={{fontSize: "30px", color:"gray"}}padding="10%"/></a>
                </div>
                            <div className="TitService">
                            <p >"Instagram Strategy"</p>
                            </div>
                        <img className="serviceImage" src={avatar} alt=""/>
                                        
                        <div className="servitext">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Culpa nihil impedit natus nostrum?Velit accusantium id quos,
                                        nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus
                                        vero eum facere exercitationem velit suscipit ipsam placeat libero. </p>
                                <div>
                                     <a className="btn btn-secondary" href="/formulario"><bottom>Consultanos</bottom></a>
                                </div> 
                        </div>
                        </div>
                        <Footer />         
                </div> 
    );
};
  

export default ServiceTwo;