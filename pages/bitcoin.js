import { withScreenSize } from '@vx/responsive'
import { LinearGradient } from '@vx/gradient'
import Chart from '../components/Chart'

const Background = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
    >
      <LinearGradient id="fill" vertical={false}>
        <stop stopColor="#a943e4" offset="0%" />
        <stop stopColor="#f55989" offset="50%" />
        <stop stopColor="#ffaf84" offset="100%" />
      </LinearGradient>
      <rect width={width} height={height} fill="url(#fill)"/>
    </svg>
  )
}

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data: {}
    }
  }
  componentDidMount () {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
  }
  render () {
    const { screenWidth, screenHeight } = this.props
    const { data } = this.state
    return (
      <div className="app">
        <Background width={screenWidth} height={screenHeight}/>
        <div className="center">
          <div className="chart">
            <div className="title">
              Bitcoin Price
            </div>
            <div className="chart-container">
              <Chart data={data} />
            </div>
          </div>
          <p className="disclaimer">
            {data.disclaimer}
          </p>
        </div>
        <style jsx>{`
          .app, .center {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            justify-content: center;
            align-items: center;
            font-family: Arial;
            flex-direction: column;
          }
          .title {
            padding: 15px;
          }
          .chart-container {
            flex: 1;
            display: flex;
          }
          .chart {
            width: 600px;
            height: 400px;
            background-color: #27273f;
            border-radius: 8px;
            color: white;
            display: flex;
            flex-direction: column;
          }
          .disclaimer {
            color: white;
            opacity: 0.4;
            font-size: 11px;
          }
        `}</style>
      </div>
    )
  }
}

export default withScreenSize(App)
