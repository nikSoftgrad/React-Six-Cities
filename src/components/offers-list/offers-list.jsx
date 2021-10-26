import React from "react";
import PropTypes from "prop-types";

import Card from "../card/card";

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const {id} = offer;

        return (
          <Card
            key={id}
            offer={offer}
          />
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "price": PropTypes.number.isRequired,
        "title": PropTypes.string.isRequired,
        "type": PropTypes.string.isRequired,
        "img": PropTypes.string.isRequired,
        "rating": PropTypes.number.isRequired,
        "is_favorite": PropTypes.bool.isRequired,
        "is_premium": PropTypes.bool.isRequired,
      })
  )
};

export default OffersList;
