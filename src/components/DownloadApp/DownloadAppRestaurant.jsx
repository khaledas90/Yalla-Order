import React from 'react'
import appStore from "../../assets/logo appstore.png";
import googlePlay from "../../assets/logo googlestore.png";
import mobile from "../../assets/OnePlus 10T.png";
import './DownloadApp.css';
export default function DownloadAppRestaurant() {
    return (
        <>
            <div className={`mobileSec position-relative`}>
                <div className="d-flex flex-column justify-content-center h-100 align-items-md-center align-items-lg-start content " >
                    <h2 className={`cabinSketchRegular  text-light pt-4`}>
                        Download our <br /> application now!
                    </h2>
                    <p className="text-light pt-4">
                        <span className="text-info ">Enjoy</span> the best meals some?
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
