import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Products;