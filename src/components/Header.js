import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className='col-6'>
            <p className='text-end text-white mb-0'>
              Hotline: <a className='text-white' href='tel: +234 8110729847'>
                  +234 811 072 9847
                </a>
            </p>
            </div>
          </div>
        </div>
      </header>
      <div className='sticky-top'>
      <header className='header-upper py-3'>
        <div className='container-xl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2 className='logo-name'>
                <Link className='text-white'>Bg.Store</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group pe-5">
                <input type="text" className="form-control py-0" placeholder="Search Products Here..." aria-label="Search Products Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-8' /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <Link to="/compare-product" className='text-white d-flex align-items-center gap-10'>
                  <img src='images/compare.svg' alt='compare'/>
                  <p className='mb-0'>Compare <br /> Products</p>
                </Link>
                <Link to="/wishlist" className='text-white d-flex align-items-center gap-10'>
                  <img src='images/wishlist.svg' alt='wishlist'/>
                  <p className='mb-0'>Favourite <br /> Wishlist</p>
                </Link>
                <Link to="login" className='text-white d-flex align-items-center gap-10'>
                  <img src='images/user.svg' alt='user'/>
                  <p className='mb-0'>Login <br /> My Account</p>
                </Link>
                <Link to="/cart" className='text-white d-flex align-items-center gap-10'>
                  <img src='images/cart.svg' alt='cart'/>
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0'>$ 500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className='header-bottom py-1'>
          <div className='container-xl'>
            <div className='row'>
              <div className='col-12'>
                <div className='menu-bottom d-flex align-items-center gap-30'>
                  <div>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src='images/menu.svg' alt='menu' />
                        <span className='me-5 d-inline-block'>Shop Categories</span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item text-white pt-2 pb-2" to="#">Action</Link></li>
                        <li><Link className="dropdown-item text-white pt-2 pb-2" to="#">Another action</Link></li>
                        <li><Link className="dropdown-item text-white pt-2 pb-2" to="#">Something else here</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className='menu-links'>
                    <div className='d-flex align-items-center gap-15'>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/store">Our Store</NavLink>
                      <NavLink to="/blog">Blogs</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  )
}

export default Header