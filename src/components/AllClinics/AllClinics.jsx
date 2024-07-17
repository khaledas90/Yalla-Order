import { Link } from "react-router-dom";
import "./AllClinics.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actClinics } from "../../store/Clinics/ClinicsSlice";

function AllClinics() {
  const dispatch = useDispatch();
  const { clinics } = useSelector((state) => state.clinics);

  useEffect(() => {
    dispatch(actClinics());
  }, [dispatch]);

  return (
    <div className="allClinics w-100 overflow-hidden">
      <div className="container">
        <h1>
          <span>All</span> Clinics
        </h1>
      </div>
      <div className="ClinicList">
        <div className="container">
          <div className="row">
            {clinics.map((e) => (
              <div key={e.id} className="col-12 col-md-6 col-lg-3 mb-5">
                <div className="Clinic">
                  <Link to={`/showAllClinics`}>
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
