import React from 'react'
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <>
        <Meta title={"BgStore | Register"} />
        <BreadCrump title="Create Account" />
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                    <div className='login-card'>
                            <h3 className='text-center mb-3'>Register</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                        name='firstName'
                                        type='text'
                                        placeholder='Enter your first name'
                                        className='form-control'
                                        />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        name='lastName'
                                        type='text'
                                        placeholder='Enter your last name'
                                        className='form-control'
                                        />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        name='email'
                                        type='email'
                                        placeholder='Enter your email'
                                        className='form-control'
                                        />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        name='mobile'
                                        type='tel'
                                        placeholder='Enter your phone number'
                                        className='form-control'
                                        />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        name='password'
                                        type='password'
                                        placeholder='Enter your password'
                                        className='form-control'
                                        />
                                </div>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0 login-btn' type='submit'>Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup

