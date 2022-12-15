import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossCount: 0,
    heads: 0,
    tails: 0,
    tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  toss = () => {
    const number = Math.ceil(Math.random() * 10)
    const tossResult = number % 2 === 0
    if (tossResult) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        tossImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
    this.setState(prevState => ({tossCount: prevState.tossCount + 1}))
    console.log(tossResult)
  }

  render() {
    const {tossCount, heads, tails, tossImg} = this.state
    return (
      <div className="container">
        <div className="toss-container">
          <h1 className="head-one">Coin toss game</h1>
          <p className="head-two">Heads (or) Tails</p>
          <img src={tossImg} className="coin-img" alt="toss result" />
          <button className="toss-btn" type="button" onClick={this.toss}>
            Toss Coin
          </button>
          <div className="toss-results">
            <p className="count">Total: {tossCount}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
