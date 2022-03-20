import React from 'react';
import ReactModel from '../ReactModel/ReactModel';
import './Product.css'
const Product = (props) => {
    // console.log(props.addCard);
    // console.log(props.product)
    const {title, image} = props.product
    return (
        <div 
        data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
         className='col-md-4'>
            <div className="card p-3 mt-3">
                <h3>{title.slice(0, 10)}</h3>
                <img className='my-4' src={image} alt="" />
                <div className='d-flex'>
                    <button onClick={props.addCard} className='btn bg-primary mx-2'>Add to Card</button>
                    <button className='btn bg-danger me-2'>Delete</button>
                    <ReactModel product = {props.product}></ReactModel>
                </div>
            </div>
        </div>
    );
};

export default Product;