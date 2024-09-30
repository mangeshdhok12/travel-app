import React from 'react';
import './CustomerOpinions.css';
import kamal from '../../assets/kamal.jpeg'

const CustomerOpinions = () => {
  const testimonials = [
    {
      text: 'BASS TRAVELS is definitely a professional travel agency from my personal experience. Flexible, polite and safety-conscious drivers are rare to find nowadays! My experience with them was comfortable and I recommend them!',
      author: 'Kamal Raj - 17S Tempo Traveler',
      image: kamal,
    },
   
  ];

  return (
    <div className="customer-opinions">
      <h2>Customer Opinions</h2>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <div className="testimonial-text">
            <span className="quote-mark">“</span>
            <p>{testimonial.text}</p>
            <span className="quote-mark end-quote">”</span>
          </div>
          <div className="author-info">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="author-img"
            />
            <p>{testimonial.author}</p>
          </div>
        </div>
      ))}
      <div className="indicator">
        <span className="active-dot">●</span> <span>○</span>
      </div>
    </div>
  );
};

export default CustomerOpinions;
