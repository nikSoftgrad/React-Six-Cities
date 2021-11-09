import React, {useRef, useEffect} from "react";
import useMap from "../../hooks/useMap";
import PropTypes from 'prop-types';
import cityPropsType from '../../prop-types/city';
import offersPropsType from '../../prop-types/offers';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {city, offers, offerActive} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(()=>{
    if (map) {
      offers.forEach((offer) => {
        const icon = leaflet.icon({
          iconUrl: `${offerActive === offer.id ? `img/pin-active.svg` : `img/pin.svg`}`,
          iconSize: [27, 39],
          iconAnchor: [13, 39]
        });

        leaflet.marker(
            {
              lat: offer.location.lat,
              lng: offer.location.lng,
            },
            {
              icon
            }
        ).addTo(map);
      });
    }
  }, [map, offers, offerActive]);


  return (
    <div ref={mapRef} id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offersPropsType).isRequired,
  city: cityPropsType,
  offerActive: PropTypes.number.isRequired,
};

export default Map;
