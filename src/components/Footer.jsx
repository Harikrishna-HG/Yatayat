import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
          <div id="footer_section">
            <div className="row">
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">our services</a></li>
                  <li><a href="#">privacy</a></li>
                  <li><a href="#">Future plans</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Reservations</a></li>
                  <li><a href="#">Contact detail</a></li>
                  <li><a href="#">Payment Option</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>online ticket</h4>
                <ul>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Discount</a></li>
                  <li><a href="#">Available seats</a></li>
                  <li><a href="#">Refund</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
