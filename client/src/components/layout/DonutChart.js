import React from 'react'
import ReactApexChart from 'react-apexcharts'

const DonutChart = ({ customClass }) => {
  const series = [45, 55]
  const options = {
    dataLabels: {
      enabled: false
    }
  }
  return (
    <div className="chart-wrap">
      <div id="chart" className='d-flex justify-content-center py-3'>
        <ReactApexChart options={options} series={series} type="donut" width='140px' className={customClass} />
      </div>
    </div>
  )
}

export default DonutChart