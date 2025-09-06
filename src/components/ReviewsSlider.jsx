import React, { useState, useEffect, useRef, useContext } from 'react';
import '../styles/reviews.css';
import { LangContext } from '../context/LanguageContext';

const ReviewsSlider = () => {
  const { lang } = useContext(LangContext); 
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const slideWidthRef = useRef(0);

  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/data/reviews.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setReviews(data.reviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!reviews.length) return;

    const wrapper = wrapperRef.current;
    const slides = wrapper.querySelectorAll('.swiper-slide');

    if (wrapper.querySelectorAll('.swiper-slide').length <= reviews.length) {
      const cloneSlides = Array.from(slides).map(slide => slide.cloneNode(true));
      cloneSlides.forEach(slide => wrapper.appendChild(slide));
    }

    const slide = slides[0];
    if (slide) {
      const slideStyle = getComputedStyle(slide);
      const gap = parseInt(slideStyle.marginRight) || 0;
      slideWidthRef.current = slide.offsetWidth + gap;
    }
  }, [reviews]);

  const handleNext = () => {
    const container = containerRef.current;
    const slideWidth = slideWidthRef.current;
    container.scrollBy({ left: slideWidth, behavior: "smooth" });
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    const container = containerRef.current;
    const slideWidth = slideWidthRef.current;
    container.scrollBy({ left: -slideWidth, behavior: "smooth" });
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? reviews.length - 1 : prev - 1
    );
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const slideWidth = slideWidthRef.current;
    if (!container || !slideWidth) return;

    const index = Math.round(container.scrollLeft / slideWidth) % reviews.length;
    setCurrentSlide(index);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; 
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  if (loading) return <div className="reviews-slider">{lang === 'AZ' ? 'Rəylər yüklənir...' : 'Loading reviews...'}</div>;
  if (error) return <div className="reviews-slider">{lang === 'AZ' ? `Xəta: ${error}` : `Error: ${error}`}</div>;

  return (
    <div className="reviews-slider">
      <h2 className="slider-title">{lang === 'AZ' ? 'Müştərilərimizin fikirləri' : 'Customer Reviews'}</h2>

      <div
        className="swiper-container"
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="swiper-wrapper" ref={wrapperRef}>
          {reviews.map((review) => (
            <div key={review.id} className="swiper-slide">
              <div className="review-card">
                <div className="review-header">
                  <img
                    src={review.image}
                    alt={lang === 'AZ' ? review.nameAZ : review.nameEN}
                    className="review-avatar"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="review-name">{lang === 'AZ' ? review.nameAZ : review.nameEN}</h3>
                    <p className="review-title">{lang === 'AZ' ? review.titleAZ : review.titleEN}</p>
                  </div>
                </div>
                <div className="review-divider"></div>
                <p className="review-content">{lang === 'AZ' ? review.contentAZ : review.contentEN}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-nav">
        <button className="slider-button swiper-button-prev" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="slide-counter">
          {currentSlide + 1}/{reviews.length}
        </div>

        <button className="slider-button swiper-button-next" onClick={handleNext}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewsSlider;
