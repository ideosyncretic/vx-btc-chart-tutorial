import { withParentSize } from '@vx/responsive'
import { scaleTime, scaleLinear } from '@vx/scale'
import { LinePath } from '@vx/shape'

function Chart({ data, parentWidth, parentHeight }) {
  const margin = {
    top: 15,
    bottom: 40,
    left: 0,
    right: 0,
  }
  const width = parentWidth - margin.left - margin.right
  const height = parentHeight - margin.top - margin.bottom

  // gets the relevant data attributes to plot along chart axes
  const x = dataPoint => new Date(dataPoint.time)
  const y = dataPoint => dataPoint.price
  const minPrice = Math.min(...data.map(y))
  const maxPrice = Math.max(...data.map(y))
  const minDate = Math.min(...data.map(x))
  const maxDate = Math.max(...data.map(x))

  const xScale = scaleTime({
    range: [0, width],
    // get the earliest and latest dates from data array
    domain: [minDate, maxDate]
  })

  const yScale = scaleLinear({
    range: [height, 0],
    domain: [minPrice, maxPrice]
  })

  return (
    <div>
      <svg width={width} height={height}>
        <LinePath
          data={data}
          yScale={yScale}
          xScale={xScale}
          x={x}
          y={y}
        />
      </svg>
    </div>
  )
}

export default withParentSize(Chart)
