import React from 'react'
import ReactApexChart from 'react-apexcharts'

const AreaChart = () => {
  const series = [
    {
      name: 'Visits',
      data: [1500, 1900, 1700, 1950, 2800, 2600, 1800, 1800, 1600, 1750, 1500, 2300, 2100, 2700]
    },
    {
      name: 'Visitors',
      data: [520, 500, 600, 550, 570, 560, 500, 500, 450, 460, 530, 540, 580, 610]
    }
  ]

  const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#87c7f3', '#ff95ab'],
    fill: {
      colors: ['#87c7f3', '#ff95ab'],
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23", "2018-09-24", "2018-09-25", "2018-09-26", "2018-09-27", "2018-09-28", "2018-09-29", "2018-09-30", "2018-10-01", "2018-10-02"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  )
}

export default AreaChart