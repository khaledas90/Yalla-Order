
import { Link, useLocation } from "react-router-dom";
import "./AllClinics.css";
import { CLINICS } from "./FakeData";

import { useEffect, useState } from "react";

function AllClinics() {
    const [numToShow, setNumToShow] = useState(8)
    const CLINICSToshow = CLINICS.slice(0, numToShow);
    const { pathname } = useLocation();

    function handleIncrease() {
        if (numToShow <= CLINICS.length) {
            setNumToShow((state) => state + 4)

        }
    }
    useEffect(() => {

        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="allClinics w-100 overflow-hidden">
            <div className="container">
                <h1><span>All</span> Clinics</h1>
            </div>
            <div className="ClinicList">
                <div className="container">
                    <div className="row">
                        {CLINICSToshow?.map((Clinic) =>
                            <div key={Clinic.id} className="col-12 col-md-6 col-lg-3 mb-5">
                                <div className="Clinic">
                                    <Link to={`/CLinics/${Clinic.id}`}>
                                        <img src={Clinic.image} alt="Clinic" />
                                        <div className="details">
                                            <div>
                                                <p>{Clinic.name}</p>
                                            </div>

                                        </div>
                                    </Link>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className="text-center">
                {numToShow <= CLINICS.length ? <button onClick={() => handleIncrease()} className="seeMoreBtn">See More</button> : <p>No More</p>}
            </div>
        </div>
    )
}

export default AllClinics
