import React from "react";
import PropTypes from "prop-types";
import offersPropsTypes from "../../prop-types/offers";
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
  offers: PropTypes.arrayOf(offersPropsTypes).isRequired,
};

export default OffersList;
