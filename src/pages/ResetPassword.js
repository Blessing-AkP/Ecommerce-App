import React from 'react';
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';

const ResetPassword = () => {
  return (
    <>
        <Meta title={"BgStore |Password Reset"} />
        <BreadCrump title="Password Reset" />
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                        name='password'
                                        type='password'
                                        placeholder='Enter new password'
                                        className='form-control'
                                        />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        name='password'
                                        type='password'
                                        placeholder='Confirm password'
                                        className='form-control'
                                        />
                                </div>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0 login-btn' type='submit'>Ok</button>
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

export default ResetPassword