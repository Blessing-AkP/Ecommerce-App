import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
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
            <div className='col-6'>
              <div className='d-flex gap-10 flex-wrap justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>Best Sale</h4>
                    <h5>Laptop Max.</h5>
                    <p>From $1699.00 or<br /> $64.78/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From 599 or <br />$49.91/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>15% Off</h4>
                    <h5>Smart Watch 7</h5>
                    <p>Shope the latest band, <br />styles and colors</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>Free Engraving</h4>
                    <h5>Quality Headset</h5>
                    <p>High-fidelity playback &<br /> ultra-low distortion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home