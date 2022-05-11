import React from 'react'
import { connect } from 'react-redux'
import DoubleSlider from './DoubleSlider'
import DonutChart from './DonutChart'
import AreaChart from './AreaChart'
import volleyBallImage from '../../img/volleyball.jpg'
import productImage from '../../img/product1.JPG'
import tagImage from '../../img/tag.jpg'

const Search = () => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3 text-white'>
          <div className='basic-search-options bg-main-blue my-4'>
            <div className='text-center py-4 border-bottom border-dark'>
              <div className='d-flex justify-content-center'>
                <div className='bg-white p-3 rounded-circle'>
                  <img alt='SETIMAGE' src={volleyBallImage} className='img-fluid rounded-circle' />
                </div>
              </div>
              <div className='pt-3'>
                <span className='border-bottom'>Football Sports Cards</span>
              </div>
            </div>
            <div className='p-3'>
              <div className='h4'>Search Sports Cards</div>
              <div className='py-3 d-flex justify-content-between'>
                <div className='w-100 border-bottom border-width-4px pb-2 font-weight-bold'>Basic Search</div>
                <div className='w-100 text-right border-bottom border-black border-width-4px pb-2 font-weight-bold'>Advanced Search</div>
              </div>
              <div className='py-2'>
                <label>What are you looking for?</label>
                <input
                  placeholder='Football'
                  className='form-control py-3 shadow shadow'
                  required
                />
              </div>
              <div className='py-2'>
                <label>Product Category</label>
                <input
                  placeholder='Ball'
                  className='form-control py-3 shadow'
                  required
                />
              </div>
              <div className='py-2'>
                <label>Search Type</label>
                <input
                  placeholder='Items for Sale'
                  className='form-control py-3 shadow'
                  required
                />
              </div>
              <div className='py-2'>
                <label>Sub Category</label>
                <input
                  placeholder='None'
                  className='form-control py-3 shadow'
                  required
                />
              </div>
              <div className='py-2 d-flex align-items-center mt-2'>
                <label className='mr-3'>Include Best Offer: </label>
                <label className="radio-container mr-3 mb-1">
                  <input type="checkbox" />
                  <span className="radio-checkmark"></span>
                  <span>Yes</span>
                </label>

                <label className="radio-container mb-1">
                  <input type="checkbox" />
                  <span className="radio-checkmark"></span>
                  <span>No</span>
                </label>
              </div>
              <div className='py-2 d-flex align-items-center'>
                <label className='mr-3'>Simple Results: </label>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className='py-2'>
                <div className='border rounded text-center p-2'>
                  + Advanced Search
                </div>
              </div>
              <div className='py-2'>
                <div className='rounded bg-yellow p-2 text-center text-black font-weight-bold'>
                  <i className='fa fa-search mr-2'></i>
                  Search
                </div>
              </div>
              <div className='py-3 text-center'>
                <span className='border-bottom font-weight-bold'>Clear Results</span>
              </div>
            </div>
          </div>
          <div className='advanced-search-options bg-main-blue my-4'>
            <div className='text-center py-4 border-bottom border-dark'>
              <div className='d-flex justify-content-center'>
                <div className='bg-white p-3 rounded-circle'>
                  <img alt='SETIMAGE' src={volleyBallImage} className='img-fluid rounded-circle' />
                </div>
              </div>
              <div className='pt-3'>
                <span className='border-bottom'>Football Sports Cards</span>
              </div>
            </div>
            <div className='p-3'>
              <div className='h4'>Search Sports Cards</div>
              <div className='py-3 d-flex justify-content-between'>
                <div className='w-100 border-bottom border-width-4px border-black pb-2 font-weight-bold'>Basic Search</div>
                <div className='w-100 text-right border-bottom border-width-4px pb-2 font-weight-bold'>Advanced Search</div>
              </div>
              <div className='py-2'>
                <label>Type</label>
                <input
                  placeholder='Football'
                  className='form-control py-3 shadow'
                  required
                />
              </div>
              <div className='py-2'>
                <label>Red / Both</label>
                <input
                  placeholder='Ball'
                  className='form-control py-3 shadow'
                  required
                />
              </div>
              <div className='py-2'>
                <label>Price</label>
                <DoubleSlider />
              </div>
              <div className='py-2'>
                <label>Distance</label>
                <input type="range" className="form-control-range" />
                <div className='text-right'>30 M / hrs</div>
              </div>
              <div className='py-2'>
                <label>Time</label>
                <input type="range" className="form-control-range" />
                <div className='text-right'>3 Days</div>
              </div>
              <div className='py-2'>
                <label>SF</label>
                <input type="range" className="form-control-range" />
                <div className='text-right'>456008</div>
              </div>
              <div className='py-2'>
                <label>S / SF</label>
                <input type="range" className="form-control-range" />
                <div className='text-right'>4568</div>
              </div>
              <div className='py-2'>
                <div className='rounded bg-yellow p-2 text-center text-black font-weight-bold'>
                  <i className='fa fa-search mr-2'></i>
                  Search
                </div>
              </div>
              <div className='py-3 text-center'>
                <span className='border-bottom font-weight-bold'>Clear Results</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-9'>
          <div className='recent-search-items p-4 mt-4 shadow border border-light'>
            <div className='h5'>Recent search items</div>
            <div className='pt-2'>
              <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-light-blue'>
                Curabitur consectetur
                <i className='fa fa-remove ml-2'></i>
              </div>
              <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-light-blue'>
                Mauristincidun
                <i className='fa fa-remove ml-2'></i>
              </div>
              <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-light-blue'>
                Vivamus egestas
                <i className='fa fa-remove ml-2'></i>
              </div>
              <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-light-blue'>
                Aliquam erat
                <i className='fa fa-remove ml-2'></i>
              </div>
              <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-light-blue'>
                Orci varius natoque
                <i className='fa fa-remove ml-2'></i>
              </div>
            </div>
          </div>
          <div className='sports-cards-graph shadow border border-light mt-4'>
            <div className='row align-items-center py-3'>
              <div className='col-md-6'>
                <div className='h4 text-primary font-weight-bold px-3'>Football Sports Cards</div>
              </div>
              <div className='col-md-6'>
                <div className='d-flex align-items-center flex-row-reverse pr-3'>
                  <div className='ml-3 h1 text-info'>12456</div>
                  <div>TOTAL PRODUCTS</div>
                </div>
              </div>
            </div>
            <div className='circled-graph'>
              <div className='w-20 text-center d-inline-block border bg-light'>
                <div className='d-block align-items-center'>
                  <DonutChart customclassName='donut-purple' />
                  <div>
                    <div className='font-weight-bold'>ITEMS FOR SALE</div>
                    <div className='h4 text-purple font-weight-bold py-2'>65845</div>
                  </div>
                </div>
              </div>
              <div className='w-20 text-center d-inline-block border bg-light'>
                <div className='d-block align-items-center'>
                  <DonutChart customclassName='donut-danger' />
                  <div>
                    <div className='font-weight-bold'>SOLD ITEMS</div>
                    <div className='h4 text-danger font-weight-bold py-2'>56879</div>
                  </div>
                </div>
              </div>
              <div className='w-20 text-center d-inline-block border bg-light'>
                <div className='d-block align-items-center'>
                  <DonutChart customclassName='donut-success' />
                  <div>
                    <div className='font-weight-bold'>NEW ITEMS</div>
                    <div className='h4 text-success font-weight-bold py-2'>8945</div>
                  </div>
                </div>
              </div>
              <div className='w-20 text-center d-inline-block border bg-light'>
                <div className='d-block align-items-center'>
                  <DonutChart customclassName='donut-primary' />
                  <div>
                    <div className='font-weight-bold'>ENDING SOON</div>
                    <div className='h4 text-primary font-weight-bold py-2'>785</div>
                  </div>
                </div>
              </div>
              <div className='w-20 text-center d-inline-block border bg-light'>
                <div className='d-block align-items-center'>
                  <DonutChart customclassName='donut-warning' />
                  <div>
                    <div className='font-weight-bold'>BUY IT NOW</div>
                    <div className='h4 text-warning font-weight-bold py-2'>35685</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='area-graph py-3'>
              <div className='bg-light m-3 align-items-center'>
                <div className='d-inline-block'>
                  <span className='text-info'>10 Days</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-info'>20 Days</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-info'>30 Days</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-info'>2 Months</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-info'>3 Months</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-info'>6 Months</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-info'>9 Months</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-info'>1 Year</span><span>&nbsp;|&nbsp;</span>
                </div>
                <div className='d-inline-block'>
                  <span className='text-secondary'>Time Frame: </span>
                </div>
                <input defaultValue='09/08/2017' className='mx-1' />
                <span className='text-secondary'>to</span>
                <input defaultValue='09/08/2017' className='mx-1' />
                <button className='btn btn-info btn-sm'>GO</button>
              </div>
              <AreaChart />
            </div>
          </div>
          <div className='search-results shadow border border-light my-4'>
            <div className='row align-items-center py-3 show-options'>
              <div className='col-md-6'>
                <div className='h5 text-secondary px-3'>Items Search Results for:</div>
                <div className='h4 text-primary font-weight-bold px-3'>Football Sports Cards</div>
              </div>
              <div className='col-md-6'>
                <div className='text-secondary text-right px-3'>Total Number of Results: 123456</div>
                <div className='align-items-center py-1 text-right px-2 pl-3'>
                  <div className='d-inline-block'>
                    <label className='mx-1'>SORT BY</label>
                    <select className='mx-1'>
                      <option>Ending Soon</option>
                    </select>
                  </div>
                  <div className='d-inline-block'>
                    <label className='mx-1'>DISPLAY</label>
                    <select className='mx-1'>
                      <option>50 Per Page</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='recent-search-items p-4 mt-4 bg-light-blue'>
              <div className='h5'>Recent search items</div>
              <div className='pt-2'>
                <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-white'>
                  Curabitur consectetur
                  <i className='fa fa-remove ml-2'></i>
                </div>
                <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-white'>
                  Mauristincidun
                  <i className='fa fa-remove ml-2'></i>
                </div>
                <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-white'>
                  Vivamus egestas
                  <i className='fa fa-remove ml-2'></i>
                </div>
                <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-white'>
                  Aliquam erat
                  <i className='fa fa-remove ml-2'></i>
                </div>
                <div className='border border-light-blue border-3px d-inline-block p-2 rounded-lg mr-2 my-1 bg-white'>
                  Orci varius natoque
                  <i className='fa fa-remove ml-2'></i>
                </div>
              </div>
            </div>
            <div className='result-pagination p-3'>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <button className='btn btn-sm bg-purple text-white width-100'>
                    <i className='fa fa-angle-double-left pr-1'></i>
                    <span className='btn-inner-text'>PREVIOUS</span>
                  </button>
                </div>
                <div>
                  <button className='btn btn-sm btn-light border mx-1'>1</button>
                  <button className='btn btn-sm btn-light border mx-1'>2</button>
                  <button className='btn btn-sm btn-light border mx-1'>3</button>
                  <span className='mx-1'>...</span>
                  <button className='btn btn-sm btn-light border mx-1'>15</button>
                </div>
                <div>
                  <button className='btn btn-sm bg-blue text-white width-100'>
                    <span className='btn-inner-text'>NEXT</span>
                    <i className='fa fa-angle-double-right pl-1'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='table-responsive result'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th style={{ minWidth: '150px' }} className='text-center'>IMAGE</th>
                    <th style={{ minWidth: '300px' }}>ITEM DETAILS</th>
                    <th className='width-100'></th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) =>
                    <tr key={index}>
                      <td className='text-center'>{item}</td>
                      <td className='text-center'>
                        <img alt='SETIMAGE' src={productImage} className='img-fluid' />
                      </td>
                      <td>
                        <div className='d-flex'>
                          <div className='width-120'>Item Title</div>
                          <div className='fade1'>:</div>
                          <div className='text-primary font-weight-bold ml-1'> Red Scorpion Dirt Bike MX1 ATV Motss Racing Sport Car Bike...</div>
                        </div>
                        <div className='d-flex'>
                          <div className='width-120'>Sale Price</div>
                          <div className='fade1'>:</div>
                          <div className='text-danger font-weight-bold ml-1'>USD 123.89</div>
                        </div>
                        <div className='d-flex'>
                          <div className='width-120'>Offer Price Sale</div>
                          <div className='fade1'>:</div>
                          <div className='text-secondary ml-1'><s className='mr-3'>$183.05</s>50% off</div>
                        </div>
                        <div className='d-flex'>
                          <div className='width-120'>Sale Date</div>
                          <div className='fade1'>:</div>
                          <div className='text-secondary ml-1'>Thu 07 May 2020 12:35 AM</div>
                        </div>
                        <div>
                          <img alt='SETIMAGE' src={tagImage} className='pt-4' width='100px' />
                        </div>
                      </td>
                      <td className='text-center'>
                        <button className='btn btn-sm rounded-circle bg-main-blue text-white px-2 py-0'>
                          <i className='fa fa-angle-right'></i>
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className='result-pagination p-3'>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <button className='btn btn-sm bg-purple text-white width-100'>
                    <i className='fa fa-angle-double-left pr-1'></i>
                    <span className='btn-inner-text'>PREVIOUS</span>
                  </button>
                </div>
                <div>
                  <button className='btn btn-sm btn-light border mx-1'>1</button>
                  <button className='btn btn-sm btn-light border mx-1'>2</button>
                  <button className='btn btn-sm btn-light border mx-1'>3</button>
                  <span className='mx-1'>...</span>
                  <button className='btn btn-sm btn-light border mx-1'>15</button>
                </div>
                <div>
                  <button className='btn btn-sm bg-blue text-white width-100'>
                    <span className='btn-inner-text'>NEXT</span>
                    <i className='fa fa-angle-double-right pl-1'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Search)