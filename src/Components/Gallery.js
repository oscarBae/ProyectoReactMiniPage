import React from 'react';
import ImageGallery from 'react-image-gallery';
import { render } from 'react-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import foto1 from '../img/pinterest.jpg';
import foto2 from '../img/imagen4.jpg';
import foto3 from '../img/portada2.jpg';
import foto4 from '../img/portada3.jpg';
import foto5 from '../img/notebook.jpg';
import foto6 from '../img/suscribe5.jpg';
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import Footer from '../Components/Footer';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Example () {



const images = [
{
    original: foto1,
    thumbnail: foto1,
},
{
    original: foto2,
    thumbnail: foto2,
},
{
    original: foto3,
    thumbnail: foto3,
},
{
    original: foto4,
    thumbnail: foto4,
},
{
    original: foto5,
    thumbnail: foto5,
},
{
    original: foto6,
    thumbnail: foto6,
}

];

    return (
      
      <div className= "gallery">
            <ul className="navGallery">
                <li><a href="/">Home</a></li>
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
             
       <br />
        <ImageGallery 
          items={images}
          showBullets = { false}
          slideOnThumbnailHover = { true }
        />
        <Footer />
      </div>

    );
  }


render(<Example />, document.getElementById('root'));

