import { Helmet } from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";

import Search from "../assets/search.svg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actAllClinicsDetails } from "../store/AllShowDetails/AllShowDetailsSlice";
import NavClinics from "../components/NavClinics/NavClinics";

function ShowAllClinics() {
  const { allShowClincis } = useSelector((state) => state.allShowClincis);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actAllClinicsDetails());
  }, [dispatch]);

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
                {allShowClincis.map((e) => (
                  <div key={e.id} className="col-12 col-md-6 col-lg-3 mb-5">
                    <div className="Clinic">
                      <Link to={`/CLinics/${e.id}`}>
                        <img src={e.logo} alt="Clinic" />
                        <div className="details">
                          <div>
                            <p>{e.name}</p>
                            <p>{e.descrption}</p>
                            <p> starttime</p>: <span>{e.starttime}</span>
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

export default ShowAllClinics;
