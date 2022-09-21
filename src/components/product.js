import "/var/www/html/React_project/grocery/src/App.css";
import React, { useState } from "react";
import api from "./api";
// import img from './image/orange.jpeg'

function Product() {

  let [Products, setProduct] = useState(api);
  let [Cost, setCost] = useState(0)

  const addVote = (id) => {
    let arr=[]
    Products.map((item) => {
      if (item.id === id) {
        arr.push({id:item.id, name: item.name,votes: item.votes+1 , cost : item.cost, count:item.count, image:item.image})
      }else{
        arr.push(item)
      }
    });
    setProduct(arr);
  };

  const minusVote = (id) => {
    let arr=[]
    Products.map((item) => {
      if (item.id === id) {
        arr.push({id:item.id, name: item.name,votes: item.votes-1 , cost : item.cost, count:item.count, image:item.image})
      }else{
        arr.push(item)
      }
    });
    setProduct(arr);
  };

  const remove = (cost, id) => {
    let arr=[]
    Products.map((item) => {
      setCost(Cost-cost)
      if (item.id === id) {
        arr.push({id:item.id, name: item.name,votes: item.votes , cost : item.cost, count:item.count-1, image:item.image})
      }else{
        arr.push(item)
      }
    });
    setProduct(arr);
  }


  const add = (cost, id) => {
    setCost(Cost+cost)
    let arr=[]
    Products.map((item) => {
      if (item.id === id) {
        arr.push({id:item.id, name: item.name,votes: item.votes , cost : item.cost, count:item.count+1, image:item.image})
      }else{
        arr.push(item)
      }
    });
    setProduct(arr);
  }


  


  return (
    <>
    {/* <img src={img}/> */}
    <div className="App">
      {Products.map((api) => (
        <div className="product" key={api.id}>
            <img src={api.image} alt="img"/>
          <ul>
            <p>{api.name}</p>
            <p>cost : {api.cost}</p>
          </ul>
          <button className="vote" onClick={() => addVote(api.id)}>+</button><span>Vote : {api.votes}</span><button className="vote" onClick={() => minusVote(api.id)}>-</button>
          <br></br>
          <h4>Total Item : {api.count}</h4>
          <button className="cart" onClick={() => add(api.cost,api.id)}> Add To Cart</button>
          <button className="cart" onClick={() => remove(api.cost,api.id)}> Delete Cart</button>
        </div>
      ))}
    </div>
    <h1 className="total">Total Cost : {Cost}
    </h1>
  </>
  );
}

export default Product;