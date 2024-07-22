import "./NavToPartner.css";
import MedicalImg from "../../assets/oneUs.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function NavToPartnerMedical() {

    const { t } = useTranslation();




    return (
        <div className={`To-Partner-container `}>
            <div className="To-Partner">
                <div className="details">
                    <h1>{t('BECOME ONE OF US?')}</h1>
                    <p><span>{t('What')}</span> {t('are you waiting for some?')}</p>
                    <Link to={"/LoginAPartner"} className="btn btn-primary BtnGoToLoginPartner btn-contact rounded-pill py-3 font-weight-bold display-6">{t('Login a partner')} </Link>
                </div>
                <img src={MedicalImg} alt="pizza" />
            </div>
        </div>
    )
}

export default NavToPartnerMedical
