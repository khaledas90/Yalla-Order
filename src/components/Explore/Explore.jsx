import { Link } from "react-router-dom";
import "./Explore.css";
import { useDispatch } from "react-redux";
import { changeType } from "../../store/SliceUser";
function Explore() {
    const dispatch = useDispatch()

    const handleClickExploreClinic = () => {
        window.scrollTo(0, 0);
        dispatch(changeType('clinic'))
    }
    const handleClickExploreMedical = () => {
        window.scrollTo(0, 0);
        dispatch(changeType('restaurant'))
    }



    return (
        <div className="explore">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <div className="box">
                            <div className="details">
                                <h1 className="rose">are you hungry?</h1>
                                <p>Our team is always ready to prepare your food at any time. Discover our restaurants now!
                                    We have delivery, offers and discounts.</p>
                                <Link to="/" onClick={handleClickExploreMedical} className="rose">Explore</Link>

                            </div>
                            <div className="image image-food">
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="box ">
                            <div className="details">
                                <h1 className="blue">Do you have a cold?
                                </h1>
                                <p>Don't worry, we are here to help you. Book your consultation quickly and easily.</p>
                                <Link to="/HomeMedical" onClick={handleClickExploreClinic} className="blue">Explore</Link>

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
