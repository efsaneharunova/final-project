import React, { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

const SupportInfo = () => {
  const { lang } = useContext(LangContext);

  const styles = {
    outerContainer: {
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      maxWidth: "1300px",
      margin: "20px 0",
    },
    headerContainer: {
      padding: "30px 0",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    headerText: {
      fontSize: "42px",
      fontWeight: "700",
      margin: "0",
      paddingBottom: "10px"
    },
    underline: {
      width: "80px",
      height: "2px",
      backgroundColor: "#212529",
      marginTop: "5px"
    },
    contentContainer: {
      padding: "40px 70px",
      backgroundColor: "#f7f7f5",
      borderRadius: "20px",
      color: "#212529",
    },
    paragraph: {
      lineHeight: "1.3",
      marginBottom: "20px",
      fontSize: "16px",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "20px",
      listStyle: "none",
    },
    listItem: {
      marginBottom: "10px",
      lineHeight: "1.4",
    },
  };

  const technicalServices = {
    headerText: {
      AZ: "Saytlara texniki destek",
      EN: "Technical support for websites",
    },
    problemsAZ: (
      <>
        <p style={styles.paragraph}>
          Çox iş adamı sayt hazırlanması zamanı şirketin tarixçesine, el
          işlerine, müşterilerinin reylerine fikir vermeden seçim edir. Bu ise
          öz növbesinde ekser hallarda eyni şirket üçün ikinci defa xerc
          çekilmesine getirib çıxarır. Meselen, aşağıdaki hallar bize müraciat
          zamanı en çox açarşılanan problemlerdir:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            — Saytı hazırlayan şexsin lozimi düzelişleri çox gec icra etmesi,
            operativliyin olmaması
          </li>
          <li style={styles.listItem}>
            — Saytı hazırlayan şexsle alaqenin kesilmesi
          </li>
          <li style={styles.listItem}>
            — Saytı hazırlayan şexs artıq başqa işde çalışdığı üçün kömek ede
            bilmemesi
          </li>
          <li style={styles.listItem}>
            — Saytı hazırlayan şexsin sayta elave oluncaaq funksiyanı
            integrasiya ede bilmemesi
          </li>
          <li style={styles.listItem}>
            — Saytı hazırlayan şexs dayişiklik üçün real olmayan ödeniş teleb
            etmesi
          </li>
        </ul>
      </>
    ),
    problemsEN: (
      <>
        <p style={styles.paragraph}>
          Many business people make choices when creating a website without
          considering the company's history, portfolio, or customer reviews.
          This often leads to the same company having to spend money a second
          time. For example, the following are the most common problems we
          encounter when approached:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            — The website developer implements necessary adjustments too slowly,
            lacking responsiveness
          </li>
          <li style={styles.listItem}>
            — Loss of contact with the website developer
          </li>
          <li style={styles.listItem}>
            — The website developer now works elsewhere and cannot provide
            assistance
          </li>
          <li style={styles.listItem}>
            — The website developer cannot integrate additional functionality to
            the site
          </li>
          <li style={styles.listItem}>
            — The website developer demands unrealistic payment for changes
          </li>
        </ul>
      </>
    ),
    solutionsAZ: (
      <>
        <p style={styles.paragraph}>
          Əgər yuxarıdaki problemlərdən birini yaşayırsınızsa və saytınıza
          hər-hansı xidmət göstərilməsi lazımdırsa, operativlikdə rəqib
          tanımayan şirkətimizə müraciət edərək bu problemləri ən sürətli
          şəkildə həll edə bilərsiniz:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            — Saytın açılış sürətinın optimizasiyası
          </li>
          <li style={styles.listItem}>
            — Saytda texniki qüsurların aradan qaldırılması
          </li>
          <li style={styles.listItem}>
            — Yeni funksiya və səhifələrin yazılması
          </li>
          <li style={styles.listItem}>— Dizaynın dəyişdirilməsi</li>
          <li style={styles.listItem}>
            — Saytın mobil versiyasının hazırlanması (bütün ekranlara
            adaptivlik)
          </li>
          <li style={styles.listItem}>
            — Onlayn ödəniş, SMS ödəniş sistemlərinin inteqrasiyası
          </li>
          <li style={styles.listItem}>
            — Hosting, domain məsələlərində yardım
          </li>
          <li style={styles.listItem}>
            — Saytın stabil işləməsinə 24 saat nəzarət
          </li>
          <li style={styles.listItem}>
            — Şirkət hesablarının açılması və işləməsinə nəzarət
          </li>
          <li style={styles.listItem}>— Digər texniki məsələlər</li>
        </ul>
      </>
    ),
    solutionsEN: (
      <>
        <p style={styles.paragraph}>
          If you are experiencing any of the above problems and need any service
          for your website, you can contact our company, which has no
          competitors in responsiveness, and solve these problems in the fastest
          way:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>— Website loading speed optimization</li>
          <li style={styles.listItem}>
            — Elimination of technical defects on the website
          </li>
          <li style={styles.listItem}>
            — Development of new functions and pages
          </li>
          <li style={styles.listItem}>— Design changes</li>
          <li style={styles.listItem}>
            — Development of mobile version of the site (adaptive to all
            screens)
          </li>
          <li style={styles.listItem}>
            — Integration of online payment, SMS payment systems
          </li>
          <li style={styles.listItem}>
            — Assistance with hosting, domain issues
          </li>
          <li style={styles.listItem}>
            — 24/7 monitoring of website stable operation
          </li>
          <li style={styles.listItem}>
            — Opening and monitoring company accounts
          </li>
          <li style={styles.listItem}>— Other technical issues</li>
        </ul>
      </>
    ),
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.headerContainer}>
        <h2 style={styles.header}>
          {lang === "AZ"
            ? technicalServices.headerText.AZ
            : technicalServices.headerText.EN}
        </h2>
        <div style={styles.underline}></div>
      </div>

      <div style={styles.contentContainer}>
        {lang === "AZ"
          ? technicalServices.problemsAZ
          : technicalServices.problemsEN}
        {lang === "AZ"
          ? technicalServices.solutionsAZ
          : technicalServices.solutionsEN}
      </div>
    </div>
  );
};

export default SupportInfo;
