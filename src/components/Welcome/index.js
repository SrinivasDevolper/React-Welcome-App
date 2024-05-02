import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isTrue: true}

  Subscribe = () => {
    this.setState({isTrue: false})
  }

  Subscribed = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {isTrue} = this.state
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isTrue ? (
          <button onClick={this.Subscribe}>Subscribe</button>
        ) : (
          <button onClick={this.Subscribed}>Subscribed</button>
        )}
      </div>
    )
  }
}

export default Welcome
