import React, { useState, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import portfolioData from "../../public/data/portfoliocards.json";
import { LangContext } from "../context/LanguageContext";

const PortfolioCards = () => {
  const { lang } = useContext(LangContext);
  const [visibleCount, setVisibleCount] = useState(10); // 

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, portfolioData.length)); 
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-grid">
        {portfolioData.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="portfolio-card">
            <div className="barImgContainer">
              <img
                src={item.barImg}
                alt="Bar"
                className="barImg"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div className="mainImgContainer">
              <img
                src={
                  item.img ||
                  "https://placehold.co/300x200?text=Image+Not+Found"
                }
                alt="Portfolio"
                className="mainImg"
              />
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  {lang === "AZ" ? "Veb sayta keçid" : "Link to Website"}
                  <FaEye className="linkIcon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < portfolioData.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="loadMoreBtn" onClick={handleLoadMore}>
            <BsThreeDotsVertical style={{ marginRight: "6px" }} />
            {lang === "AZ" ? "Daha çoxuna bax" : "See more"}
          </button>
        </div>
      )}
      <style>
        {`
          .portfolio-container {
            padding: 0 65px;
            font-family: Arial, sans-serif;
            background-color: transparent;
            min-height: 100vh;
          }

          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 1300px;
            padding: 56px 0;
          }

          @media (max-width: 761px) {
            .portfolio-grid {
              grid-template-columns: 1fr;
            }
          }

          .portfolio-card {
            background-color: #f7f7f5;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 18px;
          }

          .barImgContainer {
            background-color: #fff;
            display: flex;
            align-items: center;
          }

          .barImg {
            max-height: 25px;
            width: 100%;
          }

          .mainImgContainer {
            position: relative;
            flex: 1;
            background-color: #fff;
            display: flex;
          }

          .mainImg {
            width: 100%;
            height: 100%;
            max-height: 330px;
            object-fit: cover;
            object-position: top;
            display: block;
          }

          .portfolio-link {
            position: absolute;
            bottom: 24px;
            left: 35px;
            background-color: #00000085;
            color: #fff;
            border-radius: 10px;
            padding: 12px 24px;
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
          }

          .portfolio-link:hover {
            background-color: #212529;
          }

          .linkIcon {
            width: 16px;
            height: 16px;
          }

          .loadMoreBtn {
            color: #000;
            background-color: #fff;
            border: 1px solid #ddd;
            margin: 20px 0;
            padding: 17px 35px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          .loadMoreBtn:hover {
            background-color: #eff0f5;
          }
          
        `}
      </style>
    </div>
  );
};

export default PortfolioCards;
