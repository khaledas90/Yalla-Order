import React from 'react'
import "./Hero.css";
import SearchRestaurants from '../SearchRestaurants/SearchRestaurants';
import heroImg from "../../assets/Group 1171276423.png";
import ship from '../../assets/Group 1171276204.png'
import percentage from '../../assets/Component 8.png'
import market from '../../assets/Component 9.png'
import restaurantImg from '../../assets/Component 10.png'
import locationOne from '../../assets/Location-One.svg';
import location from '../../assets/Location.svg';
import { Col, Container, Row } from "react-bootstrap";

function HeroRestaurant() {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div className="content">
                            <div className='left-hero'>
                                <h1 className='text-center text-lg-start m-auto'>A unique experience for food lovers</h1>
                                <div className='inputDiv inputDivHome '>
                                    <SearchRestaurants
                                        placeholder={"Find your Location.."}
                                        btnText={"Branch Menu"}
                                        icon={locationOne}
                                        locIcon={location}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <div className="content contentImg">

                            <img src={heroImg} className='w-100' alt='heroImg' />

                        </div>
                    </div>
                </div>
            </div>
            <div className='features'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className='cardIcons'>
                                <Row className="g-3">
                                    <Col xs={6} lg={3} md={3} className='d-flex justify-content-center ' >
                                        <div className='item d-flex align-items-center'>
                                            <img src={ship} alt='features' />
                                            <p>
                                                Fastest
                                                Delivery
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={3} md={3} className='d-flex justify-content-center'>
                                        <div className='item d-flex align-items-center'>
                                            <img src={percentage} alt='features' />
                                            <p>Daily
                                                Discount</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={3} md={3} className='d-flex justify-content-center'>
                                        <div className='item d-flex align-items-center'>
                                            <img src={market} alt='features' />
                                            <p>100+
                                                Restaurants</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={3} md={3} className='d-flex justify-content-center'>
                                        <div className='item d-flex align-items-center'>
                                            <img src={restaurantImg} alt='features' />
                                            <p>100+
                                                Cuisines</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default HeroRestaurant
