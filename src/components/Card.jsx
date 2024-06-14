import React from 'react';
import './Card.css';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Card = () => {
  return (
    <div>
      <section id="card">
<h2 id="title">TOP DESTINATIONS</h2>

<div className="card_container">
  <div className="card">
    <img src={img1} alt="Tripura sundari Temple" />
    <div className="card_content">
      <h3>Swayambhunath</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
        similique eum rem iste maxime provident dolore laboriosam quia quae!
        Eos quis optio recusandae!
      </p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
  <div className="card">
    <img src={img2} alt="Tripura sundari Temple" />
    <div className="card_content">
      <h3>Boudhanath</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
        similique eum rem iste maxime provident dolore laboriosam quia quae!
        Eos quis optio recusandae!
      </p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
  <div className="card">
    <img src={img3} alt="Tripura sundari Temple" />
    <div className="card_content">
      <h3>Dharahara</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
        similique eum rem iste maxime provident dolore laboriosam quia quae!
        Eos quis optio recusandae!
      </p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
  <div className="card">
    <img src={img4} alt="Tripura sundari Temple" />
    <div className="card_content">
      <h3>Pashupatinath</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
        similique eum rem iste maxime provident dolore laboriosam quia quae!
        Eos quis optio recusandae!
      </p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
</div>
</section>

    </div>
  )
}

export default Card
