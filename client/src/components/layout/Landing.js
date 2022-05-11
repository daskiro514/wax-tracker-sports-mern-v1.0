import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import baseballImage from '../../img/baseball.png'
import footballImage from '../../img/football.png'
import basketballImage from '../../img/basketball.png'

const Landing = ({ isAuthenticated }) => {

  const [searchKey, setSearchKey] = React.useState('')

  return (
    <div className='bg-landing'>
      <div className='container-fluid' style={{ background: 'rgba(0,0,0,0.6)' }}>
        <div className='text-center pt-5 pb-4'>
          <div className='font-40 text-white padding-100'>
            Search 1 million Price movement by Sports Cards
          </div>
          <div className='font-24 text-white pt-3'>
            See trending cards and price changes before the rest of the hoppy notices
          </div>
        </div>
        <div className='container'>
          <div className='row pb-5'>
            <div className='shadow border rounded-xl p-4 custom-bg-color-1 w-100'>
              <div className='font-28 text-white'>Search by Sports Cards</div>
              <div className='input-group pt-2'>
                <input
                  placeholder='What are you looking for?'
                  className='form-control py-4'
                  value={searchKey}
                  onChange={e => setSearchKey(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <Link to='/search' className="btn btn-warning px-3 pt-2" type="submit"><i className='fa fa-chevron-right pt-2'></i></Link>
                </div>
              </div>
            </div>
            <div className='mt-3 mb-5 w-100'>
              <div className='p-3 border rounded-xl mt-5' style={{ background: 'rgba(0,0,0,0.5)' }}>
                <div className='row align-items-center'>
                  <div className='col-lg-5 text-center font-20 text-white'>
                    Search TOP Sports cards Categories
                  </div>
                  <div className='col-lg-7 font-20 text-white pt-2'>
                    <div className='row'>
                      <div className='col-4 px-1 text-center'>
                        <img alt='SETIMAGE' src={footballImage} className='ball-image' />
                        <Link to='/search'>Football</Link>
                      </div>
                      <div className='col-4 px-1 text-center'>
                        <img alt='SETIMAGE' src={basketballImage} className='ball-image' />
                        <Link to='/search'>Basketball</Link>
                      </div>
                      <div className='col-4 px-1 text-center'>
                        <img alt='SETIMAGE' src={baseballImage} className='ball-image' />
                        <Link to='/search'>Baseball</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
