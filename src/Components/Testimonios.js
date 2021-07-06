import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselIndicators, CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const items  = [
  {
    src: "...",
    altText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos Lorem ipsum dolor sit, amet consectetur adipisicing elitCulpa nihil impedit natus nostrum?Velit accusantium id quos',
    caption: ''
  },
  {
    src: "...",
    altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum lorem sed placerat eleifend. Vestibulum at felis at diam porttitor tincidunt. Vivamus sapien nisi, blandit ut laoreet ut, ornare vitae nisl. Sed bibendum,Aliquam nec nunc sed risus consequat accumsan. Praesent volutpat metus non odio pulvinar, id vestibulum ligula bibendum. Aenean consectetur, mauris, eu gravida, tempus, diam enim, iaculis arcu, eu, aliquam ante, dolor posuere, metus. Nam congue, sodales ex, sed, gravida,. Maecenas ac, augue ut, lorem aliquam, feugiat at, eget nisl,.',
  },
  {
    src: "...",
    altText: 'Testimonio 3',
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
        <img src={item.src} alt={item.altText}width="250%" height="850px" />
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