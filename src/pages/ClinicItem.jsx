import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import ClinicsItems from "../components/ClinicsItem/ClinicsItem";
import { useTranslation } from "react-i18next";
import NavClinics from "../components/NavClinics/NavClinics";
function ClinicItem() {
  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className={`Clinics ClinicsItems ${lang === "ar" ? "ar" : ""}`}>
      <Helmet>
        <title>Clinics</title>
        <meta
          name="description"
          content="Discover the best Clinic around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <SearchRestaurants
          pageAddress={t(`Clinics`)}
          Pagetext={t(`Select your area to see the clinics near you`)}
          placeholder={t(`Find your Location..`)}
          btnText={t(`View Doctors`)}
          icon={Search}
        />
      </div>
      <ClinicsItems />
    </div>
  );
}

export default ClinicItem;
