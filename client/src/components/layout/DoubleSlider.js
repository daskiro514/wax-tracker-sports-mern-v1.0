import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const DoubleSlider = () => {
  const [value, setValue] = React.useState({ min: 45000, max: 65000 })

  return (
    <form className="form1">
      <InputRange
        maxValue={100000}
        minValue={0}
        formatLabel={value => `${value} $`}
        value={value}
        onChange={value => setValue(value)}
        onChangeComplete={value => console.log(value)}
      />
    </form>
  )
}

export default DoubleSlider