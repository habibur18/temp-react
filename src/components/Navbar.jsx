import React from 'react'
const Navbar = () => {
  return (
    <nav style={styles.nav}>
        <div style={styles.logo}>
            My Logo
        </div>
        <ul style={styles.ul}>
            <li style={styles.li}><a href="" style={styles.a}>Home</a></li>
            <li style={styles.li}><a href="" style={styles.a}>About</a></li>
            <li style={styles.li}><a href="" style={styles.a}>Services</a></li>
            <li style={styles.li}><a href="" style={styles.a}>Contact</a></li>
        </ul>
    </nav>
  )
}
export default Navbar

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    marginLeft: '1rem',
  },
  a: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.2rem',
  }
};