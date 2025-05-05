import React from 'react'

const Hero = () => {
  return (
    <div style={styles.container}>
        <div style={styles.box}>
            <h1 style={styles.h1}>Welcome to My Website</h1>
            <p style={styles.p}>Discover our services and solutions that help you grow</p>
            <button style={styles.button}>Get Started</button>
        </div>
    </div>
    
  )
}
export default Hero


const styles={
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#bdc3c7',
        margin:'20px 0'
    },
    box:{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    
    },
    h1:{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    p:{
        fontSize: '1.3rem',
        marginBottom: '1rem',
    },
    button:{
        padding: '1rem 2rem',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        
    }
}