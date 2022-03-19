import React from 'react';

const Product = (props) => {
    const { image, title, price, description } = props.product;
    return (
        <div className='col-md-3'>
            <div className="card p-4">
                <img className='w-50 m-auto' src={image} alt="" />
                <h3>{title.slice(0, 10)}</h3>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-success'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;