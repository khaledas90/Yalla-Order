import { useParams } from "react-router-dom";
import Doctors from "../Doctors/Doctors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actShowClinicsDetails } from "../../store/showClinicsDetails/showClinicsDetailsSlice";
import Loader from "../loader/Loader";

// Styles
import "./ClinicsItem.css";

const ClinicsItems = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { clinicsDetails } = useSelector((state) => state.clinicsDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(actShowClinicsDetails(id, { signal })).then(() => {
      setLoading(false);
    });
    return () => {
      controller.abort();
    };
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={`container d-flex flex-column gap-5 pb-3 containerStyle`}>
          <div className="row justify-content-center">
            <div>
              <div className="d-flex justify-content-center my-4">
                <div className="col-lg-4">
                  <div className={`card mt-3 p-1 cardShadow`}>
                    <img
                      src={clinicsDetails?.logo}
                      className="w-100 rounded-2"
                      alt={clinicsDetails?.clinicinfo?.name}
                    />
                  </div>
                  <p className="mb-0 text-center mt-2 fw-bold">
                    {clinicsDetails?.clinicinfo?.name}
                  </p>
                </div>
              </div>
              <div className="about-clinics mt-5">
                <h4 className="fw-bold">
                  Summary of{" "}
                  <span className="text-info">
                    {clinicsDetails?.clinicinfo?.name}
                  </span>
                </h4>
                <p className={`fw-medium summaryStyle`}>
                  {clinicsDetails?.clinicinfo?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="clinicsDoctors">
            <h4 className="fw-bold mb-3">The best doctors in the clinic</h4>
            <Doctors />
            <p className="text-info d-flex justify-content-center align-items-center mt-5">
              View more doctors
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClinicsItems;
