import React from 'react';
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import Colors from '../components/Colors';

const CompareProducts = () => {
  return (
    <>
        <Meta title={"BgStore | Compare Products"} />
        <BreadCrump title="Compare Products" />
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='cross position-absolute img-fluid' />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch' className='img-fluid' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>T1 7.0 GB RAM 8GB ROM 7 Inch with WIFI + 3G Tablet</h5>
                                <h6 className='price my-3'>$100</h6>
                                <div className='product-details'>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Color:</h5>
                                    <Colors />
                                </div>
                                <div className='product-details'>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-15'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='cross position-absolute img-fluid' />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch' className='img-fluid' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>T1 7.0 GB RAM 8GB ROM 7 Inch with WIFI + 3G Tablet</h5>
                                <h6 className='price my-3'>$100</h6>
                                <div className='product-details'>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Color:</h5>
                                    <Colors />
                                </div>
                                <div className='product-details'>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-15'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default CompareProducts