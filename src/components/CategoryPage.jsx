import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../../public/data/blog.json";
import categories from "../../public/data/categories.json";
import { LangContext } from "../context/LanguageContext";
import "../styles/blog.css";

export default function CategoryPage() {
  const { lang } = useContext(LangContext);
  const { categoryName } = useParams(); 
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const categoryInfo = categories[categoryName.toLowerCase()];

  useEffect(() => {
    const blogs = blogData.filter(
      (blog) => blog.categoryEN.toLowerCase() === categoryName.toLowerCase()
    );
    setFilteredBlogs(blogs);
  }, [categoryName]);

  return (
    <div className="blog-section">
      <div className="blog-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">{lang === "EN" ? "Home Page" : "Ana səhifə"}</Link> &gt;
          <Link to="/blog">{lang === "EN" ? "Blog" : "Bloq"}</Link> &gt;
          <span>{categoryInfo ? (lang === "EN" ? categoryInfo.nameEN : categoryInfo.nameAZ) : categoryName}</span>
        </div>

        <h1 className="category-title">
          {categoryInfo
            ? lang === "AZ" 
              ? `${categoryInfo.nameAZ} yazıları` 
              : `${categoryInfo.nameEN} posts`
            : lang === "AZ" 
              ? `${categoryName} yazıları` 
              : `${categoryName} posts`}
        </h1>

        {filteredBlogs.length > 0 ? (
          <div className="blog-cards">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                className="blog-card"
                to={`/blog/${blog.id}`}
              >
                <div className="blog-image">
                  <img
                    className="blog-img"
                    src={blog.img}
                    alt={lang === "AZ" ? blog.titleAZ : blog.titleEN}
                  />
                </div>
                <div className="blog-title">
                  <h2>{lang === "AZ" ? blog.titleAZ : blog.titleEN}</h2>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>{lang === "AZ" ? "Bu kateqoriyada yazı yoxdur." : "No posts in this category."}</p>
        )}
      </div>
    </div>
  );
}
