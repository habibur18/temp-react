import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
      super(props)
      this.state = { seconds: 0 }
    }
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        })
      }, 1000)
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }
  render() {
    return (
      <div style={Styles.box}>
      <h1>Timer:{this.state.seconds}</h1>
      </div>
    )
  }
}
export default Timer;

const Styles={
    box:{
        height:'100px',
        width:'150px',
        backgroundColor:'#bdc3c7',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'20px auto',
    }
}