import React from "react";
import offersPropsTypes from "../../prop-types/offers";
import NearItem from "./near-item";
import PropTypes from 'prop-types';

const NearList = ({offers}) => {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">
      Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {
          offers.map((offer) => <NearItem offer={offer} key={offer.id}/>)
        }
      </div>
    </section>
  );
};

NearList.propTypes = {
  offers: PropTypes.arrayOf(offersPropsTypes).isRequired,
};

export default NearList;
