import React, { useContext } from 'react';
import { useGetServiceQuery } from '../tools/api/service';
import { LangContext } from '../context/LanguageContext'; 

const ServicesSection = () => {
  const { data: service, error, isLoading } = useGetServiceQuery();
  const { lang } = useContext(LangContext); 
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading features</div>;

  return (
    <>
      <style>
        {`
          .services-section {
            padding: 0 65px;
            font-family: 'Arial', sans-serif;
            background-color: #ffffff;
          }

          .services-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 56px 0;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
          }

          .service-card {
            padding: 35px;
            border-radius: 35px;
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin: 30px 10px 30px 0;
          }

          .service-card:hover {
            transform: translateY(-10px);
          }

          /* ✅ Gradientlər */
          .service-card-yellow {
            background: linear-gradient(to bottom, #e9ffd4 0%, #ffded6 100%);
          }

          .service-card-purple {
            background: linear-gradient(to bottom, #dbd4ff 0%, #ffded6 100%);
          }

          .service-icon {
            width: 130px;
            height: 130px;
            position: absolute;
            top: -35px;
            right: 35px;
            opacity: 0.9;
          }

          .service-icon img {
            width: 100%;
            height: auto;
          }

          .service-content {
            margin-top: auto;
            margin-bottom: 20px;
          }

          .service-title {
            font-size: 24px;
            font-weight: 500;
            color: #000;
            line-height: 1.2;
          }

          .service-description {
            font-size: 15px;
            color: #191816;
            line-height: 1.2;
            margin: 0;
          }

          /* ✅ Responsive Design */
          @media (max-width: 1200px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
          }

          @media (max-width: 992px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .services-section {
              padding: 60px 0;
            }

            .services-container {
              padding: 0 15px;
            }

            .services-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .service-card {
              padding: 25px 20px;
            }

            .service-icon {
              width: 50px;
              height: 50px;
              top: 15px;
              right: 15px;
            }

            .service-title {
              font-size: 17px;
            }

            .service-description {
              font-size: 13px;
            }
          }

          @media (max-width: 576px) {
            .services-section {
              padding: 40px 0;
            }

            .service-card {
              padding: 20px;
            }

            .service-icon {
              width: 45px;
              height: 45px;
              top: 12px;
              right: 12px;
            }

            .service-title {
              font-size: 16px;
            }

            .service-description {
              font-size: 12px;
            }
          }
        `}
      </style>

      <section className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {service.map((item, index) => (
              <div 
                key={item.id} 
                className={`service-card ${index % 2 === 0 ? "service-card-yellow" : "service-card-purple"}`}
              >
                <div className="service-icon">
                  <img src={item.icon} alt={lang === 'AZ' ? item.titleAz : item.titleEn} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    {lang === 'AZ' ? item.titleAz : item.titleEn}
                  </h3>
                  <p className="service-description">
                    {lang === 'AZ' ? item.descriptionAz : item.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;