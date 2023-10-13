import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
        <div className='blog-card'>
            <div className='card-img'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>5 Jan 2022</p>
                <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                <p className='desc'>
                Join us on a journey as we explore the magic of beautiful Sunday mornings.
                </p>
                <Link to='/' className='button' >Read More</Link>
            </div>
        </div>
  )
}

export default BlogCard;