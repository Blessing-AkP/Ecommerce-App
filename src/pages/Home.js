import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import Meta from '../components/Meta';



const Home = () => {
  return (
    <>
      <Meta title={"BgStore"} />
      <section className='home-wrapper-1 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-3 ps-0 pe-2'>
                <div className='small-banner position-relative w-100 mb-2'>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From 599 or <br />$49.91/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative w-100'>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving</h4>
                  <h5>Headset</h5>
                  <p>High-fidelity sound &<br /> ultra-low distortion</p>
                </div>
                </div>
            </div>

            <div className='col-6 px-0'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>Ipad S13 +Pro.</h5>
                  <p>From $999.00 or $41.62/mo.<br /> for 24 mo footnote*</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>

            <div className='col-3 ps-2 pe-0'>              
              <div className='small-banner position-relative w-100 mb-2'>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>15% Off</h4>
                  <h5>Smart Watch 7</h5>
                  <p>Shope the latest <br />brands & styles</p>
                </div>
              </div>
              <div className='small-banner position-relative w-100'>
              <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>Best Sale</h4>
                    <h5>Laptop Max.</h5>
                    <p>From $1699.00 or<br /> $64.78/mo.</p>
                  </div>
              </div>
          </div>

          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>24/7 Support</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct prices</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>Computers & Laptops</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/laptop.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>Mobiles & Tablets</h6>
                    <p>5 Items</p>
                  </div>
                  <img src='images/phone2.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/watch3.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>Head Phones</h6>
                    <p>50 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>Accesories</h6>
                    <p>5 Items</p>
                  </div>
                  <img src='images/acc.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>Portable Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/speaker.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-'>
                  <div className=''>
                    <h6>cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera3.png' alt='camera' />
                </div>

                {/* <div className='d-flex align-items-center gap-30'>
                  <div className=''>
                    <h6>Appliances</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/homeapp.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div className=''>
                    <h6>Appliances</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/homeapp.jpg' alt='camera' />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>        
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative pe-1'>
                <img src='images/fam-7.jpg' className='img-fluid ' alt='famouse images'/>
                <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative pe-1'>
                <img src='images/fam-2.jpg' className='img-fluid ' alt='famouse images'/>
                <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness</h6>
                <p className='text-dark'>27 inch 5k retina display</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative pe-1'>
                <img src='images/fam-10.jpg' className='img-fluid ' alt='famouse images'/>
                <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Smartphones</h5>
                <h6 className='text-dark'>Smartphon 13 pro</h6>
                <p className='text-dark'>Now in green from $999.00 <br/>or $41.32/mo for 24 mo footnote.</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative pe-1'>
                <img src='images/fam-15.jpg' className='img-fluid ' alt='famouse images'/>
                <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Home Speakers</h5>
                <h6 className='text-dark'>Room-filling Sound</h6>
                <p className='text-dark'>From $699.00 or $14.65/mo for 12 mo</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className='specialprod-wrapper home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className='row'>
                  <SpecialProducts />
                  <SpecialProducts />
                  <SpecialProducts />
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
      <section className='marquee-wrapper py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 card1'>
                <div className='marquee-inner-wrapper card-wrapper'>
                  <Marquee className='d-flex'>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-01.png' className='img-fluid' alt='brand' />
                    </div>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-02.png' className='img-fluid' alt='brand' />
                    </div>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-03.png' className='img-fluid' alt='brand' />
                    </div>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-04.png' className='img-fluid' alt='brand' />
                    </div>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-05.png' className='img-fluid' alt='brand' />
                    </div>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-06.png' className='img-fluid' alt='brand' />
                    </div>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-07.png' className='img-fluid' alt='brand' />
                    </div>
                    <div className='mx-4 w-50'>
                      <img src='images/brand-08.png' className='img-fluid' alt='brand' />
                    </div>
                  </Marquee>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Lattest Blog</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
        </div>        
      </section>

    </>
  )
}

export default Home