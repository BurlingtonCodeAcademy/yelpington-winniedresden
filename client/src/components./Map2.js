import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState, useEffect } from 'react';
import Restaurant from "./Restaurant";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map2(props) {
    const[mapInfo, setMapInfo] = useState({
        latitude: "",
        longitude: ""
    })
    console.log(props)
    useEffect(() => {
        if(mapInfo.id === '') {
            fetch(`api/${props.match.params.id}`)
            console.log(props.match.params)
                .then((res) => res.json())
                .then((mapInform) => {
                    setMapInfo(mapInform);
            }) // almost 
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