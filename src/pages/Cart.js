import React from 'react'
import Meta from '../components/Meta'
import BreadCrump from '../components/BreadCrump';
import watch from "../images/watch.jpg";
import {RiDeleteBin6Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
        <Meta title={"BgStore | Cart"} />
        <BreadCrump title="Your Shopping Cart" />
        <Container class1='cart-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='py-3 cart-header d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='py-3 mb-2 cart-data d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img src={watch} alt='' className='img-fluid'/>
                            </div>
                            <div className='w-75'>
                                <p>title</p>
                                <p>color</p>
                                <p>size</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$100</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input id=''
                                    type='number'
                                    name=''
                                    min={1}
                                    max={10}
                                    className='form-control' 
                                />
                            </div>
                            <div><RiDeleteBin6Fill /></div>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>$100</h5>
                        </div>
                    </div>
                    <div className='cart-data-bottom mt-4 col-12 py-2'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <div>
                                <Link className='button py-2' to='/product'>
                                    Continue Shopping
                                </Link>
                
                            </div>
                            <div className='d-flex flex-column align-items-end cart-total'>
                                <h4>Subtotals: $100</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to="/checkout" className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Cart