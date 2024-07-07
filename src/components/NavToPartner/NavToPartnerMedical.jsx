import "./NavToPartner.css";
import MedicalImg from "../../assets/oneUs.svg";
import { Link } from "react-router-dom";
function NavToPartnerMedical() {
    return (
        <div className="To-Partner-container">
            <div className="To-Partner">
                <div className="details">
                    <h1>BECOME ONE OF US?</h1>
                    <p><span>What</span> are you waiting for some?</p>
                    <Link to={"/LoginAPartner"} className="btn btn-primary BtnGoToLoginPartner btn-contact rounded-pill py-3 font-weight-bold display-6">Login a partner</Link>
                </div>
                <img src={MedicalImg} alt="pizza" />
            </div>
        </div>
    )
}

export default NavToPartnerMedical
