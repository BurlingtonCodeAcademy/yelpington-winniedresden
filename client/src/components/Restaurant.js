import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../App.css";
//import '../public/index.css';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import pizza from '../images/pizzaIcon.png';

//import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

//setting up what the marker will look like on the map (wont show even when i use blue marker)
let pizzaIcon = L.icon({
  iconUrl: pizza, 

  iconSize:     [38, 50], 
  shadowSize:   [50, 64], 
  iconAnchor:   [22, 94], 
  shadowAnchor: [4, 62],  
  popupAnchor:  [-3, -76] 
});


//L.Marker.prototype.options.icon = pizzaIcon;

function Restaurant(props) {
  const [restaurant, setRestaurant] = useState({
    id: "",
    name: "",
    address: "",
    phone: "",
    hours: "",
    notes: [],
    latitude: "",
    longitude: "",
  });
  
  //console.log(typeof restaurant.latitude)
  //console.log(props);
  useEffect(() => {
    if (restaurant.id === "") {
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restaurantInfo) => {
          setRestaurant(restaurantInfo);
        });
    }
  });
async function findLat(){
  let lat = parseFloat(restaurant.latitude)
  console.log(lat)
  console.log(restaurant.latitude)
}
findLat();

async function findLong(){
  let long = parseFloat(restaurant.longitude);
  console.log(long)
  
}
findLong();


  return (
    <div>
      
      <h1>{restaurant.name}</h1>
      Address: <h3>{restaurant.address}</h3>
      Phone number: <h3>{restaurant.phone}</h3>
      Hours: <p>{restaurant.hours}</p>
      <h2>{restaurant.notes}</h2>
      
      
      <MapContainer
        className="map"
        center={[39.743670, -104.995550]} 
      
        zoom={13}
        scrollWheelZoom={false}
      >
        
          
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        <Marker position={[restaurant.latitude, restaurant.longitude]} icon={pizzaIcon}/> 
        {/* <Marker position={[39.743670, -104.995550]}/> */}
      </MapContainer>
    </div>
  );
}
export default Restaurant;

//this page will return all the data from the restaurant json files and present it on the page for each spot.
