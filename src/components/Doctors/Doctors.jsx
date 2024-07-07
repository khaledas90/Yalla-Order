// Svg
import rate from "../../assets/rate.svg";
import fav from "../../assets/fav-Doctors.svg";
import date from "../../assets/date.svg";

// Styles
import "./Doctors.css";

const Doctors = ({
    imgSrc,
    doctorName,
    doctorSpecialization,
    dateDayes,
    dateHours,
    price,
    ratePercent
}) => {
    return (
        <>
            <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card px-3 rounded-5 pb-3">
                    <div className="d-flex justify-content-between mt-3 mb-2">
                        <div className="doctorRate d-flex flex-column gap-2">
                            <img src={rate} className={`rateStyle`} alt="Rate" />
                            <p className="mb-0 ms-1">{ratePercent}</p>
                        </div>
                        <div className={`${'doctorDiv'} mt-4`}>
                            <img src={imgSrc} className={`rounded-pill w-100`} alt="" />
                        </div>
                        <div className="whishlist">
                            <img src={fav} alt="" />
                        </div>
                    </div>
                    <h5 className="mb-2 mt-2 text-center">Dr. {doctorName}</h5>
                    <h5 className="mb-3 mt-2 text-center">{doctorSpecialization}</h5>
                    <div className="date d-flex justify-content-evenly">
                        <div className="days">
                            <p className="mb-0">{dateDayes}</p>
                        </div>
                        <div className="hours">
                            <p className="mb-0">{dateHours}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center mt-3">
                        <div className="price">
                            <h5 className="fw-bold mt-3">
                                fees <span>{price} L.E</span>
                            </h5>
                        </div>
                        <div
                            className={`dateStyle d-flex justify-content-center align-items-center text-center`}
                        >
                            <img src={date} alt="date" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;
