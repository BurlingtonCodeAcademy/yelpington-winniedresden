import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { Link } from 'react-router-dom';
import pizza from '../images/pizzaIcon.png';

//changing the icon on the map to be pizza slices 
let pizzaIcon = L.icon({
  iconUrl: pizza,

  iconSize:     [38, 50], 
  shadowSize:   [50, 64], 
  iconAnchor:   [22, 94], 
  shadowAnchor: [4, 62],  
  popupAnchor:  [-3, -76] 
});


function Map() {
    
  return (
    <div style ={{float: "left"}}>
        {/* the center of the main map I set manually */}
      <MapContainer className="map"
        center={[39.75833, -104.99667]}
        zoom={13}
        scrollWheelZoom={true}
        
      >
        {/* marking each marker on the map with a pizza icon & popup */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
            <Marker position={[39.743546, -104.969523]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/white-pie`}>White Pie</Link></Popup>
            </Marker>
            <Marker position={[39.762032, -105.038834]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/blue-pan`}>Blue Pan Pizza</Link></Popup>
            </Marker>
            <Marker position={[39.762048, -105.033284]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/pizzeria-locale`}>Pizzeria Locale</Link></Popup>
            </Marker>
            <Marker position={[39.753094, -105.023621]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/sexy`}>Sexy Pizza</Link></Popup>
            </Marker>
            <Marker position={[39.75685, -105.023621]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/protos-pizza`}>Proto's Pizza</Link></Popup>
            </Marker>
            <Marker position={[39.756158, -105.009084]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/ians-pizza`}>Ian's Pizza Denver</Link></Popup>
            </Marker>
            <Marker position={[39.754435, -104.990933]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/marcos-pizza`}>Marco's Coalfired</Link></Popup>
            </Marker>
            <Marker position={[39.769008, -105.000769]} icon={pizzaIcon}>
                <Popup><Link to={`/restaurants/crush-pizza`}>Crush Pizza & Tap</Link></Popup>
            </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;

//this map will load on the homepage and each restaurant is clickable from its popup.
