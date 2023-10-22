import React from 'react'
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';

const Blog = () => {
  return (
    <>
        <Meta title={"BgStore | Blogs"} />
        <BreadCrump title="Blogs" />
        <Container class1='blog-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-3'>
                <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Find By categories</h3>
                        <ul className='ps-0'>
                            <li>Phone</li>
                            <li>Laptop</li>
                            <li>Smart Watch</li>
                            <li>Tv</li>
                            <li>camera</li>
                        </ul>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Blog