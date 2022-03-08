import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import logo from '../../img/logo.png'

const Navbar = ({ auth: { isAuthenticated }, user, logout }) => {

  return (
    <div className='container-fluid custom-navbar'>
      <div className='row web-view'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'>
          <div className='row align-items-center'>
            <div className='col-lg-3 text-center'>
              <Link to="/">
                <img alt='SETIMAGE' src={logo} className='img-fluid py-3' />
              </Link>
            </div>
            <div className='col-lg-9'>
              {(isAuthenticated && user) ?
                <div className='text-right text-white cursor-pointer'>
                  <div className='dropdown'>
                    <button type='button' className='btn dropdown-toggle' data-toggle='dropdown'>
                      <img src={user.avatar} alt='AVATAR' className='rounded-circle' width='35px' />
                      <span className='ml-2 text-white'>{user.name}</span>
                    </button>
                    <div className="dropdown-menu">
                      <div className="dropdown-item text-center" onClick={logout}>Sign Out</div>
                    </div>
                  </div>
                </div>
                :
                <div className='text-right py-3'>
                  <Link to='login' className='btn btn-light btn-sm p-0 px-3 mx-1'>LOGIN</Link>
                  <Link to='register' className='btn btn-light btn-sm p-0 px-2 mx-1'>SIGNUP</Link>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='col-lg-1'></div>
      </div>
      <div className='mobile-view'>
        <div className='d-flex align-items-end'>
          <div className='d-flex'>
            <div className='dropdown menu-dropdown'>
              <i className='fa fa-list text-white mt-3 pt-3 font-28 mr-2 dropdown-toggle' data-toggle='dropdown'></i>
              <div className="dropdown-menu">
                {isAuthenticated
                  ?
                  <>
                    <div className='dropdown-item text-white d-flex align-items-center py-3'>
                      <div>
                        <img src={user.avatar} alt='AVATAR' className='rounded-circle' width='40px' />
                      </div>
                      <div className='ml-3'>
                        <div className='font-weight-bold font-24'>{user.name}</div>
                        <div>United States, Florida</div>
                      </div>
                    </div>
                    <hr />
                    <div className="dropdown-item text-white font-weight-bold font-24 py-3">DASHBOARD</div>
                    <hr />
                    <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                      <div className='d-flex align-items-center'>
                        <div className='width-30 text-center'>
                          <i className='fa fa-bell-o mr-3'></i>
                        </div>
                        <div>
                          ALERTS
                        </div>
                      </div>
                      <i className='fa fa-angle-right'></i>
                    </div>
                    <hr />
                    <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                      <div className='d-flex align-items-center'>
                        <div className='width-30 text-center'>
                          <i className='fa fa-dollar mr-3'></i>
                        </div>
                        <div>PRICE MOVEMENTS</div>
                      </div>
                      <i className='fa fa-angle-right'></i>
                    </div>
                    <hr />
                    <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                      <div className='d-flex align-items-center'>
                        <div className='width-30 text-center'>
                          <i className='fa fa-eject mr-3'></i>
                        </div>
                        <div>SALES VOLUME</div>
                      </div>
                      <i className='fa fa-angle-right'></i>
                    </div>
                    <hr />
                    <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                      <div className='d-flex align-items-center'>
                        <div className='width-30 text-center'>
                          <i className='fa fa-cubes mr-3'></i>
                        </div>
                        <div>POPULAR CARD CHARTS</div>
                      </div>
                      <i className='fa fa-angle-right'></i>
                    </div>
                    <hr />
                    <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                      <div className='d-flex align-items-center'>
                        <div className='width-30 text-center'>
                          <i className='fa fa-bar-chart mr-3'></i>
                        </div>
                        <div>CHART ANY CARD</div>
                      </div>
                      <i className='fa fa-angle-right'></i>
                    </div>
                    <hr />
                    <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                      <div className='d-flex align-items-center'>
                        <div className='width-30 text-center'>
                          <i className='fa fa-line-chart mr-3'></i>
                        </div>
                        <div>SET & YEAR CHARTS</div>
                      </div>
                      <i className='fa fa-angle-right'></i>
                    </div>
                    <hr />
                  </>
                  :
                  null}
                <div className="dropdown-item text-white font-weight-bold font-24 py-3">QUICK LINKS</div>
                <hr />
                <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                  <div>FOOTBALL CARDS</div>
                  <i className='fa fa-angle-right'></i>
                </div>
                <hr />
                <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                  <div>BASKETBALL CARDS</div>
                  <i className='fa fa-angle-right'></i>
                </div>
                <hr />
                <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                  <div>BASEBALL CARDS</div>
                  <i className='fa fa-angle-right'></i>
                </div>
                <hr />
                <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                  <div>TERMS</div>
                  <i className='fa fa-angle-right'></i>
                </div>
                <hr />
                <div className="dropdown-item py-2 d-flex justify-content-between align-items-center">
                  <div>PRIVACY</div>
                  <i className='fa fa-angle-right'></i>
                </div>
                <hr />
                <div className="dropdown-item py-3">
                  <div className='text-white font-weight-bold font-20'>CONTACT US</div>
                  <div>ADMIN@SPORTSCARDS.COM</div>
                </div>
                <hr />
                <div className="dropdown-item py-3">
                  <div className='text-white font-weight-bold font-20'>FOLLOW US</div>
                  <div>
                    <i className='fa fa-twitter text-white width-10 mr-3'></i>
                    <i className='fa fa-facebook text-white width-10 mr-3'></i>
                    <i className='fa fa-youtube-play text-white width-10 mr-4'></i>
                    <i className='fa fa-pinterest-p text-white width-10 mr-3'></i>
                    <i className='fa fa-instagram text-white width-10 mr-3'></i>
                  </div>
                </div>
                <hr />
                <div className="dropdown-item py-3">
                  <div className='text-white font-weight-bold font-20'>SUBSCRIBE NOW</div>
                  <div>SIGNUP FOR A NEWSLETTER</div>
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
                <hr />
                <div className='py-5 my-5'></div>
              </div>
            </div>
            <div>
              <img alt='SETIMAGE' src={logo} className='img-fluid py-2' style={{ maxWidth: '200px' }} />
            </div>
          </div>

          {(isAuthenticated && user) ?
            <div className='text-white cursor-pointer ml-auto'>
              <div className='dropdown'>
                <button type='button' className='btn dropdown-toggle' data-toggle='dropdown'>
                  <img src={user.avatar} alt='AVATAR' className='rounded-circle' width='35px' />
                </button>
                <div className="dropdown-menu account-dropdown">
                  <div className="dropdown-item text-center" onClick={logout}>Sign Out</div>
                </div>
              </div>
            </div>
            :
            <div className='text-right py-3 ml-auto'>
              <Link to='login' className='btn btn-light btn-sm p-0 px-2 ml-2'>LOGIN</Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
