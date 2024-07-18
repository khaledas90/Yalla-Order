import Doctors from "../Doctors/Doctors";

// Styles
import "./ClinicsItem.css";

const ClinicsItems = () => {
  return (
    <>
      <div className={`container d-flex flex-column gap-5 pb-3 containerStyle`}>
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className={`card mt-3 p-1 cardShadow`}>
              <img src={""} className="rounded-2" alt="" />
            </div>
            <p className="mb-0 text-center mt-2 fw-bold">e.name</p>
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
          <Doctors />
          <p className="text-info d-flex justify-content-center align-items-center mt-5">
            View more doctors
          </p>
        </div>
      </div>
    </>
  );
};

export default ClinicsItems;
