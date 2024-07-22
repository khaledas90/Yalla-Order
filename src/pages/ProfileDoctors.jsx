import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import ProfileDoctor from "../components/ProfileDoctor/ProfileDoctor";
import ReactStars from "react-rating-stars-component";
// import loction from "../assets/locationDoctor.svg";
import "../components/ProfileDoctor/ProfileDoctor.css";

import NavClinics from "../components/NavClinics/NavClinics";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { actProfileDoctors } from "../store/ProfilsDoctors/profileDoctorsSlice";

function ProfileDoctors() {
  const [clinicRating, setClinicRating] = useState();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const doctorData = useSelector(
    (state) => state.doctorData.profileDoctors.Doctordetails
  );

  const ratingChanged = (newRating) => {
    setClinicRating(newRating);
  };

  useEffect(() => {
    dispatch(actProfileDoctors(id));
  }, [dispatch, id]);

  return (
    <div className="ProfileDoctors">
      <Helmet>
        <title>Profile Doctors</title>
        <meta
          name="description"
          content="Discover the best restaurants around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <h1 className="text-center TitlePage">Clinics</h1>
      </div>
      <div className="container" style={{ marginTop: "-14pc" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <img src={doctorData.image} alt="" className="w-100" />

              <img src="" alt="" className="w-25 mt-5" />
              <div className="pt-5 d-flex align-items-center justify-content-center">
                <div className="rating">
                  <div className="rating">
                    <span className="fw-blod text-warning">
                      {clinicRating} Rating
                    </span>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={40}
                      a11y={true}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      fullIcon={<i className="fa fa-star" />}
                      activeColor="#ffd700"
                      value={4}
                    />
                  </div>
                </div>
              </div>
              <h4 className="mt-2 lh-1 fs-3">Dr. {doctorData.name}</h4>
              <div className="fw-blod">
                <p>General ophthalmologist</p>
                <p>Days: {doctorData.days} </p>
                <p>startTime: {doctorData.starttime}</p>
                <p>endTime: {doctorData.endtime}</p>
                <p>Detection per: {doctorData.waitingtime}</p>
              </div>
              <p className="fw-bold text-black-50">
                fees: {doctorData.fees} L.E
              </p>
            </div>
          </div>
          <div className=" my-5">
            <div className="ps-3 ">
              <h3>Clinic address</h3>
            </div>
            <div className="pt-3  d-flex align-items-center     ">
              <img src="" className="pe-3" alt="" />
              <span className={"textSpan"}>{doctorData.Addressclinic}</span>
            </div>
            <div className="pt-3 ps-2">
              <h3 className="mb-3 mt-4">Overview Specialty Dr</h3>
              <p className={"textP"}>
                Dr. {doctorData.name}, {doctorData.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProfileDoctor />
    </div>
  );
}

export default ProfileDoctors;
