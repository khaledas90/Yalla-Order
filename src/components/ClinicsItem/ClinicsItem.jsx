import { Link } from "react-router-dom";

import Doctors from "../Doctors/Doctors";

// svg
import clinicImg from "../../assets/clinics.svg";
import doctor1 from "../../assets/doctors.svg";
import doctor2 from "../../assets/doctors2.svg";
import doctor3 from "../../assets/doctors3.svg";
import doctor4 from "../../assets/doctors4.svg";

// Styles
import "./ClinicsItem.css";



const ClinicsItems = () => {
    return (
        <>
            <div
                className={`container d-flex flex-column gap-5 pb-3 containerStyle`}
            >
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <div className={`card mt-3 p-1 cardShadow`}>
                            <img src={clinicImg} className="rounded-2" alt="" />
                        </div>
                        <p className="mb-0 text-center mt-2 fw-bold">Eye Clinics</p>
                    </div>
                </div>
                <div className="about-clinics">
                    <h4 className="fw-bold">
                        Summary of <span className="text-info">eye clinics</span>
                    </h4>
                    <p className={`fw-medium summaryStyle`}>
                        Eye clinics deal with ophthalmology and surgery. This includes the
                        eye, optic nerve, retina, vitreous, lens, iris, cornea, eyelids, and
                        areas surrounding the eye such as the lacrimal system and eyelids.
                        Foodc website provides specialized medical and surgical services in
                        all eye specialties. This is done through a group of university
                        professors and consultants who hold academic degrees and have
                        distinguished experiences. Now you can book an appointment at the
                        branch closest to you via the website or through our application
                    </p>
                </div>
                <div className="clinicsDoctors">
                    <h4 className="fw-bold mb-3">The best doctors in the clinic</h4>
                    <Link to="/profileDoctor" className="text-decoration-none">
                        <div className="row g-4">
                            <Doctors
                                imgSrc={doctor1}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                            <Doctors
                                imgSrc={doctor2}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                            <Doctors
                                imgSrc={doctor3}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                            <Doctors
                                imgSrc={doctor4}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                            <Doctors
                                imgSrc={doctor1}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                            <Doctors
                                imgSrc={doctor2}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                            <Doctors
                                imgSrc={doctor3}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                            <Doctors
                                imgSrc={doctor4}
                                doctorName={"Ramy Shokry"}
                                doctorSpecialization={"General ophthalmologist"}
                                dateDayes={"Sut,Sun,Mon"}
                                dateHours={"10:30 AM-3:30"}
                                price={200}
                                ratePercent={4.9}
                            />
                        </div>
                    </Link>
                    <p className="text-info d-flex justify-content-center align-items-center mt-5">
                        View more doctors
                    </p>
                </div>
            </div>
        </>
    );
};

export default ClinicsItems;
