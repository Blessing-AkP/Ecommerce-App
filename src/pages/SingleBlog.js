import React from 'react';
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {MdKeyboardBackspace } from 'react-icons/md'; 
import {BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'; 
import blog1 from "../images/blog-1.jpg";
import mainBanner from "../images/main-banner.jpg";
import mainBanner1 from "../images/main-banner-1.jpg";


const SingleBlog = () => {
  return (
    <>
        <Meta title={"BgStore | Dynamic Blog Name"} />
        <BreadCrump title="Dynamic Blog Name" />
        <div className='blog-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row' >
                    <div className='col-4'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title mb-3'>Trending</h3>
                            <ul className='ps-0 mb-4'>
                                <li className='mb-3'>
                                    <h6 className='mb-2'>Title</h6>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <div><img src={mainBanner1} className='img-fluid' alt='watch'/> </div>
                                    <p className='mb-0'>this is a fantastic watch This would be a great luxury car. You're only as good as your last cellection, which is an enormous pleasure. <Link to="">read more...</Link></p>
                                    </div>
                                    </li>
                            </ul>
                            
                            <h3 className='filter-title'>Popular</h3>
                            <ul className='ps-0'>
                                <li className='mb-3'>
                                    <h6 className='mb-2'>Title</h6>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <div><img src={mainBanner} className='img-fluid' alt='watch'/> </div>
                                    <p className='mb-0'>this is a fantastic watch This would be a great luxury car. You're only as good as your last cellection <Link to="">read more...</Link></p>
                                    </div>
                                    </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='single-blog-card ms-3'>
                            <h3 className='title text-center'>A Beautiful Sunday Morning Renaissance</h3>
                            <img src={blog1} alt='blog' className='img-fluid w-100 my-4 single-blog-img' />
                            <p>
                            You're only as good as your last cellection, which is an enormous pleasure. I think this is something abaout luxury, its not something people need. Its what they want. It really pulls at their heart. I have a fantastic relationship with money. This would be a great luxury car if your as me. I want to take you to a fancy restorant. 
                            You're only as good as your last cellection, which is an enormous pleasure. I think this is something abaout luxury, its not something people need. Its what they want. It really pulls at their heart. I have a fantastic relationship with money. This would be a great luxury car if your as me. I want to take you to a fancy restorant. 
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <p className='date me-3'>11 June, 2022</p>
                                <p className='auto'>Blessing.A</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center my-5 ms-4 back-to-blog'>
                            <Link to="/blog" className='d-flex align-items-center gap-10'><MdKeyboardBackspace /> Go back to blogs
                            </Link>

                            <div className='d-flex align-items-center gap-15 blog-social-icon'>
                                <Link to=""> <BsFacebook /></Link>
                                <Link to=""><BsTwitter /></Link>
                                <Link to=""><BsInstagram /></Link>
                            </div>
                         
                        </div>
                        {/* -----------Form ------------- */}
                        
                        <div className='login-card blog-comment-card w-100 ms-3'>
                            <h3 className=' mb-3'>Leave A Comment</h3>
                            <form action='' >
                                <div className='d-flex gap-15 justify-content-between' >
                                    <div className='w-100 my-3'>
                                            <input
                                            name='name'
                                            type='text'
                                            placeholder='Name *'
                                            className='form-control'
                                            />
                                    </div>
                                    <div className='w-100 my-3'>
                                        <input
                                            name='email'
                                            type='email'
                                            placeholder='Email *'
                                            className='form-control'
                                            />
                                    </div>
                                </div>
                                
                                <div>
                                    <textarea name='' cols='30' rows='4' className='w-100  text-area form-control' placeholder='comment *' ></textarea>
                                </div>

                                <button 
                                className='button border-0 login-btn mt-4 py-2 px-3' type='submit'>
                                    Post Comment
                                </button>
                            </form>
                        </div>
                        {/* -----------Form End------------ */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog