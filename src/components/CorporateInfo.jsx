import React, { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

const CorporateInfo = () => {
  const { lang } = useContext(LangContext);

  const styles = {
    outerContainer: {
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      maxWidth: "1300px",
      padding: "0 40px",
      margin: "0 auto"
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
      fontWeight: "bold",
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
      padding: "70px",
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
    subheader: {
      fontSize: "20px",
      fontWeight: "bold",
      margin: "25px 0 15px 0",
      color: "#2c3e50"
    }
  };

  const corporateEmailData = {
    headerText: {
      AZ: "Korporativ E-mail Xidməti",
      EN: "Corporate Email Service"
    },
    contentAZ: (
      <>
        <p style={styles.paragraph}>
          Internet mekanında korporativ kimliyinizin ən vacib faktorlarından biri 
          şirket domeninizdə durulmuş e-mail adresinizdir.
        </p>
        
        <p style={styles.paragraph}>
          Xüsusən də, əgər yeni yaranmış şirketsinizsə rəqabətdə üstünlük eldə 
          etməniz üçün öz şirket imicinizi yüksək səviyyədə göstərməlisiniz. 
          Şirket emailindən istifadə həm də, sizin öz işinizə olan hörmətin, 
          biznesinizə nə qədər ciddi yanaşmanızın göstəricisidir.
        </p>

        <div style={styles.subheader}>
          Korporativ mailin ən çox istifadə olunan formaları:
        </div>
        
        <ul style={styles.list}>
          <li style={styles.listItem}>— office@shirketiniz.az</li>
          <li style={styles.listItem}>— info@shirketiniz.az</li>
          <li style={styles.listItem}>— hr@shirketiniz.az</li>
          <li style={styles.listItem}>— director@shirketiniz.az</li>
          <li style={styles.listItem}>— adiniz.soyadiniz@shirketiniz.az</li>
        </ul>

        <p style={styles.paragraph}>
          Əgər sizin üçün də şirkətinizin korporativ kimliyi və şirkət ciddiyyəti 
          vacib amildirsə, mail.ru, gmail.com, hotmail.com, yahoo.com və s. əvəzinə, 
          öz şirkətinizə məxsus e-mail hesablarını seçməlisiniz.
        </p>

        <p style={styles.paragraph}>
          Xüsusən də yeni yaranmış şirkətlər üçün bu, çox mühüm məsələdir. Unutmayın 
          ki, təkliflərinizi və yazışmalarınızı korporativ mail ilə etməniz şirkətinizə 
          əlavə dəyər qazandırır.
        </p>

        <div style={styles.subheader}>
          Şirket mailinin bilmədiyiniz 6 üstünlüyü:
        </div>
        
        <ul style={styles.list}>
          <li style={styles.listItem}>— Biznesinizin ciddiyyətini və professionallığını artırır</li>
          <li style={styles.listItem}>— Müəssisənin bütün şöbələrinə gələn məktublara nəzarət sizdə olur</li>
          <li style={styles.listItem}>— İşçi işdən çıxarsa ona məxsus korporativ emaili silmək, yönləndirmək və tam nəzarət etmək mümkündür</li>
          <li style={styles.listItem}>— Avtomatik backup sistemi sayəsində maillərinizin ehtiyat nüsxəsi saxlanılır</li>
          <li style={styles.listItem}>— Səhvan və ya kiberhücum zamanı mail silinərsə geri qaytarmaq mümkündür</li>
          <li style={styles.listItem}>— Çox cüzi məbləğə başa gəlir</li>
        </ul>
      </>
    ),
    contentEN: (
      <>
        <p style={styles.paragraph}>
          In the digital space, one of the most important factors of your corporate 
          identity is the email address based on your company domain.
        </p>
        
        <p style={styles.paragraph}>
          Especially if you are a newly established company, you need to present 
          your corporate image at a high level to gain a competitive advantage. 
          Using a corporate email also demonstrates your respect for your own work 
          and how seriously you approach your business.
        </p>

        <div style={styles.subheader}>
          The most commonly used forms of corporate mail:
        </div>
        
        <ul style={styles.list}>
          <li style={styles.listItem}>— office@yourcompany.az</li>
          <li style={styles.listItem}>— info@yourcompany.az</li>
          <li style={styles.listItem}>— hr@yourcompany.az</li>
          <li style={styles.listItem}>— director@yourcompany.az</li>
          <li style={styles.listItem}>— yourname.surname@yourcompany.az</li>
        </ul>

        <p style={styles.paragraph}>
          If corporate identity and company seriousness are important factors for you, 
          you should choose email accounts specific to your company instead of mail.ru, 
          gmail.com, hotmail.com, yahoo.com, etc.
        </p>

        <p style={styles.paragraph}>
          This is a very important issue especially for newly established companies. 
          Remember that making your offers and correspondence with corporate mail adds 
          extra value to your company.
        </p>

        <div style={styles.subheader}>
          6 advantages of corporate mail you didn't know about:
        </div>
        
        <ul style={styles.list}>
          <li style={styles.listItem}>— Increases the seriousness and professionalism of your business</li>
          <li style={styles.listItem}>— You have control over emails coming to all departments of the institution</li>
          <li style={styles.listItem}>— If an employee leaves, it is possible to delete, redirect and fully control their corporate email</li>
          <li style={styles.listItem}>— Thanks to the automatic backup system, a backup copy of your emails is kept</li>
          <li style={styles.listItem}>— If mail is deleted during an error or cyber attack, it can be restored</li>
          <li style={styles.listItem}>— It comes at a very minimal cost</li>
        </ul>
      </>
    )
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.headerContainer}>
        <h2 style={styles.headerText}>
          {lang === "AZ" 
            ? corporateEmailData.headerText.AZ 
            : corporateEmailData.headerText.EN}
        </h2>
        <div style={styles.underline}></div>
      </div>

      <div style={styles.contentContainer}>
        {lang === "AZ" 
          ? corporateEmailData.contentAZ 
          : corporateEmailData.contentEN}
      </div>
    </div>
  );
};

export default CorporateInfo;