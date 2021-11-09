import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import offersPropsTypes from "../../prop-types/offers";
import Rating from "../elements/rating";

const Card = (props) => {
  const {offer, onOfferMouseEnter, onOfferMouseLeave} = props;
  const {id, name, price, rating, type, isFavorite, isPremium, previewImage} = offer;

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onOfferMouseEnter(id)} onMouseLeave={onOfferMouseLeave}>
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Rating rating={rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer:id">{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
};

Card.propTypes = {
  offer: offersPropsTypes,
  onOfferMouseEnter: PropTypes.func.isRequired,
  onOfferMouseLeave: PropTypes.func.isRequired,
};

export default Card;
