import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/sign up/SignUp";
import ForgetPass from "./components/FrogrtPasss/FrogrtPasss";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import NewPass from "./components/NewPass/NewPass";
import SuccessPass from "./components/SuccessPass/SuccessPassWord";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import ContactUsDone from "./components/ContactUs/ContactUsDone";
import LoginAPartner from "./components/Login/LoginAPartner";
import MyAccount from "./components/ProfileResturant/MyAccount";
import MyOrder from "./components/ProfileResturant/MyOrder";
import MyAddress from "./components/ProfileResturant/MyAddress";
import BeAPartner from "./pages/BeApartner";
import Restaurants from "./pages/Restaurants";
import RestaurantItem from "./pages/RestaurantItem";
import HomeRestaurants from "./pages/HomeRestaurants";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import HomeMedical from "./pages/HomeMedical";
import Clinics from "./pages/Clinics";
import ClinicItem from "./pages/ClinicItem";
import ProfileDoctors from './pages/ProfileDoctors';
import LanguageProvider from "./context/LanguageProvider";
function App() {
    return (
        <LanguageProvider>
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate replace to="/HomeRestaurants" />} />
                    <Route path="/HomeRestaurants" element={< HomeRestaurants />} />
                    <Route path="/HomeMedical" element={< HomeMedical />} />
                    <Route path="/CLinics" element={< Clinics />} />
                    <Route path="/CLinics/:id" element={< ClinicItem />} />
                    <Route path="//profileDoctor" element={< ProfileDoctors />} />
                    <Route path="/restaurants" element={< Restaurants />} />
                    <Route path="/restaurants/:id" element={<RestaurantItem />} />
                    <Route path="/restaurants/:id/menu" element={<RestaurantsMenu />} />
                    <Route path="/BecomeAPartner" element={<BeAPartner />} />{" "}
                    <Route path="/Login" element={<Login />} />{" "}
                    <Route path="/Sign Up" element={<SignUp />} />{" "}
                    <Route path="/Forgot_password" element={<ForgetPass />} />{" "}
                    <Route path="/VerifyEmail" element={<VerifyEmail />} />{" "}
                    <Route path="/NewPass" element={<NewPass />} />{" "}
                    <Route path="/SuccessPass" element={<SuccessPass />} />{" "}
                    <Route path="/AboutUs" element={<AboutUs />} />{" "}
                    <Route path="/ContactUs" element={<ContactUs />} />{" "}
                    <Route path="/ContactUs/ContactUsDone" element={<ContactUsDone />} />{" "}
                    <Route path="/LoginAPartner" element={<LoginAPartner />} />{" "}
                    <Route path="/MyAccount" element={<MyAccount />} />{" "}
                    <Route path="/MyOrder" element={<MyOrder />} />{" "}
                    <Route path="/MyAddress" element={<MyAddress />} />{" "}
                </Routes>{" "}
                <Footer />
            </div>{" "}
        </Router>
        </LanguageProvider>
    );
}

export default App;
