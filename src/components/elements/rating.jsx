import React from "react";
import PropTypes from "prop-types";

const Rating = (props) => {
  const {rating} = props;

  const percentStyle = () => {
    const result = rating * 100 / 5;

    return `${result}%`;
  };

  return (
    <>
      <span style={{width: `${percentStyle()}`}} />
      <span className="visually-hidden">Rating</span>
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
