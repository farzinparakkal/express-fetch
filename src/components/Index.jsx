import React, { Component } from 'react'
import { useState } from "react";
import { useEffect } from "react";
import './Index.css'
function Index() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetchData()
    }, [])
    const fetchData = () => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((Data) => {
          ;
          setProducts([...Data.products])
        })
    }
    console.log(products);
    if (products.length == 0) {
      return <h1>Loading...</h1>
    }
    return (
      <>
      <div className="container">
        {products.map(product =>(
          <div className="card" key={product.title}>
            <img src={product.thumbnail} alt={product.title} className="card-img" />
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-description">{product.description}</p>
              <p className="card-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      </>
    )
  }

export default Index