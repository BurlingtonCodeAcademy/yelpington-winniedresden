//when user clicks a restaurant's page, this map will generate on the page, loading the center from the lat/long of each restaurant.

import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState, useEffect } from 'react';
import Restaurant from "./Restaurant";

//setting up what the marker will look like on the map 
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
// starting the lat/ long as nothing (empty strings) and then fetching the data from the restaurant api to populate the lat and long 
function Map2(props) {
    const[mapInfo, setMapInfo] = useState({
        latitude: "",
        longitude: ""
    })
//trying to set the map info so that the api is used as map info....
    console.log(props)
    useEffect(() => {
        if(mapInfo.id === '') {
            //I think something is amiss with my fetch and it's not fetching the right thing (aka lat and long)
            fetch(`api/${props.match.params.id}`)
            console.log(props.match.params)
                .then((res) => res.json())
                .then((mapInform) => {
                    setMapInfo(mapInform);
            }) // I feel like this functionality should work to populate the lat/long and the center based on the data...
        }
    })
  return (
    <div>
        
    <MapContainer className="map"
        center={[mapInfo.latitude, mapInfo.longitude]}
        zoom={18}
        scrollWheelZoom={false}>
        <Marker position={[mapInfo.latitude, mapInfo.longitude]}/>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"/>
            
    </MapContainer>
         </div>   
  );
}

export default Map2;

// this is the map that will load on each restaurant page, will generate center and marker point from the latitude, longitude in the restaurant info.