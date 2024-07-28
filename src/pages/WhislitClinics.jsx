import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import NavClinics from "../components/NavClinics/NavClinics";
import "../components/ProfileDoctor/ProfileDoctor.css";
function WishlistClinics() {
  let { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className={`Clinics ${lang === "ar" ? "ar" : ""}`}>
      <Helmet>
        <title>{t(`Favorites`)}</title>
        <meta
          name="description"
          content="Discover the best Clinics around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <div className="inputDiv">
          <h1 className="text-center TitlePage">{t(`Favorites`)}</h1>
        </div>
      </div>
    </div>
  );
}

export default WishlistClinics;
