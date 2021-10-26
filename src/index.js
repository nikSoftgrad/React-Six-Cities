import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';
import {OFFERS} from './mocks/offers';
import {REVIEWS} from './mocks/reviews';

ReactDOM.render(
    <App offers={OFFERS} reviews={REVIEWS}/>,
    document.querySelector(`#root`)
);
