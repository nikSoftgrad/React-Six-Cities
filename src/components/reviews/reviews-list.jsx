import React from "react";
import ReviewsItem from "./reviews-item";
import reviewsPropsTypes from "../../prop-types/reviews";
import PropTypes from 'prop-types';

const ReviewsList = ({reviews}) => {

  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.map((review) =>
            <ReviewsItem review={review} key={review.id}/>
          )
        }
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropsTypes).isRequired,
};

export default ReviewsList;
