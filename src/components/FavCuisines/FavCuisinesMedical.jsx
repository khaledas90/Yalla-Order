import Slider from "react-slick";
import "./FavCuisines.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/dental.svg";
import img2 from "../../assets/childs.svg";
import img3 from "../../assets/eye.svg";
import img4 from "../../assets/nerology.svg";
import img5 from "../../assets/dermatology.svg";
import img6 from "../../assets/physical.svg";
import back from "../../assets/bg.svg";
function FavCuisinesMedical() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="FavContainer">
            <div className="container">
                <div className="mainFav">
                    <img className="back" src={back} alt="back" />
                    <h1>Customer Favorite Cuisines</h1>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                    <p>Dental</p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={img2} alt="" />
                                    </div>
                                    <p>Children's</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={img3} alt="" />
                                    </div>
                                    <p>Eye</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={img4} alt="" />
                                    </div>
                                    <p>Neurology</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={img5} alt="" />
                                    </div>
                                    <p>Dermatology</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={img6} alt="" />
                                    </div>
                                    <p>Psychiatric</p>
                                </div>

                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavCuisinesMedical
