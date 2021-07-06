import React from 'react';
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined, SearchOutlined} from '@ant-design/icons';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Footer() {
    return (
        <div className="footer">
            <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="container icons "> 
            <a href="https://www.facebook.com/" target="_blanck"><FacebookOutlined style={{fontSize: "30px", color:"white"}} padding="10%"/></a>
            <a href="https://www.instagram.com/" target="_blanck"><InstagramOutlined style={{fontSize: "30px", color:"white"}}padding="10%"/></a>
            <a href="https://www.linkedin.com/" target="_blanck"><LinkedinOutlined style={{fontSize: "30px", color:"white"}}padding="10%"/></a>
            </div>
            </div>
                    <div>
                    <a className="footNav" href="/"><bottom>Mi Página Web </bottom></a>
            </div>    
                    <div className="foot">

                        <ul>
                            <li className="pie"><a href="./about">Sobre nosotros</a></li>
                            <li className="pie"><a href="./servicios">Servicios</a></li>
                            <li className="pie"><a ><Nav>
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
                            <li className="pie"><a href="./blog">  Blog   </a></li>
                            <li className="pie"><a href="./contacto">Contacto</a></li>
                        </ul>
                    </div>
                
                <div className="container">
                    <div className="mr-sm-2">
                    <input  className="search" type="text" placeholder="Buscar.." name="search"  icon={<SearchOutlined />}/>
                    </div>
                    </div>
                <div className="copyrigthfoot">
                    <p>Copyrigth | Oscar Baez</p>
                </div>
        </div>
    )
      
}
export default Footer;