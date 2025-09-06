import React, { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

const Section = () => {
  const { lang } = useContext(LangContext);

  const sectionData = {
    titleAZ: "Veb saytınızı heç kimə ehtiyac duymadan özünüz idarə edin",
    titleEN: "Manage your website yourself without needing anyone else",

    description1AZ: {
      icon: "https://248006.selcdn.ru/LandGen/blocks/mentor/icon-teacher.png",
      text:
        "Sadə idarəetmə panelimiz sayəsində veb saytınızı idarə etmək üçün texniki biliklərə ehtiyac yoxdur. İşçinizə 15 dəqiqəlik təlimlə bu prosesi öyrədirik."
    },
    description1EN: {
      icon: "https://248006.selcdn.ru/LandGen/blocks/mentor/icon-teacher.png",
      text:
        "Thanks to our easy-to-use control panel, you don't need any technical knowledge to manage your website. We teach your employee the procedure in a short 15-minute training session."
    },

    description2AZ: {
      icon: "https://okmedia.az/img-yeni/okmediawp-image.png",
      text:
        "Əgər saytın idarə olunmasında hər hansı çətinliklə qarşılaşsanız, ani mesajlaşma proqramları vasitəsilə operativ texniki dəstək ala və prosesi qaldığınız yerdən davam etdirə bilərsiniz."
    },
    description2EN: {
      icon: "https://okmedia.az/img-yeni/okmediawp-image.png",
      text:
        "If you experience any difficulties with website management, you can receive prompt technical support via instant messaging applications and continue the management process from where you left off."
    },

    chatImage: "https://okmedia.az/img-yeni/okmedia-wp-2.png?=19",

    footerAZ: "Üçüncü tərəf şirkətlərə və şəxslərə olan asılılığınızı minimuma endiririk",
    footerEN: "We minimize your dependence on third-party companies and individuals"
  };

  return (
    <div className="main-container">
      <style>
        {`
          .main-container {
              background: #f7f7f5;
              padding: 80px;
              font-family: Arial;
              margin: 0px 44px;
              border-radius: 12px;
          }
          .contentWrapper {
              max-width: 1280px;
              margin: 0 auto;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              gap: 40px;
              flex-wrap: wrap;
          }
          .leftContent {
              flex: 1 1 50%;
              min-width: 300px;
          }
          .contentWrapper h2 {
              font-size: 52px;
              margin: 0px 0px 40px;
              color: #212529;
              line-height: 1.3;
          }
          .descriptionBox {
              display: flex;
              gap: 28px;
          }
          .descriptionBox > div {
              display: flex;
              flex-direction: column;
              gap: 10px;
          }
          .icon-container {
              background: #fff;
              width: 60px;
              height: 60px;
              border-radius: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          .descriptionBox p {
              font-size: 16px;
              line-height: 1.6;
              margin: 0;
          }
          .rightBox {
              flex: 1 1 45%;
              text-align: center;
          }
          .rightBox img {
              width: 100%;
              border-radius: 12px;
          }
          .rightBox p {
              font-size: 16px;
              margin: 0px 44px;
              padding: 20px 0px 0px;
          }
          @media (max-width: 1009px) and (min-width: 551px) {
              .contentWrapper {
                  flex-direction: column;
                  align-items: flex-start;
              }
              .descriptionBox {
                  flex-direction: row;
                  justify-content: space-between;
                  gap: 28px;
                  width: 100%;
              }
              .descriptionBox > div {
                  flex: 1; 
                  min-width: 0;
              }
              .rightBox {
                  width: 100%;
                  text-align: center;
                  margin-top: 30px;
              }
          }
          @media (max-width: 550px) {
              .contentWrapper {
                  flex-direction: column;
              }
              .leftContent {
                  flex: none;
                  width: 100%;
                  min-width: 0;
              }
              .descriptionBox {
                  flex-direction: column;
                  gap: 30px;
              }
              .descriptionBox > div {
                  flex: none;
                  min-width: 0;
              }
              .rightBox {
                  width: 100%;
                  text-align: center;
                  margin-top: 20px;
              }
              .main-container {
                  padding: 40px 20px;
                  margin: 0;
              }
          }
        `}
      </style>

      <div className="contentWrapper">
        <div className="leftContent">
          <h2>{lang === "AZ" ? sectionData.titleAZ : sectionData.titleEN}</h2>

          <div className="descriptionBox">
            <div>
              <div className="icon-container">
                <img
                  src={sectionData.description1EN.icon}
                  alt="icon1"
                  width={40}
                  height={40}
                />
              </div>
              <p>{lang === "AZ" ? sectionData.description1AZ.text : sectionData.description1EN.text}</p>
            </div>

            <div>
              <div className="icon-container">
                <img
                  src={sectionData.description2EN.icon}
                  alt="icon2"
                  width={40}
                  height={40}
                />
              </div>
              <p>{lang === "AZ" ? sectionData.description2AZ.text : sectionData.description2EN.text}</p>
            </div>
          </div>
        </div>

        <div className="rightBox">
          <img src={sectionData.chatImage} alt="chat" />
          <p>{lang === "AZ" ? sectionData.footerAZ : sectionData.footerEN}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
