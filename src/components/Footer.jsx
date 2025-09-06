import React, { useContext } from "react";
import { Link } from "react-router-dom";
import okmediaLogo from "../assets/images/okmedialogo.png";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "../styles/footer.css";
import { LangContext } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useContext(LangContext);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          <Link to="/">
            <img src={okmediaLogo} alt="okmedia logo" className="footer-logo" />
          </Link>
          <p className="slogan">
            {lang === "AZ"
              ? "Sizin veb sayt üçün ideyamız var!"
              : "We have an idea for your website!"}
          </p>
        </div>

        <div className="main-flex">
          <div className="columns">
            <div className="column">
              <h6>{lang === "AZ" ? "Şirkət" : "Company"}</h6>
              <ul>
                <li>
                  <Link to="/about">
                    {lang === "AZ" ? "Şirkət haqqında" : "About company"}
                  </Link>
                </li>
                <li>
                  <Link to="/reviews">
                    {lang === "AZ" ? "Müştərilərin fikri" : "Customer opinion"}
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    {lang === "AZ" ? "Layihələrimiz" : "Projects"}
                  </Link>
                </li>
                <li>
                  <Link to="/career">
                    {lang === "AZ" ? "Karyera" : "Career"}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <h6>{lang === "AZ" ? "Həllər" : "Solutions"}</h6>
              <ul>
                <li>
                  <Link to="/websitedev">
                    {lang === "AZ"
                      ? "Veb saytların hazırlanması"
                      : "Website Development"}
                  </Link>
                </li>
                <li>
                  <Link to="/webtechsupport">
                    {lang === "AZ"
                      ? "Veb saytlara texniki dəstək"
                      : "Website technical support"}
                  </Link>
                </li>
                <li>
                  <Link to="/corporateemail">
                    {lang === "AZ" ? "Korporativ mail" : "Corporate email"}
                  </Link>
                </li>
                <li>
                  <Link to="/paymentsystems">
                    {lang === "AZ"
                      ? "Online ödəmə sistemi inteqrasiyası"
                      : "Online payment system integration"}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <h6>{lang === "AZ" ? "Son işlərimiz" : "Our latest work"}</h6>
              <ul>
                <li>
                  <Link to="/milla">www.milla.az</Link>
                </li>
                <li>
                  <Link to="/pribaltika">www.pribaltika.az</Link>
                </li>
                <li>
                  <Link to="/germanhospital">www.germanhospital.az</Link>
                </li>
                <li>
                  <Link to="/all-jobs">
                    {lang === "AZ" ? "Bütün işlərə bax" : "See all jobs"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="social-legal">
            <div className="social-icons">
              <a
                href="https://facebook.com/okmedia.az"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper fb"
              >
                <span className="icon">
                  <FaFacebookF />
                </span>
                <span className="icon">
                  <FaFacebookF />
                </span>
              </a>
              <a
                href="https://www.youtube.com/@okmedia-az"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper yt"
              >
                <span className="icon">
                  <FaYoutube />
                </span>
                <span className="icon">
                  <FaYoutube />
                </span>
              </a>
              <a
                href="https://www.instagram.com/okmedia.az/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper ig"
              >
                <span className="icon">
                  <FaInstagram />
                </span>
                <span className="icon">
                  <FaInstagram />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/okmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper li"
              >
                <span className="icon">
                  <FaLinkedinIn />
                </span>
                <span className="icon">
                  <FaLinkedinIn />
                </span>
              </a>
              <a
                href="https://x.com/okmediaaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper tw"
              >
                <span className="icon">
                  <FaTwitter />
                </span>
                <span className="icon">
                  <FaTwitter />
                </span>
              </a>
            </div>

            <div className="legal">
              <p>VÖEN: 1904292861.</p>
              <p>
                {lang === "AZ"
                  ? "«OKMEDİA» Məhdud Məsuliyyətli Cəmiyyəti."
                  : "«OKMEDİA» Limited Liability Company"}
              </p>
              <p>
                {lang === "AZ"
                  ? "Veb saytın bütün hüquqları Azərbaycan Respublikasının müvafiq qanunvericiliyinə əsasən qorunur. Resursda qeyd olunan məlumatların, şirkətin yazılı icazəsi olmadan istifadə olunması qadağandır."
                  : "All rights of the website are protected by the relevant legislation of the Republic of Azerbaijan. The use of the information contained in the resource without the written permission of the company is prohibited."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
