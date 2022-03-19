import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

// products component and data load from this component
const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>Fakestore api</h1>
            <div className='row'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;