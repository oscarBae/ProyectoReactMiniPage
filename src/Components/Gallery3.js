import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import foto1 from '../img/notebook.jpg';
import foto2 from '../img/suscribe5.jpg';
import foto3 from '../img/portada2.jpg';
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Footer from '../Components/Footer';


  const Slideshow = () => {
    return (
      <div className= "gallery">
            <ul className="navGallery" >
                <li><a href="/"> Home</a></li>
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
                        
            <div className="iconsNavGallery"> 
                <a href="https://www.facebook.com/" target="_blanck"><FacebookOutlined style={{fontSize: "30px", color:"gray"}} padding="10%"/></a>
                <a href="https://www.instagram.com/?hl=es-la" target="_blanck"><InstagramOutlined style={{fontSize: "30px", color:"gray"}}padding="10%"/></a>
                <a href="https://www.linkedin.com/" target="_blanck"><LinkedinOutlined style={{fontSize: "30px", color:"gray"}}padding="10%"/></a>
            </div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={foto1} style={{
              margin: '5%',
              width: '950px',
              height: '540px',
              marginBottom: '10px',
              borderRadius: '5px',
              marginLeft: '20%',
            }}/>
           </div>
            </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={foto2} style={{
              margin: '5%',
              width: '850px',
              height: '540px',
              marginBottom: '10px',
              borderRadius: '5px',
              marginLeft: '20%',
            }}/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={foto3} style={{
              margin: '5%',
              width: '850px',
              height: '540px',
              marginBottom: '10px',
              borderRadius: '5px',
              marginLeft: '20%',
            }}/>
            </div>
          </div>
        </Fade>
        <Footer />
      </div>
      </div>
      
    )
  }

export default Slideshow;