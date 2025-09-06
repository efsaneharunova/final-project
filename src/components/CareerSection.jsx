import React, { useContext } from "react";
import "../index.css";
import { LangContext } from "../context/LanguageContext";

const CareerSection = () => {
  const { lang } = useContext(LangContext);

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.smallTitle}>
            {lang === "AZ"
              ? "İnnovativ şirkətdə iş imkanları"
              : "Job opportunities in an innovative company"}
          </p>
          <h2 style={styles.title}>
            {lang === "AZ" ? "Karyera" : "Career"}
          </h2>
          <p style={styles.text}>
            {lang === "AZ"
              ? "«OKmedia» daim yeni talantlar kəşf etməyə, onlara öz bilik və bacarıqlarını digital məhsullar üzərində istifadə etmək üçün şərait yaratmağa hazırdır."
              : "«OKmedia» is always ready to discover new talents and create conditions for them to use their knowledge and skills on digital products."}
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
                ? "Hazırladığımız vebsaytlar MilliNet, Netty kimi IT müsabiqələrində dəfələrlə qalib olmuşdur"
                : "The websites we have developed have repeatedly won IT competitions such as MilliNet and Netty."}
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="https://okmedia.az/img-yeni/IMG_3677%20(1).jpg"
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
    margin: "85px 0 40px 0",
    width: "100%",
    padding: "0 65px",
  },
  container: {
    backgroundColor: "#f3f3f5",
    display: "flex",
    padding: "50px 141px",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "60px",
    flexWrap: "wrap",
    borderRadius: "20px",
  },
  left: {
    flex: "1 1 45%",
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
    textAlign: "left",
  },
  title: {
    fontSize: "52px",
    fontWeight: "700",
    color: "#212529",
    margin: "70px 0 20px ",
    lineHeight: "1.2",
    textAlign: "left",
  },
  text: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#212529",
    lineHeight: "1.5",
    margin: "0 0 30px",
    textAlign: "left",
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
    textAlign: "left",
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

export default CareerSection;
