import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

const QuoteSection = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="quote-section">
      <div className="quote-container">
        <div className="content-section">
          <h3 className="section-title">
            <img
              src="https://okmedia.az/img-yeni/hihand.png"
              alt="icon"
              className="title-icon"
            />
            {lang === "AZ"
              ? "Veb sayt qiymət təklifi üçün qısa sorğu göndərin və ideyanızı qısa izah edin"
              : "Send a quick request for a website price estimate, briefly explaining your idea"}
          </h3>
          <p className="stat-text">
            {lang === "AZ"
              ? "Son 30 gün ərzində 349 nəfər təklif aldı"
              : "349 people received quotes in the last 30 days"}
          </p>
        </div>
        
        <form className="quote-form">
          <div className="form-group floating-label">
            <textarea
              rows="3"
              placeholder=" "
              required
            ></textarea>
            <label>
              {lang === "AZ" ? "Hansı növ veb sayt istəyirsiniz?" : "What kind of website do you want?"}
            </label>
          </div>
          
          <div className="form-row">
            <div className="form-group floating-label">
              <input
                type="text"
                placeholder=" "
                required
              />
              <label>
                {lang === "AZ" ? "Adınız və soyadınız :" : "Your name and surname :"}
              </label>
            </div>
            
            <div className="form-group floating-label">
              <input
                type="text"
                placeholder=" "
                required
              />
              <label>
                {lang === "AZ" ? "Əlaqə nömrəniz :" : "Your contact number :"}
              </label>
            </div>
          </div>

          <div className="form-action">
            <div className="form-group floating-label company-input">
              <input
                type="text"
                placeholder=" "
                required
              />
              <label>
                {lang === "AZ" ? "Təmsil etdiyiniz şirkət :" : "The company you represent :"}
              </label>
            </div>
            <button type="submit" className="submit-btn">
              {lang === "AZ" ? "Təklif alın" : "Get a quote"}
            </button>
          </div>
        </form>
      </div>

      <style>
        {`
          .quote-section {
            background: linear-gradient(to bottom, #ffe066, #fede68);
            padding: 64px 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
          
          .quote-container {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            padding: 60px;
            max-width: 1200px;
            margin: 0 auto;
            width: 90%;
          }
          
          .content-section {
            margin-bottom: 40px;
          }
          
          .section-title {
            font-size: 32px;
            font-weight: bold;
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          
          .title-icon {
            width: 35px;
            height: 35px;
            margin-right: 10px;
            flex-shrink: 0;
          }
          
          .stat-text {
            font-size: 13px;
            color: #d0d0d0;
          }
          
          .floating-label {
            position: relative;
            width: 100%;
            margin-bottom: 1rem;
          }

          .floating-label input,
          .floating-label textarea {
            border: 1px solid #ddd;
            padding: 17px 18px;
            font-size: 15px;
            border-radius: 10px;
            width: 100%;
            background: #f7f7f5;
            font-weight: 500;
            box-sizing: border-box;
          }

          .floating-label label {
            position: absolute;
            top: 18px;
            left: 16px;
            color: #969595;
            font-size: 14px;
            transition: 0.2s ease all;
            pointer-events: none;
          }
          
          .floating-label input:focus + label,
          .floating-label input:not(:placeholder-shown) + label,
          .floating-label textarea:focus + label,
          .floating-label textarea:not(:placeholder-shown) + label {
            top: -8px;
            left: 12px;
            font-size: 12px;
            background: white;
            padding: 0 4px;
          }
          
          .floating-label input:focus,
          .floating-label textarea:focus {
            border-color: #aaa;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.1);
            outline: none;
            background: #fff;
          }
          
          .form-row {
            display: flex;
            gap: 15px;
            margin-bottom: 1rem;
          }
          
          .form-action {
            display: flex;
            gap: 15px;
          }
          
          .company-input {
            flex: 1;
          }
          
          .submit-btn {
            background-color: #23bc6a;
            color: white;
            padding: 0 20px;
            border-radius: 10px;
            font-weight: 600;
            border: none;
            transition: all 0.3s;
            white-space: nowrap;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 140px;
            flex: 1;
          }
          
          .submit-btn:hover {
            background-color: #1ea75a;
            transform: translateY(-2px);
          }
          
          @media (min-width: 1051px) {
            .quote-container {
              display: flex;
              gap: 60px;
            }
            
            .content-section {
              flex: 1;
              margin-bottom: 0;
            }
            
            .quote-form {
              flex: 1;
            }
            
            .stat-text {
              margin-top: 100px;
            }
          }
          
          @media (max-width: 1050px) and (min-width: 769px) {
            .quote-container {
              padding: 40px;
            }
            
            .content-section {
              text-align: center;
              margin-bottom: 30px;
            }
            
            .section-title {
              justify-content: center;
            }
            
            .form-action {
              display: flex;
              gap: 15px;
            }
            
            .company-input {
              flex: 1;
            }
            
            .submit-btn {
              width: auto;
              min-width: 140px;
            }
          }
          
          @media (max-width: 768px) {
            .quote-container {
              padding: 30px 20px;
            }
            
            .section-title {
              font-size: 24px;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            
            .title-icon {
              margin-right: 0;
              margin-bottom: 10px;
            }
            
            .form-row {
              flex-direction: column;
              gap: 1rem;
            }
            
            .form-action {
              flex-direction: column;
              gap: 1rem;
            }
            
            .submit-btn {
              width: 100%;
              margin-top: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default QuoteSection;
