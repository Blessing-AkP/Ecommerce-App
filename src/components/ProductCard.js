import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = ({grid}) => {
    let location = useLocation();
    // const grid = props;
  return (
    <>
       <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            {console.log(grid)}
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link><img src='images/wish.svg' alt='wishlist' /></Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.jpg' alt='product' className='img-fluid'/>
                <img src='images/watch4.jpg' alt='product4' className='img-fluid'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havel</h6>
                <h5 className='product-title'>
                    Cool wrist watch for kids.
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                />
                <p className='price'>$100.00</p>
                <p className='description'>
                Introducing our Classic Elegance Men's Wristwatch - a timeless masterpiece that combines precision engineering with sophisticated design. This wristwatch is the epitome of class and sophistication.
                </p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link><img src='images/prodcompare.svg' alt='compare'/></Link>
                    <Link><img src='images/view.svg' alt='views'/></Link>
                    <Link><img src='images/add-cart.svg' alt='add-cart'/></Link>
                </div>
            </div>
        </Link>
    </div>

    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link><img src='images/wish.svg' alt='wishlist' /></Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.jpg' alt='product' className='img-fluid'/>
                <img src='images/watch4.jpg' alt='product4' className='img-fluid'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havel</h6>
                <h5 className='product-title'>
                    Cool wrist watch for kids.
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                />
                <p className='price'>$100.00</p>
                <p className='description'>
                Introducing our Classic Elegance Men's Wristwatch - a timeless masterpiece that combines precision engineering with sophisticated design. This wristwatch is the epitome of class and sophistication.
                </p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link><img src='images/prodcompare.svg' alt='compare'/></Link>
                    <Link><img src='images/view.svg' alt='views'/></Link>
                    <Link><img src='images/add-cart.svg' alt='add-cart'/></Link>
                </div>
            </div>
        </Link>
    </div>

    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link><img src='images/wish.svg' alt='wishlist' /></Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.jpg' alt='product' className='img-fluid'/>
                <img src='images/watch4.jpg' alt='product4' className='img-fluid'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havel</h6>
                <h5 className='product-title'>
                    Cool wrist watch for kids.
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                />
                <p className='price'>$100.00</p>
                <p className='description'>
                Introducing our Classic Elegance Men's Wristwatch - a timeless masterpiece that combines precision engineering with sophisticated design. This wristwatch is the epitome of class and sophistication.
                </p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link><img src='images/prodcompare.svg' alt='compare'/></Link>
                    <Link><img src='images/view.svg' alt='views'/></Link>
                    <Link><img src='images/add-cart.svg' alt='add-cart'/></Link>
                </div>
            </div>
        </Link>
    </div>

    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link><img src='images/wish.svg' alt='wishlist' /></Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.jpg' alt='product' className='img-fluid'/>
                <img src='images/watch4.jpg' alt='product4' className='img-fluid'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havel</h6>
                <h5 className='product-title'>
                    Cool wrist watch for kids.
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                />
                <p className='price'>$100.00</p>
                <p className='description'>
                Introducing our Classic Elegance Men's Wristwatch - a timeless masterpiece that combines precision engineering with sophisticated design. This wristwatch is the epitome of class and sophistication.
                </p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link><img src='images/prodcompare.svg' alt='compare'/></Link>
                    <Link><img src='images/view.svg' alt='views'/></Link>
                    <Link><img src='images/add-cart.svg' alt='add-cart'/></Link>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard