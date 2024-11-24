import React, { Component } from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import './Index.css'

function Index({search}) {
    const [products, setProducts] = useState([])
    const [cat, setCat] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
      fetchData()
    }, [])
    const fetchData =async () => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((Data) => {
          setProducts([...Data.products])
        }).catch((error)=>{
          console.log(error)
        })
        const rescat=await fetch('https://dummyjson.com/products/categories')
        const cats=await rescat.json()
        setCat([...cats])
    }
    console.log(products)
    if (products.length == 0) {
      return <h1>Loading...</h1>
    }
    return (
      <>
      <div className="cat">
      <button className='all-btn' onClick={()=>setFilter("")}>All</button>
      {
        cat.map((ct)=> <button onClick={()=>setFilter(ct.name)}>{ct.name}</button>)
      }
      </div>
      <div className="container">
        {products.filter((i)=>i.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).filter((i)=>i.category.includes(filter.toLocaleLowerCase())).map(product =>(
            <div className="card" key={product.title}>
              <Link to={`/details/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} className="card-img" />
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                {/* <p className="card-description">{product.description}</p> */}
                <p className="card-price">Price: ${product.price}</p>
              </div>
              </Link>
            </div>  
        ))}
      </div>
      </>
    )
  }

export default Index