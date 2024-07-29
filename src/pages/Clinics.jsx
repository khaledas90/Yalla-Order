import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import AllClinics from "../components/AllClinics/AllClinics";
import NavClinics from "../components/NavClinics/NavClinics";
import { useTranslation } from "react-i18next";
import Loader from "../components/loader/Loader";
import axios from "axios";
function Clinics() {
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchClinics = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://insta-order-site.web-allsafeeg.com/api/category/clinic/list",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            lang: localStorage.getItem("i18nextLng"),
          },
        }
      );
      setClinics(response.data.data); // Assuming the data is nested under 'data' based on the context provided
      setError(null);
    } catch (error) {
      console.error("Error fetching clinics:", error);
      setError("Failed to fetch clinics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClinics();
  }, []);

  const handleSearchResults = (results) => {
    setClinics(results);
  };

  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className={`Clinics ${lang === "ar" ? "ar" : ""}`}>
      <Helmet>
        <title>{t(`Clinics`)}</title>
        <meta
          name="description"
          content="Discover the best Clinics around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <div className="inputDiv">
          <SearchRestaurants
            pageAddress={t(`Clinics`)}
            placeholder={t(`Find your Location..`)}
            btnText={t(`Search`)}
            icon={Search}
            onSearchResults={handleSearchResults}
            type={"clinic"}
          />
        </div>
      </div>

      <AllClinics
        clinics={clinics}
        loading={loading}
        error={error}
        setClinics={setClinics}
        setLoading={setLoading}
        setError={setError}
      />
    </div>
  );
}

export default Clinics;
