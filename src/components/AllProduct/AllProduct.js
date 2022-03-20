import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProduct.css'

const AllProduct = (props) => {
    const {addCard} = props;
    // console.log(addCard);
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }, [])
    return (
        <div>
            <h1>All Product</h1>
           <div className='row'>
               {
               products.map(product => <Product 
                addCard = {addCard}
                product = {product}
                key = {product.id}>
                </Product>)
              }
           </div>
        </div>
    );
};

export default AllProduct;