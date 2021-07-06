import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../img/pinterest.jpg';
import foto2 from '../img/imagen4.jpg';
import foto3 from '../img/imagen5.jpg';


const items  = [
  {
    src: foto1,
    altText: 'Imagen 1',
    
  },
  {
    src: foto2,
    altText: 'Imagen 2',
},
  {
    src: foto3,
    altText: 'Imagen 3',
  },
];

const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem 
      
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}width="100%" height="450px" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
      </CarouselItem>  
      
    );

  });

  return (
    
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      
    </Carousel>
    
  );

}

export default App;