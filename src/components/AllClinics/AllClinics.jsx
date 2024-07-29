import { Link } from "react-router-dom";
import "./AllClinics.css";

import { useTranslation } from "react-i18next";

function AllClinics({ clinics }) {
  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");

  return (
    <div
      className={`allClinics w-100 overflow-hidden ${
        lang === "ar" ? "ar" : ""
      }`}
    >
      <div className="container">
        <h1>
          <span>{t(`All`)}</span> {t(`Clinics`)}
        </h1>
      </div>
      <div className="ClinicList">
        <div className="container">
          <div className="row">
            {clinics?.map((e) => (
              <div key={e.id} className="col-12 col-md-6 col-lg-3 mb-5">
                <div className="Clinic">
                  <Link to={`/ShowClinicsCategoryById/${e.id}`}>
                    <img src={e.logo} alt="Clinic" />
                    <div className="details">
                      <div>
                        <p>{e.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  );
}

export default AllClinics;
