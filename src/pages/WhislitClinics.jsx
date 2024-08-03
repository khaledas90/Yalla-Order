import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import NavClinics from "../components/NavClinics/NavClinics";
import "../components/ProfileDoctor/ProfileDoctor.css";
import { GetFavClinic } from "../store/favClinics/favSlice";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Loader from "../components/loader/Loader";

function WishlistClinics() {
  const dispatch = useDispatch();
  const { favClinic, loading, error } = useSelector((state) => state.favClinic);
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");

  useEffect(() => {
    dispatch(GetFavClinic());
  }, [dispatch]);

  return (
    <div className={`Clinics ${lang === "ar" ? "ar" : ""}`}>
      <Helmet>
        <title>{t("Favorites")}</title>
        <meta name="description" content="Discover the best Clinics around you." />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <div className="inputDiv">
          <h1 className="text-center TitlePage">{t("Favorites")}</h1>
        </div>
      </div>
      <div className="container py-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-center text-danger">{t("An error occurred while fetching data.")}</p>
        ) : favClinic.length === 0 ? (
          <p className="text-center">{t("No data available")}</p>
        ) : (
          <div className="row my-5">
            {favClinic.map((e) => (
              <div className="col-lg-3 col-sm-12 col-md-6" key={e.id}>
                <div className="card px-3 rounded-5 pb-3">
                  <div className="d-flex justify-content-between m-auto p-2 mt-3 mb-2">
                    Dr : {e.doctor_name || "-----"}
                  </div>
                  <h5 className="mb-2 mt-2 text-center">Clinic Name : {e.clinic_name || "-----"}</h5>
                  <h5 className="mb-2 mt-2 text-center">Clinic Address : {e.clinic_address || "-----"}</h5>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default WishlistClinics;
