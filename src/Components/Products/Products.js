import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

// products component and data load from this component
const Products = (props) => {
    const [products, setProducts] = useState([]);
    const { addToCart } = props;
    // console.log(products);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1>Fakestore api</h1>
            <div className='row'>
                {
                    products.map(product => <Product
                        addToCart={addToCart}
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;