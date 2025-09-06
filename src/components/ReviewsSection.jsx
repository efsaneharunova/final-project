import React, { useContext } from "react";
import reviewsData from "../../public/data/reviews.json"; 
import { LangContext } from "../context/LanguageContext"; 

const ReviewsSection = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="reviews-container">
      <div className="reviews-section">
        <div className="reviews-list">
          {reviewsData.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-left">
                <img
                  src={review.image}
                  alt={review.nameAZ}
                  className="review-img"
                />
                <h3 className="review-name">
                  {lang === "AZ" ? review.nameAZ : review.nameEN}
                </h3>
                <p className="review-title">
                  {lang === "AZ" ? review.titleAZ : review.titleEN}
                </p>
              </div>

              <div className="review-content">
                <p className="review-text">
                  {lang === "AZ" ? review.contentAZ : review.contentEN}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
        .reviews-container {
          padding: 0 65px;
          color: #212529;
        }
        .reviews-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 0;
        }
        .reviews-list {
          color: #212529;
        }
        .reviews-section h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 50px;
          font-weight: bold;
        }
        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .review-card {
          display: flex;
          align-items: center;
          color: #212529;
          background: #f7f8fa;
          border-radius: 16px;
          border: 1px solid #ddd;
          margin: 20px 0;
          padding: 20px 50px;
          gap: 24px;
          box-shadow: none;
          max-width: 900px;
        }
        .review-card:nth-child(odd) {
          margin-right: auto;
        }
        .review-card:nth-child(even) {
          margin-left: auto;
        }
        .review-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 200px;
          flex-shrink: 0;
          text-align: center;
        }
        .review-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 12px;
        }
        .review-name {
          font-size: 18px;
          font-weight: bold;
          margin: 0;
        }
        .review-title {
          font-size: 14px;
          margin-top: 4px;
        }
        .review-content {
          flex: 1;
        }
        .review-text {
          font-size: 15px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .review-card {
            flex-direction: column;
            text-align: center;
            margin: 0 auto !important;
          }
          .review-left {
            width: auto;
          }
          .review-content {
            margin-top: 16px;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default ReviewsSection;
