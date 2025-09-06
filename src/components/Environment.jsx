import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LangContext } from "../context/LanguageContext";

const Environment = () => {
  const { lang } = useContext(LangContext);

  const data = {
    titleAZ: "İnnovativ mühit, xoşbəxt komanda",
    titleEN: "Innovative environment, happy team",

    leftTitleAZ: "Müsbət enerji ilə hazırlanan veb saytlar.",
    leftTitleEN: "Websites made with positive energy.",

    leftTextAZ:
      "Veb sayt – zəka və yaradıcılıq işidir. Onu hazırlayan komandanın iş mühitindəki həyat keyfiyyəti və rahatlıq, saytınızın keyfiyyətinə birbaşa təsir göstərən amildir.",
    leftTextEN:
      "A website is a work of intelligence and creativity. The quality of life and comfort in the work environment of the team that designed it is a factor that directly affects your website.",
  };

  const images = [
    { url: "https://okmedia.az/img-yeni/1.jpg", size: 140 },
    { url: "https://okmedia.az/img-yeni/2.jpg", size: 90 },
    { url: "https://okmedia.az/img-yeni/3.jpg", size: 140 },
    { url: "https://okmedia.az/img-yeni/4.jpg", size: 110 },
    { url: "https://okmedia.az/img-yeni/5.jpg", size: 90 },
    { url: "https://okmedia.az/img-yeni/6.jpg", size: 140 },
    { url: "https://okmedia.az/img-yeni/7.jpg?=19", size: 110 },
    { url: "https://okmedia.az/img-yeni/8.jpg", size: 140 },
  ];

  return (
    <div className="container-fluid py-4 px-3 px-md-4 px-lg-5">
      <style>
        {`
          .environment-title {
            font-size: 56px;
            font-weight: 700;
            color: #212529;
            text-align: left;
            margin: 40px 0;
          }
          .left-card {
            background: #e8e5f9;
            border-radius: 20px;
            padding: 40px;
            color: #212529;
            height: 100%;
          }
          .left-card h3 {
            font-size: 32px;
            margin-bottom: 30px;
          }
          .left-card p {
            font-size: 20px;
            line-height: 1.5;
          }
          .right-card {
            background: #e7edfb;
            border-radius: 20px;
            padding: 40px;
            height: 100%;
          }
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
          }
          .image-circle {
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
          }
          .image-circle img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          @media (max-width: 992px) {
            .environment-title {
              font-size: 36px;
              margin: 30px 0;
            }
            .left-card, .right-card {
              padding: 30px;
            }
            .left-card h3 {
              font-size: 28px;
            }
            .left-card p {
              font-size: 18px;
            }
          }
          @media (max-width: 741px) {
            .environment-title {
              font-size: 32px;
              margin: 25px 0;
            }
            .left-card, .right-card {
              padding: 25px;
            }
            .left-card h3 {
              font-size: 24px;
              margin-bottom: 20px;
            }
            .left-card p {
              font-size: 16px;
            }
            .right-card .row > div {
              flex: 0 0 33.33%;
              max-width: 33.33%;
            }
            .image-circle {
              width: 130px !important;
              height: 130px !important;
            }
          }
          @media (max-width: 520px) {
            .right-card .row > div { 
              flex: 0 0 50%;
              max-width: 50%;
            }
            .image-circle {
              width: 135px !important;
              height: 135px !important;
            }
            .left-card, .right-card {
              padding: 20px;
              border-radius: 15px;
            }
          }
          @media (max-width: 390px) {
            .right-card .row > div {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }
        `}
      </style>

      <h2 className="environment-title">
        {lang === "AZ" ? data.titleAZ : data.titleEN}
      </h2>

      <div className="row g-4">
        <div className="col-lg-5 order-2 order-lg-0">
          <div className="left-card">
            <h3>{lang === "AZ" ? data.leftTitleAZ : data.leftTitleEN}</h3>
            <p>{lang === "AZ" ? data.leftTextAZ : data.leftTextEN}</p>
          </div>
        </div>

        <div className="col-lg-7 order-3 order-lg-1">
          <div className="right-card">
            <div className="row">
              {images.map((img, index) => (
                <div key={index} className="col-6 col-md-3 image-container">
                  <div
                    className="image-circle"
                    style={{
                      width: `${img.size}px`,
                      height: `${img.size}px`,
                    }}
                  >
                    <img src={img.url} alt={`environment-${index}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
