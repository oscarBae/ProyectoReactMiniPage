import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselIndicators, CarouselCaption} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const items  = [
  {
    src: "",
    altText: 'Cliente 1 Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos',
    caption: ''
  },
  {
    src: "...",
    altText: 'Cliente 2 Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos',
    caption: ''
  },
  {
    src: "...",
    altText: 'Cliente 3 Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos',
    caption: ''
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
        <img src= "" alt={item.altText}width="250%" height="550px" />
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