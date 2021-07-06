import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import foto1 from '../img/notebook.jpg';
import foto2 from '../img/suscribe5.jpg';
import foto3 from '../img/portada2.jpg';



  const Slideshow = () => {
    return (
      
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={foto1} style={{
              width: '650px',
              height: '440px',
              marginLeft: '-20%',
            }} alt="description of image"/>
            </div>
           
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={foto2} style={{
              width: '650px',
              height: '440px',
              marginLeft: '-15%',
            }}/>
            </div>
           
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={foto3} style={{
              width: '650px',
              height: '440px',
              marginLeft: '-15%',
            }}/>
            </div>
           
          </div>
        </Fade>
      </div>
     
    )
  }

export default Slideshow;