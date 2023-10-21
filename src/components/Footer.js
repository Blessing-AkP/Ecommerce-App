import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin, BsYoutube, BsGithub, BsInstagram} from 'react-icons/bs';
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div  className='container-xl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex align-items-center gap-30'>
              <img src={newsletter} alt='newsletter' />
              <h2 className='mb-0 text-white'>
                Sign Up for Newsletter
              </h2>
            </div>
          </div>
          <div className='col-7'>
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text py-0" id="basic-addon2">Subscribe</span>
              </div>
            </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact</h4>
            <div className=''>
              <address className='text-white fs-6'>
                Hno: 115 Adetola Street<br />Aguda, Surulere, Lagos.<br />
                pinCode: 13110
              </address>
              <a href='tel: +234 8110729847' className='text-white mb-0 mt-3 d-block'>+234 8110729847</a>
              <a href='mailto: blessdgstore@gmail.com' className='text-white mb-0 mt-2 d-block'>blessdgstore@gmail.com</a> 
              <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                <a href='#' className='text-white'>
                  <BsLinkedin className='fs-5'/>
                </a>
                <a href='#' className='text-white'>
                  <BsInstagram className='fs-5'/>
                </a>
                <a href='#' className='text-white'>
                  <BsGithub className='fs-5'/>
                </a>
                <a href='#' className='text-white'>
                  <BsYoutube className='fs-5'/>
                </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to='/privacy-policy'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1' to='/shipping-policy'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1' to='/refund-policy'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1' to='/terms-conditions'>Terms of Service</Link>
              <Link className='text-white py-2 mb-1' to='/blog'>Blog</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to='/about'>About Us</Link>
              <Link className='text-white py-2 mb-1' to='#'>FAQs</Link>
              <Link className='text-white py-2 mb-1' to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to='#'>Laptop</Link>
              <Link className='text-white py-2 mb-1' to='#'>Heaphone</Link>
              <Link className='text-white py-2 mb-1' to='#'>Tablet</Link>
              <Link className='text-white py-2 mb-1' to='#'>Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4 f3'>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center text-white mb-0'>
              &copy; {new Date().getFullYear()} Powered By BgStore
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer