import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])
    function addToCart(product){
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product key={product.id} addToCart={()=>addToCart(product)} product={product}></Product>)
                    }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;