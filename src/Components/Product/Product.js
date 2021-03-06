import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Product.css'

// single product component
const Product = (props) => {
    const { image, title, price, description } = props.product;
    const {addToCart} = props;
    return (
        <div className='col-md-4 col-lg-3'>
            <div className="card p-4 single-product gap-2 mb-4">
                <img className='w-50 m-auto' src={image} alt="" />
                <h3>{title.slice(0, 10)}</h3>
                <div className="d-flex justify-content-around">
                    <button onClick={addToCart} className='btn btn-warning'>Add to Cart</button>
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default Product;