import React from 'react'
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <Meta title={"BgStore |Login"} />
        <BreadCrump title="Account" />
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                        name='email'
                                        type='email'
                                        placeholder='Enter your email'
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
                                <Link to="/forgot-password">Forgot Password?</Link>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0 login-btn' type='submit'>Login</button>
                                    <Link to="/signup" className='button signup'>Sign Up</Link>
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

export default Login