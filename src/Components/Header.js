import React from 'react';
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Header(props) {
    return (
        <div>
                   <div className="navbar">
                        <ul className="nav">
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
                        
                <div className="iconsNav"> 
                                <a href="https://www.facebook.com/" target="_blanck"><FacebookOutlined style={{fontSize: "30px", color:"white"}} padding="10%"/></a>
                                <a href="https://www.instagram.com/?hl=es-la" target="_blanck"><InstagramOutlined style={{fontSize: "30px", color:"white"}}padding="10%"/></a>
                                <a href="https://www.linkedin.com/" target="_blanck"><LinkedinOutlined style={{fontSize: "30px", color:"white"}}padding="10%"/></a>
                </div>    
                </div>             
        </div>
    );
}

export default Header;