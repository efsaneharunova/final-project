import React, { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

const CareerInfo = () => {
  const { lang } = useContext(LangContext);

  const styles = {
    wrapper: {
        padding: "0 65px"
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 10px",
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#212529",
      backgroundColor: "#f7f7f5",
      borderRadius: "20px",
    },
    section: {
      padding: "70px",
    },
    subtitle: {
      fontSize: "16px",
      marginTop: "20px",
    },
    list: {
      listStyle: "none",
    },
  };

  const vacanciesData = {
    descriptionAZ: (
      <>
        <p>
          «OKmedia» daim yeni talentlar kəşf etməyə, onlara öz bilik və
          bacarıqlarını real biznes mühitində istifadə etmək üçün şərait
          yaratmağa maraqlıdır.
        </p>
        <p>
          – Biz öz xüsusi iş modelimizlə, əməkdaşlarımıza karyerasında sürətli
          böyümə və nailiyyətlər əldə etməyə maksimal şərait yaratmışıq. <br />
          – İş formamız yorucu olmayan, daim fərdi inkişaf etdirən, yeni
          biliklərə yiyələnməyə vadar edən və yeni imkanlara qapılar açan
          formadadır. <br />– Biz tez yorulanları, pessimist düşüncəli olanları,
          çox yemək yeyən və çox yatmağı xoşlayanları sevmirik :)
        </p>

        <div style={styles.subtitle}>Hal-hazırkı boş vakansiyalar:</div>
        <ul style={styles.list}>
          <li>–Satış üzrə menecer</li>
          <li>–Start-up layihələri ilə iş üzrə mütəxəssis</li>
          <li>–Biznesin inkişafı üzrə menecer</li>
        </ul>

        <div style={styles.subtitle}>Üstünlük verilir:</div>
        <ul style={styles.list}>
          <li>–Kreativ düşüncələrə sahib</li>
          <li>–Kitab oxumağı sevən</li>
          <li>–Korporativ satış sahəsində iş təcrübəsi olan</li>
          <li>–Rus dili bilən (Rusdilli müştərilərlə işləmək üçün)</li>
          <li>–Üstün dərəcədə internet istifadəçisi</li>
          <li>–Ünsiyyət qurma bacarığı olan</li>
        </ul>

        <div style={styles.subtitle}>Necə müraciət etməli:</div>
        <ul style={styles.list}>
          <li>
            –cv [a] okmedia.az e-mail ünvanına müvafiq vakansiyanın adını qeyd
            et;
          </li>
          <li>–Qoşmaya tərcümeyi-halını (CV) yüklə;</li>
          <li>
            –Mətn hissəsinə niyə məhz səni seçməli olduğumuza dair öz iddianı
            əlavə et
          </li>
        </ul>
      </>
    ),
    descriptionEN: (
      <>
        <p>
          «OKmedia» is always interested in discovering new talents and creating
          opportunities for them to apply their knowledge and skills in a real
          business environment.
        </p>
        <p>
          – With our special business model, we have created maximum
          opportunities for our employees to achieve rapid growth and success in
          their careers. <br />
          – Our working format is not exhausting; it constantly develops
          personal growth, encourages learning new knowledge, and opens doors to
          new opportunities. <br />– We do not like those who get tired quickly,
          think pessimistically, eat too much, and love sleeping too much :)
        </p>

        <div style={styles.subtitle}>Current vacancies:</div>
        <ul style={styles.list}>
          <li>–Sales Manager</li>
          <li>–Specialist for Start-up Projects</li>
          <li>–Business Development Manager</li>
        </ul>

        <div style={styles.subtitle}>Preferences:</div>
        <ul style={styles.list}>
          <li>–Creative thinker</li>
          <li>–Enjoys reading books</li>
          <li>–Experience in corporate sales</li>
          <li>–Knowledge of Russian (to work with Russian-speaking clients)</li>
          <li>–Advanced internet user</li>
          <li>–Strong communication skills</li>
        </ul>

        <div style={styles.subtitle}>How to apply:</div>
        <ul style={styles.list}>
          <li>
            –Send your CV to cv [a] okmedia.az with the relevant vacancy name;
          </li>
          <li>–Attach your resume (CV);</li>
          <li>
            –In the message section, add your own statement about why we should
            choose you
          </li>
        </ul>
      </>
    ),
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.section}>
          {lang === "AZ"
            ? vacanciesData.descriptionAZ
            : vacanciesData.descriptionEN}
        </div>
      </div>
    </div>
  );
};

export default CareerInfo;
