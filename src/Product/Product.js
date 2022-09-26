import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { name, seller, ratings, price, img } = props.product;
    const {addToCart} = props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='name'>{name}</p>
            <p className='price'>Price: ${price}</p>
            <div className='seller'>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
            </div>
            <button onClick={addToCart} className='btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;