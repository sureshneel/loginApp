// Write your code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {status: false, btnText: 'Login', headText: 'Please Login'}

  getFunction = () => {
    const {status, btnText, headText} = this.state
    if (status === false) {
      this.setState(prevState => ({
        status: true,
        btnText: 'Logout',
        headText: 'Welcome User',
      }))
    } else {
      this.setState(prevState => ({
        status: false,
        btnText: 'Login',
        headText: 'Please Login',
      }))
    }
  }

  render() {
    const {status, btnText, headText} = this.state
    return (
      <div className="home-bg">
        <div className="dis-card">
          <h1 className="heading">{headText}</h1>
          <button type="button" className="btn" onClick={this.getFunction}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
