import React from "react";
import PropTypes from "prop-types";

const Rating = (props) => {
  const {rating} = props;

  const percentStyle = () => {
    const result = rating * 100 / 5;

    return `${result}%`;
  };

  return (
    <div className="place-card__stars rating__stars">
      <span style={{width: `${percentStyle()}`}} />
      <span className="visually-hidden">Rating</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
