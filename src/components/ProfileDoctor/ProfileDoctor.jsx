// Compenets


import Slider from "react-slick";

// import SVG
import img1 from "../../assets/nada.svg";
import img2 from "../../assets/radwa.svg";
import img3 from "../../assets/hassan.svg";
import review from "../../assets/review.svg";

// import SVG

import loction from "../../assets/locationDoctor.svg";

// import Style

import "./ProfileDoctor.css";

const reviews = [
    {
        imgReview: review,
        imageUrl: img1,
        category: "Amany Nasser",
        Customer: "Customer",
        ask: "He is an excellent doctor",
        history: "08 November 2023",
    },
    {
        imgReview: review,
        imageUrl: img2,
        category: "Rawda Khaled",
        Customer: "Customer",
        ask: "He's a good doctor",
        history: "Today",
    },
    {
        imgReview: review,
        imageUrl: img3,
        category: "Ahmed Hassan",
        Customer: "Customer",
        ask: "He's a good doctor",
        history: "Today",
    },
];



const ProfileDoctor = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>

            <div className="my-5 profileDoctor">
                <div className="row overflow-hidden w-100">
                    <div className="ps-5 my-5">
                        <div className="ps-3 ">
                            <h3>Clinic address</h3>
                        </div>
                        <div className="pt-3  d-flex align-items-center     ">
                            <img src={loction} className="pe-3" alt="" />
                            <span className={'textSpan'}>
                                Alexandria, Smouha, Smouha Circle, Zohour Bargout Building,
                                fourth 4, Apartment 2
                            </span>
                        </div>
                        <div className="pt-3 ps-2">
                            <h3 className="mb-3 mt-4">Overview Specialty Dr</h3>
                            <p className={'textP'}>
                                Dr. Rami Shokry, Consultant and Lecturer of Ophthalmology at
                                Kasr Al-Aini Faculty of Medicine - Cairo University. He
                                specializes in vision rehabilitation, vitreoretinal surgery,
                                LASIK, refractive surgery, cataracts, and pediatric
                                ophthalmology. He obtained a doctorate degree in ophthalmology
                                from Cairo University, a master’s degree in ophthalmology from
                                Cairo University, and a fellowship from the Royal College of
                                Surgeons in ophthalmology in the United Kingdom. You can book
                                with Dr. Rami Shukri through the Foodc website
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className={`btn ${'Bttn'}`}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Reservation now
                        </button>
                    </div>


                    <div className="ps-5 pe-5 my-5">
                        <div className="d-flex justify-content-between">
                            <p className="text-dark">Reviews</p>
                            <div className={`${'Bttn2'} btn`}>Add Review</div>
                        </div>
                    </div>
                    <div className="SliderProfile">
                        <div className="container ">
                            <div className={'FavContainer'}>
                                <div className=" ">
                                    <div className={'mainFav'}>
                                        <div>
                                            <div className={'sliderContainer'}>
                                                <Slider {...settings}>
                                                    {reviews.map((review, index) => (
                                                        <>
                                                            <div key={index} className={'item'}>
                                                                <img
                                                                    src={review.imgReview}
                                                                    className="me-auto"
                                                                    alt=""
                                                                />
                                                                <div className="d-flex me-auto justify-content-center align-items-center ">
                                                                    <div>
                                                                        <img
                                                                            src={review.imageUrl}
                                                                            className={'slideImg'}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <p className={'nameP'}>
                                                                        {review.category}
                                                                        <p className={'custom'}>{review.Customer}</p>
                                                                    </p>
                                                                </div>
                                                                <div className="me-auto">
                                                                    <p className={'askP'}>{review.ask}</p>
                                                                    <p className={'historyP'}>{review.history}</p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileDoctor;
