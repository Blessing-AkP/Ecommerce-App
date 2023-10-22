import React from 'react';
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
  return (
    <>
        <Meta title={"BgStore |Password Reset"} />
        <BreadCrump title="Password Reset" />
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='login-card'>
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput 
                                name='password'
                                type='password'
                                placeholder='Enter new password'
                            />
                            <CustomInput 
                                name='password'
                                type='password'
                                placeholder='Confirm password'
                            />
                           
                            <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                <button className='button border-0 login-btn' type='submit'>Ok</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
        </>
  )
}

export default ResetPassword