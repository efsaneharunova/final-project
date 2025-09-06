import React, { useContext } from "react";
import "../index.css";
import { LangContext } from "../context/LanguageContext";

const AboutCompany = () => {
  const { lang } = useContext(LangContext);

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.smallTitle}>
            {lang === "AZ" ? "Haqqında" : "About"}
          </p>
          <h2 style={styles.title}>
            {lang === "AZ" ? "Şirkət haqqında" : "About company"}
          </h2>
          <p style={styles.text}>
            {lang === "AZ"
              ? "Şirkətimiz 10 ildir ki, davamlı olaraq veb saytların hazırlanması və proqram həlləri ilə məşğuldur."
              : "Meet our company, which has been continuously focused on website development and programming solutions for 10 years."}
          </p>
        </div>

        <div style={styles.right}>
          <div style={styles.awardBox}>
            <img
              src="https://okmedia.az/img-yeni/okmedia-cup.gif"
              alt="Award"
              style={styles.icon}
            />
            <p style={styles.awardText}>
              {lang === "AZ"
                ? "Hazırladığımız saytlar dəfələrlə Hillside və Nelly kimi IT müsabiqələrinin qalibi olub."
                : "The websites we have developed have repeatedly won IT competitions such as Hillside and Nelly."}
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="https://okmedia.az/img-yeni/2-elaqe.jpeg"
              alt="Company Office"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#f3f3f5",
    borderRadius: "20px",
    padding: "50px 141px",
    margin: "85px 0 40px 0",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "60px",
    flexWrap: "wrap",
  },
  left: {
    flex: "1 1 45%",
    paddingTop: "10px",
  },
  right: {
    flex: "1 1 45%",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  smallTitle: {
    fontSize: "16px",
    color: "#212529",
    marginBottom: "10px",
    fontWeight: "500",
  },
  title: {
    fontSize: "52px",
    fontWeight: "700",
    color: "#212529",
    padding: "70px 0px 20px",
    lineHeight: "1.2",
  },
  text: {
    fontSize: "18px",
    color: "#212529",
    lineHeight: "1.5",
    marginBottom: "0",
    padding: "0 0 30px",
  },
  awardBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#c2c2c2",
    borderRadius: "40px",
    padding: "10px 20px",
    gap: "15px",
    fontSize: "14px",
    fontWeight: "500",
  },
  icon: {
    width: "45px",
    height: "45px",
    objectFit: "contain",
  },
  awardText: {
    margin: 0,
    color: "#c2c2c2",
    lineHeight: "1.3",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: "20px",
    height: "220px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.05)",
    transition: "transform 0.3s ease",
  },
};

export default AboutCompany;
