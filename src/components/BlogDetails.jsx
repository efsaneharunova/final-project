import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LangContext } from "../context/LanguageContext";
import blogData from "../../public/data/blog.json";
import blogContent from "../../public/data/blogContent.json";
import categories from "../../public/data/categories.json";
import "../styles/blogdetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { lang } = useContext(LangContext);

  const blogPost = blogData.find((post) => post.id === parseInt(id));
  const content = blogContent.find((item) => item.id === parseInt(id));

  if (!blogPost || !content) {
    return (
      <div className="not-found">
        <h2>
          {lang === "EN" ? "Blog post not found" : "Blog yazısı tapılmadı"}
        </h2>
        <Link to="/blog" className="back-link">
          {lang === "EN" ? "← Back to Blog" : "← Bloga qayıt"}
        </Link>
      </div>
    );
  }
  const categoryKey = blogPost.categoryEN.toLowerCase();
  const categoryInfo = categories[categoryKey];
  const categoryName = categoryInfo
    ? lang === "EN"
      ? categoryInfo.nameEN
      : categoryInfo.nameAZ
    : "";
  const relatedPosts = blogData.filter(
    (post) => post.categoryEN === blogPost.categoryEN && post.id !== blogPost.id
  ).slice(0, 3); 

  const renderContent = () => {
    const contentArray = lang === "EN" ? content.contentEN : content.contentAZ;

    return contentArray.map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return <h2 key={index}>{paragraph.replace("## ", "")}</h2>;
      } else if (paragraph.startsWith("### ")) {
        return <h3 key={index}>{paragraph.replace("### ", "")}</h3>;
      } else if (paragraph.startsWith("#### ")) {
        return <h4 key={index}>{paragraph.replace("#### ", "")}</h4>;
      } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <p key={index} className="conclusion">
            <strong>{paragraph.replace(/\*\*/g, "")}</strong>
          </p>
        );
      } else if (paragraph.startsWith("- ")) {
        return (
          <ul key={index} className="styled-list">
            {paragraph
              .split("\n")
              .map((item, i) =>
                item.startsWith("- ") ? (
                  <li key={i}>{item.replace("- ", "")}</li>
                ) : null
              )}
          </ul>
        );
      } else {
        return <p key={index}>{paragraph}</p>;
      }
    });
  };
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(window.location.href)}`
  };

  return (
    <div className="blog-details-container">
      <div className="breadcrumb">
        <Link to="/">{lang === "EN" ? "Home Page" : "Ana səhifə"}</Link> &gt;
        <Link to="/blog">Blog</Link> &gt;
        {categoryName && (
          <>
            <Link to={`/blog/category/${blogPost.categoryEN}`}>
              {categoryName}
            </Link> &gt;
          </>
        )}
        <span>{lang === "EN" ? blogPost.titleEN : blogPost.titleAZ}</span>
      </div>
      <article className="blog-article">
        <header className="article-header">
          <h1>{lang === "EN" ? blogPost.titleEN : blogPost.titleAZ}</h1>
          <div className="article-meta-flex">
            <div className="author-info">
              <img
                src="https://okmedia.az/uploads/fotos/foto_21.jpeg"
                alt="Author"
                className="author-avatar"
              />
              <div>
                <span className="author-name">Elşən Cəbrayılzadə</span>
                <span className="publish-date">
                  {lang === "EN" ? "March, 2023" : "Mart, 2023"}
                </span>
              </div>
            </div>

            <div className="share-icons">
              <span>{lang === "EN" ? "Share :" : "Paylaş :"}</span>
              <a
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.pinterest.com/okmediaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={shareUrls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </header>

        <div className="article-image">
          <img
            src={blogPost.img}
            alt={lang === "EN" ? blogPost.titleEN : blogPost.titleAZ}
          />
        </div>

        <div className="article-content">{renderContent()}</div>
        <div className="social-share">
          <h4>{lang === "EN" ? "Share on social networks" : "Sosial şəbəkələrdə paylaş"}</h4>
          <div className="share-buttons">
            <a
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn facebook"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn twitter"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn linkedin"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a
              href={shareUrls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn whatsapp"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </article>
      <aside className="blog-sidebar">
        <div className="sidebar-section">
          <h3>{lang === "EN" ? "Related Posts" : "Əlaqəli Yazılar"}</h3>
          <div className="recent-posts">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="recent-post-item"
                >
                  <div className="recent-post-content">
                    <h4>{lang === "EN" ? post.titleEN : post.titleAZ}</h4>
                  </div>
                  <img
                    src={post.img}
                    alt={lang === "EN" ? post.titleEN : post.titleAZ}
                  />
                </Link>
              ))
            ) : (
              <p>{lang === "EN" ? "No related posts" : "Əlaqəli yazı yoxdur"}</p>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetails;