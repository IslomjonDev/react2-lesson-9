"use client"
import Image from 'next/image'
import React from 'react'
import './Products.css'




async function getData() {
    const res = await fetch('https://dummyjson.com/products?limit=3')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  

const Products = async() => {

    let data = await getData()
    let products = data?.products.map(el =>  (
        <div className='card' key={el.id}>
            <Image alt={el.title} width={200} height={200} src={el.images[0]}/> 
            <p>By John Doe   l   Aug 23, 2021 </p>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
        </div>
    ))
    return (

    <>
     <div className="container">
        <div className="product-item">
            {products}
        </div>
     </div>
    </>
  )
}

export default Products