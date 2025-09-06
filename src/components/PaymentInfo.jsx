import React, { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

const PaymentInfo = () => {
  const { lang } = useContext(LangContext);

  const styles = {
    outerContainer: {
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "0 65px",
      boxSizing: "border-box"
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
      margin: "0 auto",
      maxWidth: "1000px",
      boxSizing: "border-box"
    },
    paragraph: {
      lineHeight: "1.3",
      marginBottom: "20px",
      fontSize: "16px",
      textAlign: "justify"
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

  const onlinePaymentData = {
    headerText: {
      AZ: "Ödəmə sistemlərinin inteqrasiyası",
      EN: "Payment systems integration"
    },
    contentAZ: (
      <>
        <p style={styles.paragraph}>
          Müasir internet dünyasında vebsaytlar şirkətlər və müştərilər arasındakı 
          ən güvənli əlaqə vasitəsi hesab olunur. Bu da müştərilərdə öz ödənişlərini 
          və ya pulla bağlı digər əməliyyatlarını da sayt üzərindən etmələri üçün 
          stimul yaradır.
        </p>
        
        <p style={styles.paragraph}>
          Sayt üzərindən edilən ödənişlər həm müştərilərin öz vaxtlarına qənaət 
          etmələrinə, həm də əməliyyatların daha da tez və güvənli şəkildə yerinə 
          yetirilməsinə səbəb olur. Vebsaytınızda online ödəniş sistemlərinin əsas 
          məqsədi həm şirkətiniz, həm də müştəriləriniz üçün əlçatan, rahat bir alət 
          yaratmaqdır.
        </p>

        <p style={styles.paragraph}>
          "Okmedia" olaraq verdiyimiz xidmətlərdən biri də şirkətiniz üçün tam güvənli 
          və rahat istifadəli Online ödəniş funksiyası yaratmaqdır. Təklif etdiyimiz 
          ödəniş sistemi inteqrasiyası xidməti sizə bu üstünlükləri qazandıracaq:
        </p>
        
        <ul style={styles.list}>
          <li style={styles.listItem}>— Saytınızla dünyanın hər yerindən ödəniş qəbul etmə imkanı</li>
          <li style={styles.listItem}>— Sürətli və istifadəçi dostu interfeys</li>
          <li style={styles.listItem}>— Anında avtomatlaşdırılmış email təsdiq bildirişi</li>
          <li style={styles.listItem}>— Banklar tərəfindən 3D şifrələmə və yüksək təhlükəsizlik</li>
          <li style={styles.listItem}>— Məlumatların sürətlı şəkildə toplanması və idarə panelinizə ötürülməsi</li>
        </ul>
      </>
    ),
    contentEN: (
      <>
        <p style={styles.paragraph}>
          In the modern internet world, websites are considered the most reliable 
          means of communication between companies and customers. This also creates 
          an incentive for customers to make their payments or other monetary 
          transactions through the website.
        </p>
        
        <p style={styles.paragraph}>
          Payments made through the website both allow customers to save their time 
          and enable transactions to be carried out faster and more securely. The 
          main purpose of online payment systems on your website is to create an 
          accessible, convenient tool for both your company and your customers.
        </p>

        <p style={styles.paragraph}>
          One of the services we provide as "Okmedia" is to create a fully secure 
          and user-friendly Online payment function for your company. The payment 
          system integration service we offer will provide you with these advantages:
        </p>
        
        <ul style={styles.list}>
          <li style={styles.listItem}>— Ability to accept payments from anywhere in the world through your website</li>
          <li style={styles.listItem}>— Fast and user-friendly interface</li>
          <li style={styles.listItem}>— Instant automated email confirmation notification</li>
          <li style={styles.listItem}>— 3D encryption and high security provided by banks</li>
          <li style={styles.listItem}>— Rapid collection of data and transfer to your admin panel</li>
        </ul>
      </>
    )
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.headerContainer}>
        <h2 style={styles.headerText}>
          {lang === "AZ" 
            ? onlinePaymentData.headerText.AZ 
            : onlinePaymentData.headerText.EN}
        </h2>
        <div style={styles.underline}></div>
      </div>

      <div style={styles.contentContainer}>
        {lang === "AZ" 
          ? onlinePaymentData.contentAZ 
          : onlinePaymentData.contentEN}
      </div>
    </div>
  );
};

export default PaymentInfo;