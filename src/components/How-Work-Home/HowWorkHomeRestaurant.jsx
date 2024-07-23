import { useTranslation } from "react-i18next";
import burgerImg from "../../assets/Group 1171276508.png";
import './HowWorkHome.css';
function HowWorkHomeRestaurant() {
    const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLng")
    return (
        <div className={`work ${lang === "ar" ? "ar" : ""}`}>
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div>
                            <img src={burgerImg} alt='burger' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className={`details  ${lang === "ar" ? "text-center text-lg-end" : "text-center text-lg-start"}`}>
                            <h2 className='header'>{t('How We Work')}</h2>
                            <h3 className="subHeader">
                                <span>{t('We value')}</span> {t('Our  Clients & Customers')}

                            </h3>
                            <ul>
                                <li>{t('Register or login in our portal')}</li>
                                <li>{t('Search your location')}</li>
                                <li>{t('Find your preferred restaurant')}</li>
                                <li>{t('Choose your cuisine')}</li>
                                <li>{t('Get your food delivered at your address')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorkHomeRestaurant
