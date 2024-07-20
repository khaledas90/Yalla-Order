import { useTranslation } from "react-i18next";
import creativity from "../../assets/creativity.svg";
import "./HowWorkHome.css";
function HowWorkHomeMedical() {



  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng")
  return (
    <div className={`work ${lang === "ar" ? "ar" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div>
              <img
                src={creativity}
                className="d-none d-lg-inline"
                alt="burger"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="details text-center text-lg-start">
              <h2 className="header">{t('How We Work')}</h2>
              <h3 className="subHeader subHeaderMedical">
                <span className="text">{t('We value')}</span>{t('our patients')}  <br />
                {t('and doctors')}
              </h3>
              <ul>
                <li>{t('Register or log in to our portal')}</li>
                <li>{t('Search your location')}</li>
                <li>{t('Find the clinic you want')}</li>
                <li>{t('Choose the appropriate doctor and appointment')}</li>
                <li>{t('Arrive on time and receive excellent medical care')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWorkHomeMedical;
