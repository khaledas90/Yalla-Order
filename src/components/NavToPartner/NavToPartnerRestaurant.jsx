import "./NavToPartner.css";
import pizzaImg from "../../assets/Group 1171276286.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function NavToPartnerRestaurant() {
    const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLng")
    return (
        <div className={`To-Partner-container ${lang === "ar" ? "rtl" : ""}`}>
            <div className="To-Partner">
                <div className="details">
                    <h1>{t('BECOME ONE OF US?')}</h1>
                    <p><span>{t('What')}</span> {t('are you waiting for some?')}</p>
                    <Link to={"/LoginAPartner"} className="btn btn-primary BtnGoToLoginPartner btn-contact rounded-pill py-3 font-weight-bold display-6">{t("Login a partner")}</Link>
                </div>
                <img src={pizzaImg} alt="pizza" />
            </div>
        </div>
    )
}

export default NavToPartnerRestaurant
