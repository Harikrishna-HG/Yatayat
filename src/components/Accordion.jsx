import React from 'react'
import './Accordion.css'

const Accordion = () => {
  return (
    <div>
        <section id="accordion">
      <h2 className="title">FAQs</h2>
      <div className="qn_answer">
      <div className="faq">
        <div className="question">
          <h3>What is Transportation ?</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="white"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis
            quasi fuga?
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3>Do I Need To Register To Use Transportation ?</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="white"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis
            quasi fuga?
          </p>
        </div>
      </div>

      <div className="faq">
        <div className="question">
          <h3>How Will I Get Confirmation That My Ticket Purchased ?</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="white"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis
            quasi fuga?
          </p>
        </div>
      </div>


      <div className="faq">
        <div className="question">
          <h3>How Can I Make Payments ?</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="white"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis
            quasi fuga?
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3>What Details Do I Need To Give At The Time Of Booking/Buying? ?</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="white"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis
            quasi fuga?
          </p>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Accordion
