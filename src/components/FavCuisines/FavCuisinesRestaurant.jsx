import Slider from "react-slick";
import "./FavCuisines.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import burger from "../../assets/burger.png";
import pizaa from "../../assets/fast food 1.png";
import Chinese from "../../assets/sushi.png";
import Dessert from "../../assets/donut.png";
import Fries from "../../assets/Group.png";
import sandwich from "../../assets/Hot Dog.png";
import back from "../../assets/Group 1171276175 1.png"
function FavCuisinesRestaurant() {
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
                                        <img src={burger} alt="" />
                                    </div>
                                    <p>Burger</p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={pizaa} alt="" />
                                    </div>
                                    <p>Pizza</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={Chinese} alt="" />
                                    </div>
                                    <p>Chinese</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={Dessert} alt="" />
                                    </div>
                                    <p>Dessert</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={Fries} alt="" />
                                    </div>
                                    <p>Fries</p>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div>
                                        <img src={sandwich} alt="" />
                                    </div>
                                    <p>sandwich</p>
                                </div>

                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavCuisinesRestaurant
