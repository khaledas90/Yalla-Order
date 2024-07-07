import burgerImg from "../../assets/Group 1171276508.png";
import './HowWorkHome.css';
function HowWorkHomeRestaurant() {
    return (
        <div className='work'>
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div>
                            <img src={burgerImg} alt='burger' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='details text-center text-lg-start'>
                            <h2 className='header'>How We Work</h2>
                            <h3 className="subHeader">
                                <span>We Value</span> Our
                                Clients & Customers
                            </h3>
                            <ul>
                                <li>Register or login in our portal</li>
                                <li>Search your location</li>
                                <li>Find your preferred restaurant</li>
                                <li>Choose your cuisine</li>
                                <li>Get your food delivered at your address</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorkHomeRestaurant
