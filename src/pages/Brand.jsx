import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import { useLocation } from 'react-router-dom'
import Product from './Product';

function Brand(props) {
    const location = useLocation();
    const {brand} = location.state;
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/product/${brand}`)
        .then(res => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.log(err))
    }, [])
  return (
    <>
    <Navbar></Navbar>
    <div>

        <h1>{brand} hi</h1>
        <Product params={product}></Product>
    </div>
    </>
  )
}

export default Brand