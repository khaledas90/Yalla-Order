import { Helmet } from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";

import Search from "../assets/search.svg";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actClinicsCategoryById } from "../store/ClinicsCategoryById/ClinicsCategoryByIdSlice";
import NavClinics from "../components/NavClinics/NavClinics";
import "../components/AllClinics/AllClinics.css";

function ShowClinicsByCategory() {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { ClinicsCategoryById } = useSelector(
    (state) => state.ClinicsCategoryById
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(actClinicsCategoryById(id, { signal }));
    return () => {
      controller.abort();
    };
  }, [dispatch, id]);

  // console.log(ClinicsCategoryById, "show");
  return (
    <>
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
          pageAddress={"Clinics"}
          placeholder={"Find your Location.."}
          btnText={"Search"}
          icon={Search}
        />
        <div className="allClinics w-100 overflow-hidden bg-white">
          <div className="container">
            <h1>
              <span>All</span> Clinics
            </h1>
          </div>
          <div className="ClinicList">
            <div className="container">
              <div className="row">
                {ClinicsCategoryById?.map((e) => (
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
                            <p>address: {e.address}</p>
                            <p>{e.descrption}</p>
                            <p> starttime : {e.starttime}</p>
                            <p> endtime: {e.endtime}</p>
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
      </div>
    </>
  );
}

export default ShowClinicsByCategory;
