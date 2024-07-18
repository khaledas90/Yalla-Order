import { Link } from "react-router-dom";
import "./Doctors.css";

const Doctors = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-lg-3 col-sm-12 col-md-6">
          <Link className="text-decoration-none">
            <div className="card px-3 rounded-5 pb-3">
              <div className="d-flex justify-content-between mt-3 mb-2">
                <div className="doctorRate d-flex flex-column gap-2">
                  {/* <img src={e.logo} className={`rateStyle`} alt="Rate" /> */}
                  <p className="mb-0 ms-1"></p>
                </div>
                <div className={`${"doctorDiv"} mt-4`}>
                  <img src="" className={`rounded-pill w-100`} alt="" />
                </div>
                <div className="whishlist">
                  {/* <img src={e.logo} alt="" /> */}
                </div>
              </div>
              <h5 className="mb-2 mt-2 text-center">Dr. </h5>
              <h5 className="mb-3 mt-2 text-center">s</h5>
              <div className="date d-flex justify-content-evenly">
                <div className="days">
                  <p className="mb-0"></p>
                </div>
                <div className="hours">
                  <p className="mb-0"></p>
                </div>
              </div>
              <div className="d-flex justify-content-evenly align-items-center mt-3">
                <div className="price">
                  <h5 className="fw-bold mt-3">
                    fees <span> L.E</span>
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
      </div>
    </>
  );
};

export default Doctors;
