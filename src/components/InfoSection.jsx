import React from 'react';

const InfoSection = () => {
    return (
        <>
            <style>
                {`
          .info-section {
            font-family: 'Arial', sans-serif;
            padding: 0 65px;
          }

          .info-top {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-bottom: 60px;
            background-color: #f7f7f5;
            border-radius: 15px;
            padding: 36px 48px;
          }

          .info-text {
            flex: 1;
          }

          .info-title {
            font-size: 18px;
            line-height: 1.5;
            font-weight: 500;
            color: #212529;
            margin: 0;
          }

          .info-stats {
            display: flex;
            justify-content: space-between;
            gap: 20px;
          }

          .stat-content {
            flex: 1;
          }

          .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #212529;
          }

          .stat-description {
            font-size: 18px;
            font-weight: 500;
            color: #040404;
          }

          @media (max-width: 768px) {
            .info-section {
              padding: 0 34px;
            }
            .info-top {
              flex-direction: column;
              align-items: flex-start;
            }
            .info-stats {
              flex-direction: column;
            }
            .stat-content {
              margin: 0px 0px 32px;
            }
            .stat-value {
              font-size: 20px;
            }
            .stat-description {
              font-size: 16px
            }
          }
        `}
            </style>

            <section className="info-section">
                <div className="info-container">
                    <div className="info-top">
                        <div className="info-icon">
                            <img src="https://okmedia.az/img-yeni/okmedia-section-3-img.png" alt="Exclamation Icon" />
                        </div>
                        <div className="info-text">
                            <h2 className="info-title">
                                With research results based on target audience behavior, user experience (UX), and data, your website will be 10X more effective. Our use of advanced market research and data analytics will take you to your goal in quick steps.
                            </h2>
                        </div>
                    </div>
                    <div className="info-stats">
                        <div className="stat-content">
                            <h3 className="stat-value">800% ROI</h3>
                            <p className="stat-description">Our clients get 9X their investment back on their website annually</p>
                        </div>
                        <div className="stat-content">
                            <h3 className="stat-value">1,200,000 monthly users</h3>
                            <p className="stat-description">Our sites serve a total of 1.2 million monthly visitors</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InfoSection;