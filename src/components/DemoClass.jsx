import React, { Component } from "react";

class DemoClass extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <div>
            <label style={styles.label} htmlFor="name">
              Name:
            </label>
            <input style={styles.input} type="text" id="name" />
          </div>
          <div>
            <label style={styles.label} htmlFor="">
              Email:
            </label>
            <input style={styles.input} type="text" id="email" />
          </div>
          <div>
            <label style={styles.label} htmlFor="">
              Password:
            </label>
            <input style={styles.input} type="text" id="password" />
          </div>
          <button onClick={this.props.mydata} style={styles.button}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default DemoClass;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  box: {
    backgroundColor: "#bdc3c7",
    height: "300px",
    width: "300px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px",
    color: "black",
  },

  input: {
    padding: "10px",
    margin: "5px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    "&:focus": {
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },
  },
  button: {
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    width: "50%",
    cursor: "pointer",
    boxSizing: "border-box",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    "&:focus": {
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },
  },
};
