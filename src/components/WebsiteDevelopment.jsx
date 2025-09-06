import React from 'react';
import '../styles/dev.css';

const WebsiteDevelopment = () => {
  const cardsData = [
    {
      id: 1,
      topText: 'discussion',
      title: 'Determine your business needs',
      description: 'We determine what you need at the meeting',
    },
    {
      id: 2,
      topText: 'explore',
      title: 'Competitor, customer behavior and market research',
      description: 'We follow the results of data-driven research.',
    },
    {
      id: 3,
      topText: 'design',
      title: 'Creating UI/UX design that is tailored to target audience',
      description: 'We create unique designs without ready-made templates',
    },
    {
      id: 4,
      topText: 'presentation',
      title: 'Design presentation',
      description: 'We are excited to introduce you to our new website',
    },
    {
      id: 5,
      topText: 'content',
      title: 'Posting content on the site',
      description: 'We place the information on the site ourselves',
    },
    {
      id: 6,
      topText: 'result',
      title: 'Website handover',
      description: 'We are launching a 1-year free technical support period',
    }
  ];

  return (
    <div className="website-development-section">
      <div className="section-header-container">
        <div className="section-header">
          <h1 className="section-title">Website Development</h1>
          <p className="section-description">
            The website development process, which may seem like a simple process, but involves a great deal of teamwork in the kitchen, consists of various stages. This makes your website costs a smart investment that can be effectively predicted in advance.
          </p>
        </div>
        <a href="#read-more" className="read-more-link">Read more </a>
      </div>
      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="development-card">
            <div className="card-icon">
              <img 
                src="https://okmedia.az/img-yeni/saytyigilmasi.png" 
                alt="Development icon"
                className="icon-image"
              />
            </div>
            <p className="card-top-text">{card.topText}</p>
            <h3 className="card-title">{card.title}</h3>
            <div className="card-description">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteDevelopment;