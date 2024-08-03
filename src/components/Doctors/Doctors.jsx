import { Link, useParams } from "react-router-dom";
import "./Doctors.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actShowClinicsDetails } from "../../store/showClinicsDetails/showClinicsDetailsSlice";
import like from "../../assets/likeDoctors.svg";
import likeFile from "../../assets/likeFile.svg";
import { AddFavClinic, DeleteFavClinic, GetFavClinic } from '../../store/favClinics/favSlice'
import { Toaster } from "react-hot-toast";

const Doctors = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { clinicsDetails } = useSelector((state) => state.clinicsDetails);
  const { favClinic } = useSelector((state) => state.favClinic);
  const [Liked, setLiked] = useState(false)
  const [srcImgLike, setSrcImgLike] = useState(like);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(actShowClinicsDetails(id, { signal }));
    return () => {
      controller.abort();
    };

  }, [dispatch, id]);

  useEffect(() => {
    dispatch(GetFavClinic());
  }, [dispatch]);



  const LikeToggleHandler = (doctorId) => {
    const isLiked = favClinic.some((clinic) => clinic.id === doctorId);
    if (isLiked) {
      dispatch(DeleteFavClinic(doctorId));
      setSrcImgLike(like)
      setLiked(true)
    } else {
      dispatch(AddFavClinic(doctorId));
      setSrcImgLike(likeFile)
      setLiked(false)
    }
  };


  return (
    <>
      <div className="row my-5">
        {Array.isArray(clinicsDetails.Doctors) &&
          clinicsDetails.Doctors.map((e) => (
            <div className="col-lg-3 col-sm-12 col-md-6" key={e.id}>
              <div className="card px-3 rounded-5 pb-3">
                <div className="d-flex justify-content-between mt-3 mb-2">
                  <div className="doctorRate d-flex flex-column gap-2">
                    <img src="" className="rateStyle" alt="Rate" />
                    <p className="mb-0 ms-1"></p>
                  </div>
                  <Link
                    className="text-decoration-none"
                    to={`/profileDoctor/${e.id}`}
                  >
                    <div className="doctorDiv mt-4">
                      <img
                        src={e.image}
                        className="rounded-pill w-100"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div>
                    <img src={srcImgLike} onClick={() => LikeToggleHandler(e.id)} alt="" className="wishlistBtn" />

                  </div>
                </div>
                <h5 className="mb-2 mt-2 text-center">Dr. {e.name}</h5>
                <h5 className="mb-3 mt-2 text-center">{e.department}</h5>
                <div className="date d-flex justify-content-evenly">
                  <div className="days">
                    <p className="mb-0">{e.days}</p>
                  </div>
                  <div className="hours">
                    <p className="mb-0">{e.start_time}</p>
                  </div>
                  <div className="hours">
                    <p className="mb-0">{e.end_time}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly align-items-center mt-3">
                  <div className="price">
                    <h5 className="fw-bold mt-3">
                      {e.fees} <span> L.E</span>
                    </h5>
                  </div>
                  <div className="dateStyle d-flex justify-content-center align-items-center text-center">

                  </div>
                </div>
              </div>
            </div>
          ))}
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </>
  );
};

export default Doctors;
