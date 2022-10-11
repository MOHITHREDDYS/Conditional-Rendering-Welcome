// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: 'Subscribe'}

  changeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === 'Subscribe') {
      this.setState({isSubscribed: 'Subscribed'})
    } else {
      this.setState({isSubscribed: 'Subscribe'})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.changeButton}>
          {isSubscribed}
        </button>
      </div>
    )
  }
}

export default Welcome
