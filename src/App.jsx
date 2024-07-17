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
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {


    return (
        <LanguageProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/HomeRestaurants" />} />
                        <Route path="/HomeRestaurants" element={<ProtectedRoute><HomeRestaurants /></ProtectedRoute>} />
                        <Route path="/HomeMedical" element={<ProtectedRoute><HomeMedical /></ProtectedRoute>} />
                        <Route path="/CLinics" element={<ProtectedRoute><Clinics /> </ProtectedRoute>} />
                        <Route path="/CLinics/:id" element={<ProtectedRoute><ClinicItem /></ProtectedRoute>} />
                        <Route path="/profileDoctor" element={<ProtectedRoute><ProfileDoctors /></ProtectedRoute>} />
                        <Route path="/restaurants" element={<ProtectedRoute><Restaurants /></ProtectedRoute>} />
                        <Route path="/restaurants/:id" element={<ProtectedRoute><RestaurantItem /></ProtectedRoute>} />
                        <Route path="/restaurants/:id/menu" element={<ProtectedRoute><RestaurantsMenu /></ProtectedRoute>} />
                        <Route path="/BecomeAPartner" element={<ProtectedRoute><BeAPartner /></ProtectedRoute>} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/SignUp" element={<SignUp />} />
                        <Route path="/Forgot_password" element={<ForgetPass />} />
                        <Route path="/VerifyEmail" element={<VerifyEmail />} />
                        <Route path="/NewPass" element={<NewPass />} />
                        <Route path="/SuccessPass" element={<SuccessPass />} />
                        <Route path="/AboutUs" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
                        <Route path="/ContactUs" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
                        <Route path="/ContactUs/ContactUsDone" element={<ProtectedRoute><ContactUsDone /></ProtectedRoute>} />
                        <Route path="/LoginAPartner" element={<LoginAPartner />} />
                        <Route path="/MyAccount" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
                        <Route path="/MyOrder" element={<ProtectedRoute><MyOrder /></ProtectedRoute>} />
                        <Route path="/MyAddress" element={<ProtectedRoute><MyAddress /></ProtectedRoute>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}



export default App;
