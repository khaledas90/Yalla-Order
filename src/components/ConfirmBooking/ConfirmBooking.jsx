import Helmet from "react-helmet";
import ReactStars from "react-rating-stars-component";
import { useLocation, useParams } from 'react-router-dom';
import NavClinics from "../NavClinics/NavClinics";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actProfileDoctors } from "../../store/ProfilsDoctors/profileDoctorsSlice";
import Loader from "../loader/Loader";
import "./ConfirmBooking.css";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast, { Toaster } from "react-hot-toast";
import { useInView } from 'react-cool-inview';

const ConfirmBooking = () => {
  const [clinicRating, setClinicRating] = useState(0);
  const [dataReservation, setDataReservation] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoadPayment, setIsLoadPayment] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const location = useLocation();
  const { idReservation } = location.state || {};
  const doctorData = useSelector(
    (state) => state.doctorData.profileDoctors.Doctordetails
  );

  useEffect(() => {
    if (id) {
      dispatch(actProfileDoctors(id));
    }

    if (idReservation) {
      apiAuthenticate.get(`places/clinic/doctor/summary/reservation/${idReservation}`)
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message);
            setDataReservation(response.data.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [dispatch, id, idReservation]);

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    setIsLoadPayment(true);
    try {
      const data = await apiAuthenticate.get(
        `/places/clinic/doctor/confirm/reservation/${idReservation}`
      );

      if (data.data.status === 200) {
        toast.success(data.data.message);
        setUrl(data.data.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoadPayment(false);
      setIsClicked(false);
    }
  };

  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
    onEnter: ({ entry }) => {
      console.log('Iframe entered the view');
      console.log('Iframe URL:', entry.target.src);
      if (entry.target.tagName === 'IFRAME') {
        console.log('Iframe entered the view');
        console.log('Iframe URL:', entry.target.src);
        localStorage.setItem('url22', entry.target.src);

      }
    },
    onLeave: ({ entry }) => {
      console.log('Iframe entered the view');
      if (entry.target.tagName === 'IFRAME') {
        console.log('Iframe left the view');
        console.log('Iframe URL:', entry.target.src);
        localStorage.setItem('url', entry.target.src);

      }
    },
  });
  console.log(localStorage.getItem('url'));
  console.log(localStorage.getItem('url22'));
  return (
    loading ? <Loader /> :
      <div className="ProfileDoctors">
        <Helmet>
          <title>Profile Doctors</title>
          <meta name="description" content="Discover the best clinics around you." />
        </Helmet>
        <div className="Main_bg">
          <NavClinics />
          <h1 className="text-center TitlePage">Clinics</h1>
        </div>
        <div className="container" style={{ marginTop: "-14pc" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <img src={doctorData.image} alt="Doctor" className="w-100" />
                <div className="pt-5 d-flex align-items-center justify-content-center">
                  <div className="rating">
                    <span className="fw-bold text-warning">
                      {clinicRating} Rating
                    </span>
                    <ReactStars
                      count={5}
                      onChange={setClinicRating}
                      size={40}
                      a11y={true}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      fullIcon={<i className="fa fa-star" />}
                      activeColor="#ffd700"
                      value={clinicRating}
                    />
                  </div>
                </div>
                <h4 className="mt-2 lh-1 fs-3">Dr. {doctorData.name}</h4>
              </div>
            </div>

            <div className="reservation-summary p-2 my-5">
              <div>
                <h2 className="header w-100 text-white bg-black p-2 rounded-3">Reservation Summary</h2>
              </div>
              <div className="clinic-info">
                <h3 className="my-4">{dataReservation?.clinicname || "--------"}</h3>
                <div className="info-row bg-body-secondary p-2">
                  <span>Dr. Name</span>
                  <span>Specialty Dr.</span>
                </div>
                <div className="info-row text-black-50">
                  <span>{dataReservation?.Doctorename || "Dr. --------"}</span>
                  <span>{dataReservation?.department || "---------"}</span>
                </div>
                <div className="info-row bg-body-secondary p-2">
                  <span>Waiting Time</span>
                  <span>Detection per</span>
                </div>
                <div className="info-row text-black-50">
                  <span>{dataReservation?.waitingtime || "--"}</span>
                  <span>{dataReservation?.detectiontime || "--"}</span>
                </div>
                <div className="info-row bg-body-secondary p-2">
                  <span>Home address</span>
                </div>
                <p className="text-black-50">
                  {dataReservation?.clinicAddress || "--------------------------------------------------------------"}
                </p>
              </div>
              <hr />
              <div className="patient-data p-2 my-4">
                <h3>Patient Data</h3>
                <div className="info-row bg-body-secondary p-2">
                  <span>Patient Name</span>
                  <span>Phone Number</span>
                </div>
                <div className="info-row text-black-50">
                  <span>{dataReservation?.['patient name'] || "-----------------"}</span>
                  <span>{dataReservation?.['patient phone'] || "01************"}</span>
                </div>
                <div className="info-row bg-body-secondary p-2">
                  <span>Gender</span>
                  <span>Age</span>
                </div>
                <div className="info-row text-black-50">
                  <span>{dataReservation?.['patient gender'] || "---------"}</span>
                  <span>{dataReservation?.['patient age'] || "--- Years"}</span>
                </div>
              </div>
              <div className="reservation-details my-3">
                <div className="info-row bg-body-secondary p-2">
                  <span>Day Reservation</span>
                  <span>Reservation Time</span>
                </div>
                <div className="info-row text-black-50">
                  <span>{dataReservation?.['patient day_booking'] || "00/00/0000"}</span>
                  <span>{dataReservation?.patienttime_booking || "00:00 "}</span>
                </div>
              </div>
              <div className="payment-summary p-2">
                <h3 className="bg-body-secondary p-2">Payment Summary</h3>
                <div className="info-row">
                  <p className="text-black-50">
                    Got a voucher code? Place your order from the app to use it.
                  </p>
                </div>
                <div className="info-row p-2">
                  <span>Cash</span>
                  <i className="fa-solid fa-cash-register text-info"></i>
                  <span>{dataReservation?.totalprice || "reservation.fees"}</span>
                </div>
              </div>
              <div className="d-flex justify-content-center" >
                <button
                  ref={observe}
                  className={`confirm-button rounded-pill ${isClicked ? 'disabledBtn' : ''}`}
                  onClick={handleConfirmOrder}
                  disabled={isClicked}
                >
                  {isLoadPayment ? "Loading..." : "Confirm Order"}
                </button>
              </div>
              <div className="iframe_container" >
                <div className={`overlayIframe ${url ? 'activeOverlayIframe' : ''}`}></div>
                {url && (
                  <iframe
                    title="Payment View"
                    src={url}
                    style={{ width: '100%', height: '100vh', border: 'none', position: 'relative', zIndex: 999999 }}
                    ref={observe}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
  );
};

export default ConfirmBooking;
