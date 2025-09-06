import React, { useContext } from "react";
import "../styles/statistics.css"; 
import { useGetFeaturesQuery } from "../tools/api/features";
import { LangContext } from "../context/LanguageContext";

const StatisticsSection = ({ bgColor = '#fdeeee' }) => {
  const {lang}=useContext(LangContext)
  const { data: features, error, isLoading } = useGetFeaturesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading features</div>;

  return (
    <div className="stats-section" style={{ backgroundColor: bgColor }}>
      <div className="stats-container">
        <div className="stats-grid">
          {features.map((item) => (
            <div key={item.id} className="stats-item">
              <div className="stats-icon-container">
                <img
                  src={item.icon}
                  alt={lang==='AZ'? item.titleAz : item.titleEn}
                  className="stats-icon"
                />
              </div>
              <div className="stats-texts">
                <div className="stats-title">{lang==='AZ'? item.titleAz : item.titleEn}</div>
                <div className="stats-description">
                  {lang==='AZ'? item.descriptionAz : item.descriptionEn}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;