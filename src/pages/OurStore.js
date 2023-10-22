import React from 'react'
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Colors from '../components/Colors';
import Container from '../components/Container';

const OurStore = () => {
    const [grid, setGrid] = useState(3);
  return (
    <>
        <Meta title={"BgStore | Store"} />
        <BreadCrump title="Our Store" />
        <Container class1='store-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                {/* Aside section */}
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Shop By categories</h3>
                        <ul className='ps-0'>
                            <li>Phone</li>
                            <li>Laptop</li>
                            <li>Smart Watch</li>
                            <li>Tv</li>
                            <li>camera</li>
                        </ul>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Filter By</h3>
                        <div>
                            <h5 className='sub-title'>Availability</h5>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                    type='checkbox'
                                    value=""
                                    id="" />
                                    <label className='form-check-label' htmlFor="">
                                        In Stock (1)
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                    type='checkbox'
                                    value=""
                                    id="" />
                                    <label className='form-check-label' htmlFor="">
                                        Out of Stock (0)
                                    </label>
                                </div>
                            </div>
                            <h5 className='sub-title'>Price</h5>
                            <div className='d-flex align-items-center gap-10'>
                                <div class="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                    <label htmlFor="floatingInput1">From</label>
                                </div>
                                <div class="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                                <label htmlFor="floatingInput1">To</label>
                            </div>
                            </div>
                            <h5 className='sub-title'>Color</h5>
                            <div>
                                <Colors />
                            </div>
                            <h5 className='sub-title'>Size</h5>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                    type='checkbox'
                                    value=""
                                    id="color-1" />
                                    <label className='form-check-label' htmlFor="color-1">
                                        S (2)
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                    type='checkbox'
                                    value=""
                                    id="color-2" />
                                    <label className='form-check-label' htmlFor="color-2">
                                        M (2)
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                    type='checkbox'
                                    value=""
                                    id="color-3" />
                                    <label className='form-check-label' htmlFor="color-3">
                                        L (2)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Product Tags</h3>
                        <div className='product-tags d-flex align-items-center flex-wrap gap-1'>
                            <span className='badge bg-light text-secondary py-2 px-2 rounded-3'>
                                Headphone
                            </span>
                            <span className='badge bg-light text-secondary py-2 px-2 rounded-3'>
                                Laptop
                            </span>
                            <span className='badge bg-light text-secondary py-2 px-2 rounded-3'>
                                Mobile
                            </span>
                            <span className='badge bg-light text-secondary py-2 px-2 rounded-3'>
                                Watch
                            </span>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Random Products</h3>
                        <div className='random-products d-flex mb-3'>
                            <div className='w-50'>
                                <img className='img-fluid' src='images/watch45.jpg' alt='watch' />
                            </div>
                            <div className='w-50'>
                                <h5>Kids watch bulk pack multi colored for students</h5>
                                <ReactStars
                                count={5}
                                size={24}
                                edit={false}
                                value={3}
                                activeColor="#ffd700"
                                />
                                <b>$ 300</b>
                            </div>
                        </div>
                        <div className='random-products d-flex'>
                            <div className='w-50'>
                                <img className='img-fluid' src='images/watch45.jpg' alt='watch' />
                            </div>
                            <div className='w-50'>
                                <h5>Kids watch bulk pack multi colored for students</h5>
                                <ReactStars
                                count={5}
                                size={24}
                                edit={false}
                                value={5}
                                activeColor="#ffd700"
                                />
                                <b>$ 300</b>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Section */}
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='mb-0 d-block sort-label'>Sort By:</p>
                                <select name='' className='form-control form-select' id=''>
                                    <option value='manual'>Featured</option>
                                    <option value='best-selling' selected='selected' >Best Selling</option>
                                    <option value='title-ascending'>Alphabetically, A-Z</option>
                                    <option value='title-descending'>Alphabetically, Z-A</option>
                                    <option value='price-ascending'>Price, low to high</option>
                                    <option value='price-descending'>Price, high to low</option>
                                    <option value='created-ascending'>Date, old to new</option>
                                    <option value='title-descending'>Date, new to old</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='totalProducts mb-0'>21 Products</p>
                                <div className='d-flex align-items-center gap-10 grid'>
                                    <img src='images/gr4.svg' alt='grid' className='d-block img-fluid' onClick={() => {setGrid(3)} }/>
                                    <img src='images/gr3.svg' alt='grid' className='d-block img-fluid' onClick={() => {setGrid(4)} }/>
                                    <img src='images/gr2.svg' alt='grid' className='d-block img-fluid' onClick={() => {setGrid(6)} }/>
                                    <img src='images/gr.svg' alt='grid' className='d-block img-fluid' onClick={() => {setGrid(12)} }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-list pb-0'>
                        <div className='d-flex flex-wrap gap-10'>
                            <ProductCard grid={grid} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default OurStore