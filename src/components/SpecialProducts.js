import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProducts = () => {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
              <div className=''>
                <img className='img-fluid' src='images/samsung-ga.jpg' alt='special product' />
              </div>
              <div className='special-product-content'>
                <h5 className='brand'>Samsung</h5>
                <h6 className='title'>Samsung Galaxy S22 mobile Phone, sim...</h6>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                />
                <p className='price'>
                  <span className='red-price'>$100</span>
                  &nbsp;
                  <strike>$200</strike>
                </p>
                <div className='discount-till d-flex align-items-center gap-10'>
                  <p className='mb-0'><b>5</b> days</p>
                  <div className='d-flex align-items-center gap-1'>
                    <span className='badge rounded-circle bg-danger p-2'>0</span>:
                    <span className='badge rounded-circle bg-danger p-2'>0</span>:
                    <span className='badge rounded-circle bg-danger p-2'>0</span>
                  </div>
                </div>
                <div className='pro-count my-3'>
                  <p>Products: 5</p>
                  <div className="progress">
                    <div className="progress-bar" 
                      role="progressbar" 
                      style={{width: "25%"}}
                      aria-valuenow="25" 
                      aria-valuemin="0" 
                      aria-valuemax="100">  
                    </div>
                  </div>
                </div>
                <Link className='button'>Options</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts