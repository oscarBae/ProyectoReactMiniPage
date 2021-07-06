import React, { useState, useEffect } from 'react'
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Footer from '../Components/Footer';

export default function App() {
  const [images, setImages] = useState([])
  const [blocks, setBlocks] = useState(1)

  const more = async () => {
    const more_images = await fetch_images(blocks + 1)
    setBlocks(prev => prev + 1)
    setImages(prev => [...prev, ...more_images])
  }

  const fetch_images = async page => (await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)).json()

  useEffect(() => {
    ;(async () => {
      const picsum = await fetch_images(0)
      setImages(picsum)
    })()
  }, [])

  return (
    <div className= "gallery">
          <ul class="navGallery">
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
        <div className="App">
            <div style={{ display:'table', flexDirection:'column' }}>
              {images.map((el, i) => (
                  <img
                    key={`img${i}`}
                    src={el.download_url}
                    style={{
                    margin: '5%',
                    width: '450px',
                    height: '240px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    }}
                 alt=""/>
               ))}
            </div>
                <button style={{ marginBottom: '100px'}} onClick={more} border={'none'}>
                  más imagenes
                </button>
                <Footer />
        </div>
    </div>
  )
}
