import React from "react";
import PropTypes from "prop-types";
import offersPropsTypes from "../../prop-types/offers";
import CardFavorite from "../card-favorite/card-favorite";

const CardFavoriteList = (props) => {
  const {offers} = props;

  const cities = [...new Set(offers.map((offer) => offer.city.name))];

  const offersCity = (city) => {
    const result = offers.filter((offer) => offer.city.name === city);

    return result;
  };

  return (
    <ul className="favorites__list">
      {cities.map((city, i) => (
        <li className="favorites__locations-items" key={i}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersCity(city).map((offer) => <CardFavorite offer={offer} key={offer.id}/>)}
          </div>
        </li>

      ))}
    </ul>
  );
};

CardFavoriteList.propTypes = {
  offers: PropTypes.arrayOf(offersPropsTypes).isRequired,
};

export default CardFavoriteList;
