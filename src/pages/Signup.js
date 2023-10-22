import React from 'react'
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Signup = () => {
  return (
    <>
        <Meta title={"BgStore | Register"} />
        <BreadCrump title="Create Account" />
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                <div className='login-card'>
                        <h3 className='text-center mb-3'>Register</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput 
                                name='firstName'
                                type='text'
                                placeholder='Enter your first name'
                            />
                            <CustomInput 
                                name='lastName'
                                type='text'
                                placeholder='Enter your last name'
                            />
                            <CustomInput 
                                name='email'
                                type='email'
                                placeholder='Enter your email'
                            />
                            <CustomInput 
                                name='mobile'
                                type='tel'
                                placeholder='Enter your phone number'
                            />
                            <CustomInput 
                                name='password'
                                type='password'
                                placeholder='Enter your password'
                            />
                            <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                <button className='button border-0 login-btn' type='submit'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Signup

