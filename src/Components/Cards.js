import React from "react";
import Card from "./Card";
import avatar from '../img/contacto1.jpg';
import avatar2 from '../img/contacto2.jpg';
import avatar3 from '../img/contacto3.jpg';

const cards = [
  {
    id: 1,
    title: "Contacto 1",
    image: avatar,
   },
  {
    id: 2,
    title: "Contacto 2",
    image: avatar2,
   },
  {
    id: 3,
    title: "Contacto 3",
    image: avatar3,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} style="100px"/>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Cards;