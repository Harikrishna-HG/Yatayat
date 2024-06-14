import React from 'react';
import './Home.css';
import bus from '../assets/bus.png'; // Assuming the image file is bus.png

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container">
          <div className="landing">
            <div className="content">
              <span>Online Booking</span>
              <h3>
                Be part <br />
                of the new <br />
                technologies
              </h3>
              <a href="#" className="btn">Book Now</a>
            </div>
            <div className="image">
              <img src={bus} alt="Bus" /> {/* Changed alt text to "Bus" */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
