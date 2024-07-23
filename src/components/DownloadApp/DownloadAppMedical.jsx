import React from 'react'
import appStore from "../../assets/logo appstore.png";
import googlePlay from "../../assets/logo googlestore.png";
import mobile from "../../assets/OnePlusD 10T.png";
import './DownloadApp.css';
import { useTranslation } from 'react-i18next';
export default function DownloadAppMedical() {
    const { t } = useTranslation();

    const lang = localStorage.getItem("i18nextLng")
    return (
        <>
            <div className={`mobileSec position-relative `}>
                <div className="d-flex flex-column justify-content-center h-100 align-items-md-center align-items-lg-start content " >
                    <h2 className={`cabinSketchRegular ${lang === "ar" ? "ar" : ""}  text-light pt-4`}>
                        {t('Download our')} <br />  {t('application now!')}
                    </h2>
                    <p className={` ${lang === "ar" ? "ar" : ""} text-light pt-4`}>
                        <span className="text-info ">{t('Enjoy')} </span>{t('the best foods some?')}
                    </p>
                    <div className="d-flex gap-4 pt-4 ">
                        <>
                            <img src={appStore} alt="" className={'image'} />
                        </>
                        <>
                            <img src={googlePlay} alt="" className={'image'} />
                        </>
                    </div>
                </div>
                <img
                    src={mobile}
                    alt=""
                    className={`d-none d-lg-block mobileStyle`}
                />
            </div>

        </>
    )
}
