import React from "react";
import reviewsPropsTypes from "../../prop-types/reviews";
import Rating from "../elements/rating";

const ReviewsItem = ({review}) => {
  const {comment, rating, date, user} = review;
  const {avatarUrl, name} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <Rating rating={rating}/>
          </div>
        </div>
        <p className="reviews__text"> {comment} </p>
        <time className="reviews__time" dateTime="2019-04-24"> {date} </time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewsPropsTypes,
};

export default ReviewsItem;
