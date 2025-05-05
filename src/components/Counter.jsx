import React, { Component } from 'react'

  class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  decrement = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <div style={Styles.container}>
        <h1>{this.state.count}</h1>
        <div>
        <button style={Styles.button} onClick={this.increment}>+</button>
        <button style={Styles.button} onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}
export default Counter;


const Styles={
  container:{
    height:'150px',
    width:'150px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px',
    backgroundColor:'#bdc3c7',
    margin:'20px auto',

  },
  button:{
    backgroundColor:'#fff',
    fontSize:'16px',
    width:'40px',
    padding:'10px',
    border:'none',
    borderRadius:'5px',
    margin:'10px',
    cursor:'pointer',
  }
  
}