import creativity from "../../assets/creativity.svg";
import "./HowWorkHome.css";
function HowWorkHomeMedical() {
  return (
    <div className="work">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div>
              <img
                src={creativity}
                className="d-none d-lg-inline"
                alt="burger"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="details text-center text-lg-start">
              <h2 className="header">How We Work</h2>
              <h3 className="subHeader subHeaderMedical">
                <span className="text">We value</span> our patients <br />
                and doctors
              </h3>
              <ul>
                <li>Register or log in to our portal</li>
                <li>Search your location</li>
                <li>Find the clinic you want</li>
                <li>Choose the appropriate doctor and appointment</li>
                <li>Arrive on time and receive excellent medical care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWorkHomeMedical;
