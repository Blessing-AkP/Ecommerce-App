import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch4 from "../images/watch4.jpg";
import prodcompare from "../images/prodcompare.svg"
import view from "../images/view.svg";
import addCart from "../images/add-cart.svg"

const ProductCard = ({grid}) => {
    let location = useLocation();
    // const grid = props;
  return (
    <>
       <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'><img src={wish} alt='wishlist' /></button>
            </div>
            <div className='product-image'>
                <img src={watch} alt='product' className='img-fluid'/>
                <img src={watch4} alt='product4' className='img-fluid'/>
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
                    <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare'/></button>
                    <button className='border-0 bg-transparent'><img src={view} alt='views'/></button>
                    <button className='border-0 bg-transparent'><img src={addCart} alt='add-cart'/></button>
                </div>
            </div>
        </Link>
        </div>
        <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'><img src={wish} alt='wishlist' /></button>
            </div>
            <div className='product-image'>
                <img src={watch} alt='product' className='img-fluid'/>
                <img src={watch4} alt='product4' className='img-fluid'/>
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
                    <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare'/></button>
                    <button className='border-0 bg-transparent'><img src={view} alt='views'/></button>
                    <button className='border-0 bg-transparent'><img src={addCart} alt='add-cart'/></button>
                </div>
            </div>
        </Link>
        </div>
        <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'><img src={wish} alt='wishlist' /></button>
            </div>
            <div className='product-image'>
                <img src={watch} alt='product' className='img-fluid'/>
                <img src={watch4} alt='product4' className='img-fluid'/>
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
                    <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare'/></button>
                    <button className='border-0 bg-transparent'><img src={view} alt='views'/></button>
                    <button className='border-0 bg-transparent'><img src={addCart} alt='add-cart'/></button>
                </div>
            </div>
        </Link>
        </div>
        <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'><img src={wish} alt='wishlist' /></button>
            </div>
            <div className='product-image'>
                <img src={watch} alt='product' className='img-fluid'/>
                <img src={watch4} alt='product4' className='img-fluid'/>
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
                    <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare'/></button>
                    <button className='border-0 bg-transparent'><img src={view} alt='views'/></button>
                    <button className='border-0 bg-transparent'><img src={addCart} alt='add-cart'/></button>
                </div>
            </div>
        </Link>
        </div>
    </>
  )
}

export default ProductCard