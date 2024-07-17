import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import Header from "../components/header/Header";
import ProfileDoctor from "../components/ProfileDoctor/ProfileDoctor";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import iconRate from "../assets/iconRate.svg";
import iconlight from "../assets/imdIconLight.svg";
import "../components/ProfileDoctor/ProfileDoctor.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actClinicsDetails } from "../store/ClinicsDetails/ClinicsDetailsSlice";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";
function ProfileDoctors() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { clinicDetails, loading } = useSelector(
    (state) => state.clinicDetails
  );
  console.log(clinicDetails, "id");
  useEffect(() => {
    if (id) {
      dispatch(actClinicsDetails(id));
    }
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
        <Header
          MainPage={"clinics"}
          IconOne={<FavoriteBorderOutlinedIcon />}
          IconTwo={<LanguageOutlinedIcon />}
        />
        <h1 className="text-center TitlePage">Clinics</h1>
      </div>
      <div className="container" style={{ marginTop: "-14pc" }}>
        <div className="row">
          {loading === "pending" ? (
            <Loading />
          ) : (
            <div className="col-lg-12 ">
              <div className="text-center ">
                <img
                  //   src={clinicDetails[0].logo}
                  alt=""
                  className={"imgdoctor"}
                />
                <div className="pt-5  d-flex align-items-center justify-content-center">
                  <span className="text-black-50 fs-6 fw-light">
                    {" "}
                    4.0 Rating
                  </span>
                  <img src={iconRate} className={"imgicon"} alt="" />
                </div>
                <h4 className="mt-2 lh-1 fs-3">Dr. Ramy Shokry </h4>
                <p>General ophthalmologist</p>
                <p>Sut,Sun,Mon 10:30 AM-3:30</p>
                <p>Detection per: 20min</p>
                <p className="fw-bold text-black-50">fees: 200 L.E ( Clinic)</p>
                <img src={iconlight} alt="" className={"rateLight"} />
              </div>
            </div>
          )}
        </div>
      </div>
      <ProfileDoctor />
    </div>
  );
}

export default ProfileDoctors;
