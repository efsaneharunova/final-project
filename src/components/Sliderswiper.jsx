import React, { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetSliderQuery } from "../tools/api/slider";

export default function Sliderswiper() {
  const { data: slider = [], error, isLoading } = useGetSliderQuery();
  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading features</div>;
  if (!slider || slider.length === 0) {
    return <div>No slider data available</div>;
  } 

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slider.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slider.length) % slider.length);
  };

  const currentSlide = slider[activeIndex];

  return (
    <>
      <style>{`
        .slider-container {
          max-width: 900px;
          margin: 40px auto;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          background: #fff;
        }

        .slide {
          width: 100%;
        }

        .slide-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          border-radius: 12px 12px 0 0;
        }

        .controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 12px 0;
          background: #f9f9f9;
          border-top: 1px solid #eee;
        }

        .nav-button {
          background: rgba(0,0,0,0.6);
          border: none;
          color: white;
          padding: 8px;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .nav-button:hover {
          background: rgba(0,0,0,0.85);
        }

        .navigation-indicator {
          font-size: 15px;
          font-weight: 500;
          color: #333;
          min-width: 50px;
          text-align: center;
        }
      `}</style>

      <div className="slider-container">
        <div className="slide">
          <a href={currentSlide.url} target="_blank" rel="noopener noreferrer">
            <img
              src={currentSlide.img}
              alt={`Slide ${activeIndex + 1}`}
              className="slide-image"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x500/333/fff?text=Image+Not+Found";
              }}
            />
          </a>
        </div>

        {slider.length > 1 && (
          <div className="controls">
            <button className="nav-button prev-button" onClick={goPrev}>
              <ArrowBackIosNewOutlinedIcon />
            </button>
            <div className="navigation-indicator">
              {activeIndex + 1}/{slider.length}
            </div>
            <button className="nav-button next-button" onClick={goNext}>
              <ArrowForwardIosOutlinedIcon />
            </button>
          </div>
        )}
      </div>
    </>
  );
}