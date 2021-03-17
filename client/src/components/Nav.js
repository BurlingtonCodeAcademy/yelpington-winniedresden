import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css'; 
function Nav(props) {
  const [rest, setRest] = useState([]);
  useEffect(() => {
    if (rest.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
          setRest(restList);
        });
    }
  });

  //nav bar on the homepage, takes the api data and populates each restaurant name, removing '-' from the ids and replacing with spaces 
  return (
    <div id="nav" style={{float: "right", marginRight: "100px"}}>
      <ul>
        <div>
          <h2></h2>
          {/* if the restaurant length isn't 0, then fetch its name and fill that in the list */}
          {rest.length !== 0
            ? rest.map((id, index) => {
                console.log(id);
                return (
                  <h3 key={index}>
                    <Link to={`/restaurants/${id}`}style={{textDecoration: "none", color: "red"}}>
                      {id.replaceAll("-", " ")}
                    </Link>
                  </h3>
                );
              })
            : null}
        </div>
      </ul>
    </div>
  );
}
export default Nav;
