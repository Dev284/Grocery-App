import "/var/www/html/React_project/grocery/src/App.css";
import React, { useState } from "react";
import api from "./api";

function Footer() {

  let [Products, setProduct] = useState(api);



  const handelchange = (e) => {
    console.log(1)
    setProduct(
        {id: Math.round(Math.random() * (1000 - 9999) + 1000),
        name : e.target.value,
        vote: 0}
        )
    console.log(Products)
  }


  return (
    <footer className="App">
        <input onChange={() => handelchange} placeholder="Add Product"/>
        <button onClick={() => console.log(Products)}>Add</button>
    </footer>
  );
}

export default Footer;
