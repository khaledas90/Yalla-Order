import { Link } from "react-router-dom";
import "./Explore.css";
import { useDispatch } from "react-redux";
import { changeTypePage } from "../../store/SliceUser";
import { useTranslation } from "react-i18next";
function Explore() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const handleClickExploreClinic = () => {
        window.scrollTo(0, 0);
        dispatch(changeTypePage('clinic'))
    }
    const handleClickExploreMedical = () => {
        window.scrollTo(0, 0);
        dispatch(changeTypePage('restaurant'))
    }


    const lang = localStorage.getItem("i18nextLng")
    return (
        <div className={`explore ${lang === "ar" ? "ar" : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <div className="box">
                            <div className="details">
                                <h1 className="rose">{t('are you hungry?')}</h1>
                                <p>{t('Our team is always ready to prepare your food at any time. Discover our restaurants now!  We have delivery, offers and discounts.')}</p>
                                <Link to="/" onClick={handleClickExploreMedical} className="rose">{t('Explore')}</Link>

                            </div>
                            <div className="image image-food">
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="box ">
                            <div className="details">
                                <h1 className="blue">{t('Do you have a cold?')}
                                </h1>
                                <p>{t('Do not worry, we are here to help you. Book your consultation quickly and easily.')}</p>
                                <Link to="/HomeMedical" onClick={handleClickExploreClinic} className="blue">{t('Explore')}</Link>

                            </div>
                            <div className="image image-doc">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
