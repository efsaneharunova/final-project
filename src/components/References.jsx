import React, { useContext } from 'react';
import { LangContext } from "../context/LanguageContext";

const References = () => {
  const referanslar = [
    { id: 1, logo: "https://okmedia.az/img-yeni/resantlogo.png" },
    { id: 2, logo: "https://okmedia.az/img-yeni/medeksph.png" },
    { id: 3, logo: "https://okmedia.az/img-yeni/german-hosbital-referanslarlogo.png?=19" },
    { id: 4, logo: "https://okmedia.az/img-yeni/okmedia-milla-logo.png" },
    { id: 5, logo: "https://okmedia.az/img-yeni/okmedia-gilan-logo-2.png" },
    { id: 6, logo: "https://okmedia.az/img-yeni/okmedia-femina.png?=424" },
    { id: 7, logo: "https://okmedia.az/img-yeni/okmedia-casamia-logo.png" },
    { id: 8, logo: "https://okmedia.az/img-yeni/okmedia-mnx-logo.png" },
    { id: 9, logo: "https://okmedia.az/img-yeni/cbc-logo-okmedia.png" },
    { id: 10, logo: "https://okmedia.az/img-yeni/okmedia-btk-logo.png" },
    { id: 11, logo: "https://okmedia.az/img-yeni/yagmur.png" },
    { id: 12, logo: "https://okmedia.az/img-yeni/asggroup-okmedia-referanslar.png" },
    { id: 13, logo: "https://okmedia.az/img-yeni/advlogo.png" },
    { id: 14, logo: "https://okmedia.az/img-yeni/pribaltika-okmedia-logo-referanslar.png?=34" },
    { id: 15, logo: "https://okmedia.az/img-yeni/qmz-okmedia-referanslar.png" },
    { id: 16, logo: "https://okmedia.az/img-yeni/okmedia-azerbaycan-mikro.jpg" },
    { id: 17, logo: "https://okmedia.az/img-yeni/okmedia-bluemall.png?=4324" },
    { id: 18, logo: "https://okmedia.az/img-yeni/veka-okmedia-referanslar-logo.png" }
  ];

  const {lang}=useContext(LangContext);

  return (
    <div>
      <style>{`
        .references-wrapper {
          padding: 56px 0;
        }

        .references-title {
          padding: 0 65px;
          font-size: 56px;
          font-weight: bold;
          color: #212529;
          margin-bottom: 50px;
          text-align: left;
        }

        .references-logos {
          padding: 0 65px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 50px;
        }

        .reference-item {
          background: white;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 1px solid #ddd;
          background-color: #fafbfd;
        }

        /* hover overlay effect */
        .reference-item::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background-color: rgba(200,200,200,0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease;
          pointer-events: none; /* click-through */
        }

        .reference-item:hover::before {
          width: 300%;
          height: 300%;
        }

        .reference-item img {
          max-width: 100%;
          max-height: 80px;
          object-fit: contain;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .reference-item:hover img {
          transform: scale(0.90);
        }

        @media (max-width: 1200px) {
          .references-logos {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        @media (max-width: 970px) {
          .references-logos {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 950px) {
          .references-logos {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        @media (max-width: 768px) {
          .references-logos {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 470px) {
          .references-logos {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 321px) {
          .references-logos {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>

      <div className="references-wrapper">
        <div className="references-title">{lang === "AZ" ? "Referanslar" : "References"}</div>
        <div className="references-logos">
          {referanslar.map(ref => (
            <div key={ref.id} className="reference-item">
              <div style={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={ref.logo} alt="logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
