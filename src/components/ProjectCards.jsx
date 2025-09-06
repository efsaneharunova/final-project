import React, { useContext } from "react";
import projects from "../../public/data/projects.json";
import { LangContext } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { lang } = useContext(LangContext);

  return (
    <section className="projects-section">
      <style>{`
        .projects-section {
          padding: 0 65px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1300px;
          padding: 56px 0; 
        }
        .project-card {
          background: #f7f7f5;
          color: #212529;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          padding: 18px;
          align-items: flex-start;
        }
        .project-image {
          display: flex;
          flex-direction: column;
          position: relative;
          background: #fff;
        }
        .search-bar {
          width: 100%;
        }
        .main-img {
          width: 100%;
          height: 290px;
          object-fit: cover;
          border-radius: 0 0 8px 8px
        }
        .logo-img {
          max-width: 140px;
          max-height: 43px;
          margin: 15px 0;
          object-fit: contain;
        }
        .logo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #7362dd;
          color: #fff;
          border-radius: 8px;
          height: 43px;
          max-width: 140px;
          margin: 15px 0;
          padding: 4px 10px 3px;
        }
        .logo-placeholder h2 {
          font-size: 16px;
          font-weight: 600;
        }
        .project-content {
          padding: 0 0px 10px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .project-card p {
          font-size: 15px;
          flex-grow: 1;
          padding: 0 0 10px;
        }
        .project-url {
          display: inline-block;
          color: #767676; 
          text-decoration: none;
          font-weight: 500;
          margin-top: auto;
          word-break: break-all;
          align-self: flex-start; 
          position: relative;
          padding-bottom: 2px;
          transition: color 0.3s ease;
        }
        
        .project-url::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 1.5px;
          bottom: 0;
          left: 0;
          background-color: #767676;
          transition: all 0.5s ease;
          transform: scaleX(0);
          transform-origin: bottom left;
        }
        
        .project-url::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #eee;
        }
        
        .project-url:hover {
          color: #000;
        }
        
        .project-url:hover::before {
          background-color: #000;
          transform: scaleX(1);
        }
        
        .project-card:last-child .project-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .project-card:last-child .main-img {
          width: auto;
          max-width: 100%;
          height: 260px;
          object-fit: contain;
          margin: 0 auto;
        }
        
        /* 760px ve altı ekranlar için tek sütun */
        @media (max-width: 760px) {
          .projects-section {
            padding: 0 34px;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img
                className="search-bar"
                src={project.barImg}
                alt="search bar"
              />
              <img
                className="main-img"
                src={project.img}
                alt={project[`name${lang}`]}
              />
            </div>

            {project.logoImg ? (
              <img
                className="logo-img"
                src={project.logoImg}
                alt="logo"
              />
            ) : (
              <div className="logo-placeholder">
                <h2>{project[`name${lang}`]}</h2>
              </div>
            )}

            <div className="project-content">
              <p>{project[`content${lang}`]}</p>
              <a
                href={
                  project[`url${lang}`].startsWith("http")
                    ? project[`url${lang}`]
                    : `https://${project[`url${lang}`]}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-url"
              >
                {project[`url${lang}`].replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}