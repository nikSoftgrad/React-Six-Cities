import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';

const Settings = {
  offers: [
    {
      price: 120,
      title: `Beautiful luxurious apartment at great location`,
      type: `Apartment`,
      img: `img/apartment-01.jpg`,
      rating: `80`,
      premium: true,
      id: 1,
    },
    {
      price: 80,
      title: `Wood and stone place`,
      type: `Private room`,
      img: `img/room.jpg`,
      rating: `80`,
      premium: false,
      id: 2,
    },
    {
      price: 132,
      title: `Canal View Prinsengracht`,
      type: `Apartment`,
      img: `img/apartment-02.jpg`,
      rating: `80`,
      premium: false,
      id: 3,
    },
    {
      price: 180,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      img: `img/apartment-03.jpg`,
      rating: `100`,
      premium: true,
      id: 4,
    },
    {
      price: 80,
      title: `Wood and stone place`,
      type: `Private room`,
      img: `img/room.jpg`,
      rating: `80`,
      premium: false,
      id: 5,
    }
  ]
};
ReactDOM.render(
    <App offers={Settings.offers}/>,
    document.querySelector(`#root`)
);
