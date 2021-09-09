import {useState} from 'react';
import GoogleMapReact from "google-map-react";
import WildfireMarker from "./WildfireMarker";
import LocationInfobox from "./LocationInfoBox";
import VolcanoMarker from "./VolcanoMarker";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <WildfireMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    // if(ev.categories[0].id === 12){
    //   return (
    //     <VolcanoMarker
    //       lat={ev.geometries[0].coordinates[1]}
    //       lng={ev.geometries[0].coordinates[0]}
    //       onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
    //     />
    //   );
    // } 
    return null;
  });
  return (
    <div class="relative w-screen h-screen z-100">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBkUdA7QaC3Z8Dk9lQuqy3FM5GmO3jZVc0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfobox info={locationInfo}/>}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;

