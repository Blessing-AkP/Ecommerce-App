import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className='col-3'>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link><img src='images/wish.svg' alt='wishlist' /></Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.jpg' alt='product-image' className='img-fluid'/>
                <img src='images/watch4.jpg' alt='product-image' className='img-fluid'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havel</h6>
                <h5 className='product-title'>
                    Cool wrist watch for kids.
                </h5>
                <p className='price'>$100.00</p>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                />
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link><img src='images/prodcompare.svg' /></Link>
                    <Link><img src='images/view.svg' /></Link>
                    <Link><img src='images/add-cart.svg' /></Link>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard