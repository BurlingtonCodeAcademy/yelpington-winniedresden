import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  return (
    <div id="nav" style={{float: "right", marginRight: "100px"}}>
      <ul>
        <div>
          <h2></h2>
          {rest.length !== 0
            ? rest.map((id, index) => {
                console.log(id);
                return (
                  <h3 key={index}>
                    <Link to={`/restaurants/${id}`}>
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
