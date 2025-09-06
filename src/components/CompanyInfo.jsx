import React, { useContext } from "react";
import { LangContext } from "../context/LanguageContext"; 

const CompanyInfo = () => {
  const { lang } = useContext(LangContext);

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      maxWidth: "1300px",
      padding: "70px",
      color: "#212529",
      backgroundColor: "#f7f7f5",
      borderRadius: "20px"
    },
    paragraph: {
      lineHeight: "1.3",
      marginBottom: "20px",
      fontSize: "16px",
    },
    awardsSection: {
      padding: "0 0 20px"
    },
    yearHeader: {
      fontSize: "16px",
      margin: "15px 0"
    },
    projectCard: {
      display: "flex",
      gap: "10px",
    }
  };

  const companyInfo = {
    descriptionAZ: (
      <>
        <p style={styles.paragraph}>
          'Okmedia' şirkəti 2014-cü ildən fəaliyyət göstərir. Hal-hazırda
          ölkənin ən böyük müştəri portfelinə sahib şirkətlərdən biri kimi,
          300-dən çox hüquqi şəxs və fərdi sahibkara xidmət göstəririk.
          Portfelin əksəriyyəti təkrar müştərilərimizdən ibarətdir ki, bu da
          göstərdiyimiz xidmətin keyfiyyətinin dəyərini nümayiş etdirir.
        </p>
        <p style={styles.paragraph}>
          İnnovativ həllərin davamlı tətbiqi, dəqiq bazar araşdırması nəticələri
          və bazardakı ən son texnologiyaların istifadəsi gözəl əl işlərinin
          meydana çıxmasına səbəb olur və müştərilərimizin gözləntilərini aşır.
        </p>
        <p style={styles.paragraph}>
          Veb sayt yaratmaq məqsədiniz satışları artırmaq və ya korporativ
          imicinizi gücləndirmək olsun, əvvəlcədən araşdırılmış bazar nəticələri
          və data analizindən istifadə etməyimiz sizi sürətlə məqsədinizə
          çatdıracaq.
        </p>
      </>
    ),
    descriptionEN: (
      <>
        <p style={styles.paragraph}>
          'Okmedia' company has been operating since 2014. Currently, as one of
          the companies with the largest client portfolio in the country, we
          provide services to more than 300 legal entities and individual
          entrepreneurs. The majority of the portfolio is made up of our repeat
          customers, which demonstrates the value of the quality of service we
          provide.
        </p>
        <p style={styles.paragraph}>
          Our constant application of innovative solutions, accurate market
          research results and the latest technologies in the market leads to
          the emergence of beautiful handicrafts that exceed the expectations of
          our customers.
        </p>
        <p style={styles.paragraph}>
          Whether your reason for developing a website is to increase sales or
          strengthen your corporate image, our use of previously researched
          market results and data analytics will take you quickly to your goal.
        </p>
      </>
    ),
    awards: [
      {
        year: 2023,
        projects: [
          {
            nameAZ: "bravotravel.az",
            nameEN: "bravotravel.az",
            awardAZ: "Netty IT Mükafatı - Turizm, səyahət",
            awardEN: "Netty IT Award - Tourism, travel",
            placeAZ: "1-ci yer",
            placeEN: "1st place",
          },
          {
            nameAZ: "divedu.az",
            nameEN: "divedu.az",
            awardAZ:
              "MilliNet İnternet Mükafatı - İl üzrə rəqəmsal təhsil resursu",
            awardEN:
              "MilliNet Internet Award - Digital educational resource of the year",
            placeAZ: "2-ci yer",
            placeEN: "2nd place",
          },
        ],
      },
      {
        year: 2022,
        projects: [
          {
            nameAZ: "divedu.az",
            nameEN: "divedu.az",
            awardAZ: "Netty IT Mükafatı - Elm, təhsil və innovasiyalar",
            awardEN: "Netty IT Award - Science, education and innovations",
            placeAZ: "3-cü yer",
            placeEN: "3rd place",
          },
        ],
      },
      {
        year: 2021,
        projects: [
          {
            nameAZ: "lareine.az",
            nameEN: "lareine.az",
            awardAZ: "Netty IT Mükafatı - Sağlamlıq, gözəllik",
            awardEN: "Netty IT Award - Health, beauty",
            placeAZ: "3-cü yer",
            placeEN: "3rd place",
          },
        ],
      },
      {
        year: 2018,
        projects: [
          {
            nameAZ: "ulvimizoyev.com",
            nameEN: "ulvimizoyev.com",
            awardAZ: "MilliNet İnternet Mükafatı - Ailə, uşaq və sağlamlıq",
            awardEN: "MilliNet Internet Award - Family, children and health",
            placeAZ: "3-cü yer",
            placeEN: "3rd place",
          },
          {
            nameAZ: "sinir.az",
            nameEN: "sinir.az",
            awardAZ: "MilliNet İnternet Mükafatı - Bloqlar",
            awardEN: "MilliNet Internet Award - Blogs",
            placeAZ: "2-ci yer",
            placeEN: "2nd place",
          },
          {
            nameAZ: "dragazade.az",
            nameEN: "dragazade.az",
            awardAZ: "MilliNet İnternet Mükafatı - Bloqlar",
            awardEN: "MilliNet Internet Award - Blogs",
            placeAZ: "3-cü yer",
            placeEN: "3rd place",
          },
        ],
      },
      {
        year: 2017,
        projects: [
          {
            nameAZ: "dragazade.az",
            nameEN: "dragazade.az",
            awardAZ: "MilliNet İnternet Mükafatı - Bloqlar",
            awardEN: "MilliNet Internet Award - Blogs",
            placeAZ: "2-ci yer",
            placeEN: "2nd place",
          },
        ],
      },
      {
        year: 2015,
        projects: [
          {
            nameAZ: "vaginizm.az",
            nameEN: "vaginizm.az",
            awardAZ: "Netty IT Mükafatı - Şəxsi saytlar",
            awardEN: "Netty IT Award - Personal websites",
            placeAZ: "1-ci yer",
            placeEN: "1st place",
          },
          {
            nameAZ: "metas.az",
            nameEN: "metas.az",
            awardAZ: "MilliNet İnternet Mükafatı - Korporativ saytlar",
            awardEN: "MilliNet Internet Award - Corporate websites",
            placeAZ: "3-cü yer",
            placeEN: "3rd place",
          },
        ],
      },
    ],
  };

  return (
    <div style={styles.container}>
      {lang === "AZ" ? companyInfo.descriptionAZ : companyInfo.descriptionEN}

      <div style={styles.awardsSection}>
        <h3 className="">
          {lang === "AZ"
            ? "Müxtəlif müsabiqələrdə qalib olan bəzi layihələrimiz:"
            : "Some of our projects that won in various competitions:"}
        </h3>

        {companyInfo.awards.map((awardGroup, index) => (
          <div key={index}>
            <h3 style={styles.yearHeader}>{awardGroup.year}</h3>

            {awardGroup.projects.map((project, projectIndex) => (
              <div key={projectIndex} style={styles.projectCard}>
                <div style={styles.projectName}>{project[`name${lang}`]}</div>
                <div style={styles.awardInfo}>{project[`award${lang}`]}</div>
                <div style={styles.awardInfo}>{project[`place${lang}`]}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
