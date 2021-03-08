import React from 'react';
import { useState, useEffect } from 'react';
import Map2 from './Map2';
import '../App.css';

function Restaurant(props) {
    
    const [restaurant, setRestaurant] = useState({
      id: "",
      name: "",
      address: "",
      phone: "",
      hours: "",
      notes: [],
    })
    console.log(props)
    useEffect(() => {
      if (restaurant.id === '') {
       fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restaurantInfo) => {
          setRestaurant(restaurantInfo);
        });
    }
  });
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.address}</h3>
        <h3>{restaurant.phone}</h3>
        <p>{restaurant.hours}</p>
        <h2>{restaurant.notes}</h2>
        <h3>{restaurant.menu}</h3>
        <Map2 
         center={[restaurant.latitude, restaurant.longitude]}
        />
      </div>
    );
  }
  export default Restaurant;

  //this page will return all the data from the restaurant json files and present it on the page for each spot. 