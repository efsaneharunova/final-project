import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import blogData from "../../public/data/blog.json";
import { LangContext } from "../context/LanguageContext";
import "../styles/blog.css";

export default function BlogSection() {
  const { lang } = useContext(LangContext);
  const [currentPage, setCurrentPage] = useState(1);
  const blogContainerRef = useRef(null);
  const navigate = useNavigate(); 
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);
  
  const scrollToTop = () => {
    if (blogContainerRef.current) {
      blogContainerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setTimeout(scrollToTop, 100);
    }
  };

  const handleCardClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };
  
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 4;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= 2) {
        endPage = 3;
      }
      
      if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
      }
      
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  return (
    <div className="blog-section" ref={blogContainerRef}>
      <div className="blog-container">
        <div className="blog-cards">
          {currentItems.map(blog => (
            <Link 
              key={blog.id} 
              className="blog-card"
              to={`/blog/${blog.id}`} 
            >
              <div className="blog-image">
                <img
                  className="blog-img"
                  src={blog.img}
                  alt={lang === 'AZ' ? blog.titleAZ : blog.titleEN}
                />
              </div>

              <div className="blog-title">
                <h2>{lang === 'AZ' ? blog.titleAZ : blog.titleEN}</h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="pagination">
          <button 
            className="page-btn" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="ellipsis">...</span>
            ) : (
              <button
                key={page}
                className={`page-number ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          ))}
          
          <button 
            className="page-btn" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}