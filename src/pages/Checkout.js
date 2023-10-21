import React from 'react';
import { Link } from 'react-router-dom';
import {IoChevronBack} from 'react-icons/io5';
import watch from '../images/watch.jpg';

const Checkout = () => {
  return (
    <>
        <div className='checkout-wrapper py-5'>
            <div className="container-xl">
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name mb-1'>BgStore.</h3>
                            <nav 
                                aria-label="breadcrumb"  className='mb-4'
                                >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/cart" className='total-price'>Cart</Link></li>
                                    <li className="breadcrumb-item"><Link to="/cart" className='total-price'>Information</Link></li>
                                    <li className="breadcrumb-item active"><Link to="/cart" className='total-price'>Shipping</Link></li>
                                    <li className="breadcrumb-item"><Link to="/cart" className='total-price'>Payment</Link></li>
                                </ol>
                            </nav>
                            <h4 className='title'>Contact Information</h4>
                            <p className='user-details total-price mb-4'>Blessing Akpan (blessing.akpan@gmail.com)</p>
                            <h4 className='mb-1 total'>Shipping Address</h4>
                            <form action='' className='pe-3 d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                </div>
                                <div className='w-100'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='' selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input className='form-control' type="text" name='' id='' placeholder='First Name' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input className='form-control' type="text" name='' id='' placeholder='Last Name' />
                                </div>
                                <div className='w-100'>
                                    <input className='form-control' type="text" name='' id='' placeholder='Address' />
                                </div>
                                <div className='w-100'>
                                    <input className='form-control' type="text" name='' id='' placeholder='Apartment, Suit, etc (Optional' />
                                </div>
                                <div>
                                    <input className='form-control' type="text" name='' id='' placeholder='City' />
                                </div>
                                <div className='flex-grow-1'>
                                <select name='' className='form-control form-select' id=''>
                                    <option value='' selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div>
                                    <input className='form-control mb-3' type="text" name='' id='' placeholder='Zip Code' />
                                </div>
                                <div className='w-100 d-flex justify-content-between align-items-center'>
                                    <Link className='text-dark'>
                                        <span className='d-flex align-items-center gap-10'><IoChevronBack />back to cart</span>
                                    </Link>
                                    <Link className='checkout-button button rounded-1 bg-danger'>
                                    Continue to Shipping
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5 border-start'>
                        <div className='checkout-data-right'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex mb-2 align-items-center gap-10 prod-img-wrapper'>
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span className='badge rounded-circle position-absolute bg-secondary text-white'
                                            style={{"top":"-10px", "right":"2px"}}>1</span>
                                            <img src={watch} alt='product' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h5 className='total-price'>title</h5>
                                            <p className='total-price'>s/#10667</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow'>
                                        <h5 className='total'>$ 100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>SubTotal</p>
                                    <p className='total-price'>$10000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$10000</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$10000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout