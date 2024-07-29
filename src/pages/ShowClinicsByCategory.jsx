import { Helmet } from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actClinicsCategoryById } from "../store/ClinicsCategoryById/ClinicsCategoryByIdSlice";
import NavClinics from "../components/NavClinics/NavClinics";
import "../components/AllClinics/AllClinics.css";
import { useTranslation } from "react-i18next";
import Loader from "../components/loader/Loader";

function ShowClinicsByCategory() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { ClinicsCategoryById } = useSelector(
    (state) => state.ClinicsCategoryById
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(actClinicsCategoryById(id, { signal })).then(() => {
      setLoading(false);
    });
    return () => {
      controller.abort();
    };
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>{t(`Clinics`)}</title>
        <meta
          name="description"
          content="Discover the best Clinic around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <SearchRestaurants
          pageAddress={t(`Clinics`)}
          placeholder={t(`Find your Location..`)}
          btnText={t(`Search`)}
          icon={Search}
        />
        <div
          className={`allClinics w-100 overflow-hidden bg-white ${lang === "ar" ? "ar" : ""
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
                {loading ? (
                  <Loader />
                ) : (
                  ClinicsCategoryById?.map((e) => (
                    <div key={e.id} className="col-12 col-md-6 col-lg-3 mb-5">
                      <div className="Clinic">
                        <Link
                          to={`/CLinics/${e.id}`}
                          className="text-decoration-none"
                        >
                          <img src={e.logo} alt="Clinic" />
                          <div className="details ">
                            <div>
                              <p>{e.name}</p>
                              <p>
                                {t(`address`)}: {e.address}
                              </p>
                              <p>{e.descrption}</p>
                              <p> starttime : {e.starttime}</p>
                              <p> endtime: {e.endtime}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="text-center"></div>
        </div>
      </div>
    </>
  );
}

export default ShowClinicsByCategory;
