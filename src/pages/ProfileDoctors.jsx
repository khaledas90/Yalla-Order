import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import ProfileDoctor from "../components/ProfileDoctor/ProfileDoctor";
import ReactStars from "react-rating-stars-component";
import "../components/ProfileDoctor/ProfileDoctor.css";
import NavClinics from "../components/NavClinics/NavClinics";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { actProfileDoctors } from "../store/ProfilsDoctors/profileDoctorsSlice";
import like from "../assets/favourite-1.svg";
import likeFile from "../assets/favourite-2.svg";
import { AddFavClinic, DeleteFavClinic, GetFavClinic } from '../store/favClinics/favSlice';

function ProfileDoctors() {
  const [clinicRating, setClinicRating] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const doctorData = useSelector((state) => state.doctorData.profileDoctors.Doctordetails);
  const favClinic = useSelector((state) => state.favClinic.favClinic);
  const [likedDoctors, setLikedDoctors] = useState({});

  useEffect(() => {
    dispatch(actProfileDoctors(id));
    dispatch(GetFavClinic());
  }, [dispatch, id]);

  useEffect(() => {
    console.log('favClinic:', favClinic); // Check the type and content of favClinic
    // Ensure favClinic is an array before using reduce
    if (Array.isArray(favClinic)) {
      const likedMap = favClinic.reduce((acc, clinic) => {
        acc[clinic.id] = true;
        return acc;
      }, {});
      setLikedDoctors(likedMap);
    } else {
      console.warn('favClinic is not an array:', favClinic);
    }
  }, [favClinic]);

  const LikeToggleHandler = (doctorId) => {
    if (likedDoctors[doctorId]) {
      // Remove from favorites
      dispatch(DeleteFavClinic(doctorId))
        .then(() => {
          setLikedDoctors((prev) => {
            const updatedLikedDoctors = { ...prev };
            delete updatedLikedDoctors[doctorId];
            return updatedLikedDoctors;
          });
        })
        .catch((error) => {
          console.error("Failed to remove from favorites:", error);
        });
    } else {
      // Add to favorites
      dispatch(AddFavClinic(doctorId))
        .then(() => {
          setLikedDoctors((prev) => ({ ...prev, [doctorId]: true }));
        })
        .catch((error) => {
          console.error("Failed to add to favorites:", error);
        });
    }
  };

  const ratingChanged = (newRating) => {
    setClinicRating(newRating);
  };

  return (
    <div className="ProfileDoctors">
      <Helmet>
        <title>Profile Doctors</title>
        <meta name="description" content="Discover the best doctors around you." />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <h1 className="text-center TitlePage">Clinics</h1>
      </div>
      <div className="container" style={{ marginTop: "-14pc" }}>
        <div className="row">
          <div className="col-lg-12">
            {doctorData ? (
              <div className="text-center">
                <img src={doctorData.image} alt="" className="w-100" />
                <img src="" alt="" className="w-25 mt-5" />
                <div className="pt-5 d-flex align-items-center justify-content-center">
                  <div className="rating">
                    <span className="fw-blod text-warning">{clinicRating} Rating</span>
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
                      value={clinicRating}
                    />
                    <img
                      src={likedDoctors[doctorData.id] ? likeFile : like}
                      width={'80px'}
                      onClick={() => LikeToggleHandler(doctorData.id)}
                      alt="Like button"
                      className="wishlistBtn mt-2 mb-2"
                    />
                  </div>
                </div>
                <h4 className="mt-2 lh-1 fs-3">Dr. {doctorData.name}</h4>
                <div className="fw-blod">
                  <p>General ophthalmologist</p>
                  <p>Days: {doctorData.days}</p>
                  <p>Start Time: {doctorData.starttime}</p>
                  <p>End Time: {doctorData.endtime}</p>
                  <p>Detection per: {doctorData.waitingtime}</p>
                </div>
                <p className="fw-bold text-black-50">
                  Fees: {doctorData.fees} L.E
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {doctorData && (
            <div className="my-5">
              <div className="ps-3">
                <h3>Clinic Address</h3>
              </div>
              <div className="pt-3 d-flex align-items-center">
                <img src="" className="pe-3" alt="" />
                <span className="textSpan">{doctorData.Addressclinic}</span>
              </div>
              <div className="pt-3 ps-2">
                <h3 className="mb-3 mt-4">Overview Specialty Dr</h3>
                <p className="textP">
                  Dr. {doctorData.name}, {doctorData.overview}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {doctorData && <ProfileDoctor DoctorAndClinicId={{ doctorId: doctorData.id, clinicId: doctorData.clinic_id }} />}
    </div>
  );
}

export default ProfileDoctors;
