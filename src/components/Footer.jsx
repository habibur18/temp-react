import React from 'react'



const Footer = () => {


  return (
    <footer style={styles.footerStyle}>
      <div style={styles.containerStyle}>
        <div style={styles.sectionStyle}>
          <h3 style={styles.headingStyle}>About Us</h3>
          <p style={styles.textStyle}>We provide quality products with exceptional service.</p>
        </div>

        <div style={styles.sectionStyle}>
          <h3 style={styles.headingStyle}>Contact Us</h3>
          <p style={styles.textStyle}>Email: info@example.com</p>
          <p style={styles.textStyle}>Phone: +1 (555) 123-4567</p>
        </div>

        <div style={styles.sectionStyle}>
          <h3 style={styles.headingStyle}>Follow Us</h3>
          <ul style={styles.socialMediaStyle}>
            <li style={styles.socialMediaItemStyle}><a href="#" style={styles.linkStyle}>Facebook</a></li>
            <li style={styles.socialMediaItemStyle}><a href="#" style={styles.linkStyle}>Twitter</a></li>
            <li style={styles.socialMediaItemStyle}><a href="#" style={styles.linkStyle}>Instagram</a></li>
          </ul>
        </div>
      </div>

      <div style={styles.footerBottomStyle}>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;

 const styles={
   footerStyle : {
    backgroundColor: '#f2f2f2',
    padding: '20px',
  },

   containerStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    textAlign: 'center',
  },

 sectionStyle : {
    margin: '10px 0',
  },

   headingStyle :{
    fontSize: '18px',
    marginBottom: '10px',
  },

 textStyle : {
    margin: '0',
    fontSize: '14px',
  },

   socialMediaStyle :{
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },

   socialMediaItemStyle :{
    display: 'inline',
    margin: '0 5px',
  },

   linkStyle : {
    color: '#333',
    textDecoration: 'none',
  },

   footerBottomStyle : {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '12px',
  }
}