import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrump = (props) => {
    const {title} = props;
  return (
    <div className='breadcrumb py-4 mb-0 svg-bg'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-12 d-flex align-items-center justify-content-center'>
                    <p className='text-center'>
                        <Link 
                        to="/" 
                        className='text-dark'>
                            Home &nbsp;
                        </Link>
                        / {title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrump