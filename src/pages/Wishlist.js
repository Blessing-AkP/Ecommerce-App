import React from 'react';
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
        <Meta title={"BgStore | Wishlist"} />
        <BreadCrump title="Wishlist" />
        <div className='wishlist-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='cross position-absolute img-fluid' />
                            <div className='wislist-card-image'>
                                <img src='images/watch.jpg' alt='watch' className='img-fluid' />
                            </div>
                            <div className='wishlist-product-details py-3'>
                                <h5 className='title'>T1 7.0 GB RAM 8GB ROM 7 Inch with WIFI + 3G Tablet</h5>
                                <h6 className='price'>$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='cross position-absolute img-fluid' />
                            <div className='wislist-card-image'>
                                <img src='images/watch.jpg' alt='watch' className='img-fluid' />
                            </div>
                            <div className='wishlist-product-details py-3'>
                                <h5 className='title'>T1 7.0 GB RAM 8GB ROM 7 Inch with WIFI + 3G Tablet</h5>
                                <h6 className='price'>$100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Wishlist