import React from 'react';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import {IoHome, IoMailSharp} from 'react-icons/io5';
import {BiSolidPhoneCall } from 'react-icons/bi';
import {BsInfoLg } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
    <Meta title={"BgStore | Contact"} />
    <BreadCrump title="Contact Us" />
    <div className='contact-wrapper py-5 home-wrapper-2'>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-12'>
            <div className='map-wrapper d-flex justify-content-center align-items-center'>
              <div className='w-100 map-shadow'>
              <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2652198053283!2d3.335743717462555!3d6.488061143589849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ea7fb5a2d2f%3A0xbe8f8bcda87450d5!2sAdetola%20St%2C%20Ijesha%20Tedo%20101241%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1697194266912!5m2!1sen!2sng"
                  width="600"
                  height="300"
                  className="border:0 w-100"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
              </iframe>
              </div>
            </div>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-3'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' className='form-control' placeholder='Name' />
                </div>
                <div>
                  <input type='email' className='form-control' placeholder='Email' />
                </div>
                <div>
                  <input type='tel' className='form-control' placeholder='Mobile Number' />
                </div>
                <div>
                  <textarea name='' cols='30' rows='4' className='w-100 form-control' placeholder='comments' ></textarea>
                </div>
                <div>
                  <button className='button border-0'>Submit</button>
                </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='d-flex gap-15 align-items-center mb-4'><IoHome className='contact-icon'/>
                    <address className='mb-0'>Hno: 115, Adetola, Surulere Lagos Nigeria.</address>
                    </li>
                    <li className='d-flex gap-15 align-items-center mb-4'><BiSolidPhoneCall className='contact-icon'/>
                    <a href='tel: +234 8110729847'>
                    +234 811 072 9847
                    </a>
                    </li>
                    <li className='d-flex gap-15 align-items-center mb-4'><IoMailSharp className='contact-icon'/>
                    <a href='mailto: blessbgstore@gmail.com'>
                    blessbgstore@gmail.com
                    </a>
                    </li>
                    <li className='d-flex gap-15 align-items-center mb-4'><BsInfoLg className='contact-icon'/>
                    <p className='mb-0'> Monday - Friday 8 AM - 5 PM</p>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact