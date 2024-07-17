import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actClinicsDetails } from "../../store/ClinicsDetails/ClinicsDetailsSlice";
// Styles
import "./Doctors.css";

const Doctors = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { clinicDetails } = useSelector((state) => state.ClinicsDetails);
  console.log(id, clinicDetails);
  useEffect(() => {
    if (id) {
      dispatch(actClinicsDetails(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <div className="row my-5">
        {clinicDetails.map((e) => (
          <div key={e.id} className="col-lg-3 col-sm-12 col-md-6">
            <Link
              className="text-decoration-none"
              to={`/profileDoctor/${e.id}`}
            >
              <div className="card px-3 rounded-5 pb-3">
                <div className="d-flex justify-content-between mt-3 mb-2">
                  <div className="doctorRate d-flex flex-column gap-2">
                    {/* <img src={e.logo} className={`rateStyle`} alt="Rate" /> */}
                    <p className="mb-0 ms-1">{e.ratePercent}</p>
                  </div>
                  <div className={`${"doctorDiv"} mt-4`}>
                    <img src={e.logo} className={`rounded-pill w-100`} alt="" />
                  </div>
                  <div className="whishlist">
                    {/* <img src={e.logo} alt="" /> */}
                  </div>
                </div>
                <h5 className="mb-2 mt-2 text-center">Dr. {e.name}</h5>
                <h5 className="mb-3 mt-2 text-center">{e.descrption}</h5>
                <div className="date d-flex justify-content-evenly">
                  <div className="days">
                    <p className="mb-0">{e.endtime}</p>
                  </div>
                  <div className="hours">
                    <p className="mb-0">{e.starttime}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly align-items-center mt-3">
                  <div className="price">
                    <h5 className="fw-bold mt-3">
                      fees <span>{e.delivery_fee} L.E</span>
                    </h5>
                  </div>
                  <div
                    className={`dateStyle d-flex justify-content-center align-items-center text-center`}
                  >
                    {/* <img src={e.logo} alt="date" /> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Doctors;
