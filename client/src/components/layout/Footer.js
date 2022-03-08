import React from 'react'
import logo from '../../img/logo.png'

const Footer = () => {

  return (
    <section>
      <div className='bg-footer py-5'>
        <div className='container'>
          <div className='row font-13'>
            <div className='col-lg-4'>
              <div className='text-center'>
                <img alt='SETIMAGE' src={logo} className='img-fluid' />
              </div>
              <div className='footer-text text-justify pt-2'>
                Duis maximus eros eget facilisis pulvinar. Nam ut faucibus leo. Phasellus sit amet enim eget est iaculis rhoncus in eget metus. Sed uma enim, venenatis et posuere a. laoreet sit amet tortor. Donec convalis. magna quis elementum, neque enim rhoncus magna, ut dapibus enim nunc sit amet magna.
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='row'>
                <div className='col-lg-6 mt-4 pt-2'>
                  <div className='text-white h6'>QUICK LINKS</div>
                  <div className='footer-text'>FOOTBALL CARDS</div>
                  <div className='footer-text'>BASKETBALL CARDS</div>
                  <div className='footer-text'>BASEBALL CARDS</div>
                  <div className='footer-text'>TERMS</div>
                  <div className='footer-text'>PRIVACY</div>
                </div>
                <div className='col-lg-6 mt-4 pt-2'>
                  <div className='text-white h6'>FOLLOW US ON</div>
                  <div className='social-big-screen'>
                    <div className='footer-text'><i className='fa fa-twitter text-white width-10 mr-3'></i>TWITTER</div>
                    <div className='footer-text'><i className='fa fa-facebook text-white width-10 mr-3'></i>FACEBOOK</div>
                    <div className='footer-text'><i className='fa fa-youtube-play text-white width-10 mr-3'></i>YOUTUBE</div>
                    <div className='footer-text'><i className='fa fa-pinterest-p text-white width-10 mr-3'></i>PINTEREST</div>
                    <div className='footer-text'><i className='fa fa-instagram text-white width-10 mr-3'></i>INSTAGRAM</div>
                  </div>
                  <div className='social-small-screen'>
                    <i className='fa fa-twitter text-white width-10 mr-3'></i>
                    <i className='fa fa-facebook text-white width-10 mr-3'></i>
                    <i className='fa fa-youtube-play text-white width-10 mr-3'></i>
                    <i className='fa fa-pinterest-p text-white width-10 mr-3'></i>
                    <i className='fa fa-instagram text-white width-10 mr-3'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mt-4 pt-2'>
                <div className='text-white h6'>SUBSCRIBE NOW</div>
                <div className='footer-text'>SIGNUP FOR A NEWSLETTER</div>
                <div className='input-group pt-2'>
                  <input
                    placeholder='Enter your Email Address here'
                    className='form-control'
                    required
                  />
                  <div className="input-group-append">
                    <button className="btn btn-warning px-3"><i className='fa fa-chevron-right'></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-bottom'>
        <div className='container'>
          <div className='row py-4'>
            <div className='col-lg-6'>
              <div className='bottom-text font-13 py-1'>
                COPYRIGHT @ 2020 WWW.SPORTSCARDS.COM. ALL RIGHTS RESERVED.
              </div>
            </div>
            <div className='col-lg-6 text-right contact-us'>
              <div className='bottom-text font-13 py-1'>
                CONTACT US: ADMIN@SPORTSCARDS.COM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer