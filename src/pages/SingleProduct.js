import React, { useState } from 'react'
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import {VscGitCompare } from 'react-icons/vsc';
import {AiOutlineHeart } from 'react-icons/ai';



const SingleProduct = () => {
    const props = {width: 400, height: 500, zoomWidth: 500, img: "https://ae01.alicdn.com/kf/S15b47814f904459bbecaa75df89c34efl/Men-Gift-Gold-Wireless-Headphones-Bluetooth-Earphone-Stereo-Headset-with-Build-in-MIC-with-3-5mm.jpg"};
    const [orderedProduct, setOrderedProduct] = useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
        <Meta title={"BgStore | Product Name"} />
        <BreadCrump title="Product Name" />
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                                <img src='https://lagmall.com.ng/wp-content/uploads/2020/10/2019-headset-blue.png' className='img-fluid' alt='product-img' />
                            </div>
                            <div>
                                <img src='https://lagmall.com.ng/wp-content/uploads/2020/10/2019-headset-blue.png' className='img-fluid' alt='product-img' />
                            </div>
                            <div>
                                <img src='https://lagmall.com.ng/wp-content/uploads/2020/10/2019-headset-blue.png' className='img-fluid' alt='product-img' />
                            </div>
                            <div>
                                <img src='https://lagmall.com.ng/wp-content/uploads/2020/10/2019-headset-blue.png' className='img-fluid' alt='product-img' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom py-3'>
                                <h3 className='title'>
                                    Kids Headphone Bulk10 Pack Multi colored For students
                                </h3>
                                <div>
                                    <p className='price'>$100</p>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        edit={false}
                                        value={4}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 py-3 t-review'>(2 Reviews)</p>
                                </div>
                                <a href='#review' className='review-btn'>Write a Review</a>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='mb-0 product-heading'> Type :</h3>
                                    <p className='mb-0 product-data'>headphone</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className=' mb-0 product-heading'>Brand :</h3>
                                    <p className='mb-0 product-data'>Samsung</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='mb-0 product-heading'> Category :</h3>
                                    <p className='mb-0 product-data'>Headphone</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='mb-0 product-heading'> Tags :</h3>
                                    <p className='mb-0 product-data'>Headphone</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='mb-0 product-heading'>Availability :</h3>
                                    <p className='mb-0 product-data'>In Stock</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 mt-2 mb-3'>
                                    <h3 className='mb-0 product-heading'>Size :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 border-secondary bg-white text-dark'>S</span>
                                        <span className='badge border border-1 border-secondary bg-white text-dark'>M</span>
                                        <span className='badge border border-1 border-secondary bg-white text-dark'>L</span>
                                        <span className='badge border border-1 border-secondary bg-white text-dark'>XL</span>
                                        <span className='badge border border-1 border-secondary bg-white text-dark'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                                    <h3 className='mb-0 product-heading'>Color :</h3>
                                    <Colors />
                                </div>
                                <div className='d-flex align-items-center gap-15 mt-2 mb-3 flex-row'>
                                    <h3 className='mb-0 product-heading'>Qauntity :</h3>
                                    <div className=''>
                                        <input
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            style={{"width":"60px"}}
                                            className='form-control'
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0 login-btn py-2'>Add to Cart</button>
                                        <button className='button border-0 signup py-2'>Buy Now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=''><VscGitCompare className='fs-6 me-2'/> Compare Product</a>
                                        </div>
                                        <div>
                                            <AiOutlineHeart className='fs-6 me-2'/><a href=''>Add to Wishlist</a>
                                        </div>
                                </div>
                                <div className='d-flex flex-column gap-10 my-4'>
                                    <h3 className='mb-0 product-heading'> Shipping & Return :</h3>
                                    <p className='mb-0 product-data'>Free shipping and return available on all orders!<br/> We ship all US domestic orders within <b>5-10 business days!</b></p>
                                </div>
                                <div className='text-wrap d-flex align-items center gap-10 my-2'>
                                    <h3 className='mb-0 product-heading'>Product Link :</h3>
                                    <a className='text-wrap' href='javascript:void(0);'
                                        onClick={()=>{
                                            copyToClipboard("https://ae01.alicdn.com/kf/S15b47814f904459bbecaa75df89c34efl/Men-Gift-Gold-Wireless-Headphones-Bluetooth-Earphone-Stereo-Headset-with-Build-in-MIC-with-3-5mm.jpg")
                                        }}>
                                            Copy Product Link
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='mb-4'>Description</h3>
                        <div className='description-inner'>
                            <p>Introducing our Classic Elegance Men's Wristwatch - a timeless masterpiece that combines precision engineering with sophisticated design. This wristwatch is the epitome of class and sophistication.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='reviews-wrapper home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                    <h3 className='mb-4' id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4>Customer Review</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                        count={5}
                                        size={24}
                                        edit={false}
                                        value={3}
                                        activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 3 customers</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div >
                                        <a className="text-dark" href='#'>
                                            Write a review
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className='review-form py-4'>
                                <h4>Write a Review</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={true}
                                            value={3}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea name='' cols='30' rows='4' className='w-100 form-control' placeholder='comments' ></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end mt-2'>
                                    <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='review mt-4'>
                                <div className='d-flex align-items-center gap-10'>
                                    <h6 className='mb-0'>Blessing</h6>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        edit={true}
                                        value={4}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <p className='mt-3'>
                                 timeless masterpiece that combines precision engineering with sophisticated design. This wristwatch is the epitome of class and sophistication.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>        
      </section>
    </>
  )
}

export default SingleProduct