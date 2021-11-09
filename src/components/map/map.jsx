import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import cityPropsType from '../../prop-types/city';
import offersPropsType from '../../prop-types/offers';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {city, offers} = props;
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(()=>{
    if (mapRef.current !== null && map === null) {
      const cityMap = leaflet.map(`map`, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom
      });

      leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(cityMap);

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [27, 39],
        iconAnchor: [13, 39]
      });

      offers.forEach((offer) => {
        leaflet.marker(
            {
              lat: offer.location.lat,
              lng: offer.location.lng,
            },
            {
              icon
            }
        ).addTo(cityMap);
      });
      setMap(cityMap);
    }
  }, [map, city, mapRef]);


  return (
    <section className="cities__map map">
      <div ref={mapRef} id="map" style={{height: `100%`}}></div>
    </section>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offersPropsType).isRequired,
  city: cityPropsType,
};

export default Map;
