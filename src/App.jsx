import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";

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
import ShowAllClinics from "./pages/ShowAllClinics";
import ProfileDoctors from "./pages/ProfileDoctors";
import LanguageProvider from "./context/LanguageProvider";
import OrderPage from "./components/Order/OrderPage";
import OrderProvider from "./context/OrderProvider";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import ConfirmedOrderProvider from "./context/ConfirmedOrderProvider";
import TrackOrders from "./pages/TrackOrders";
import TrackedOrderItem from "./components/TrackOrders/TrackedOrderItem";
import RestaurantCategory from "./components/FavCuisines/RestaurantCategory";
function App() {
    return (
        <LanguageProvider>
            <ConfirmedOrderProvider>
                <OrderProvider>
                    <Router>
                        <div className="App">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate replace to="/HomeRestaurants" />}
                                />
                                <Route
                                    path="/"
                                    element={<Navigate replace to="/HomeRestaurants" />}
                                />
                                <Route path="/HomeRestaurants" element={<HomeRestaurants />} />
                                <Route path="/HomeMedical" element={<HomeMedical />} />
                                <Route path="/CLinics" element={<Clinics />} />
                                <Route path="/CLinics/:id" element={<ClinicItem />} />
                                <Route path="//profileDoctor" element={<ProfileDoctors />} />
                                <Route path="/restaurants" element={<Restaurants />} />
                                <Route path="/restaurants/:id" element={<RestaurantItem />} />
                                <Route
                                    path="/restaurants/:id/menu"
                                    element={<RestaurantsMenu />}
                                />
                                <Route
                                    path="/restaurants/:id/menu/orderPage"
                                    element={<OrderPage />}
                                />
                                <Route
                                    path="/restaurants/:id/menu/orderPage/:orderId"
                                    element={<OrderSummary />}
                                />
                                <Route
                                    path="/categories/:id"
                                    element={<RestaurantCategory />}
                                />
                                <Route path="/trackOrders" element={<TrackOrders />} />
                                <Route path="/trackOrders/:id" element={<TrackedOrderItem />} />
                                <Route path="/BecomeAPartner" element={<BeAPartner />} />{" "}
                                <Route path="/Login" element={<Login />} />{" "}
                                <Route path="/Sign Up" element={<SignUp />} />{" "}
                                <Route path="/Forgot_password" element={<ForgetPass />} />{" "}
                                <Route path="/VerifyEmail" element={<VerifyEmail />} />{" "}
                                <Route path="/NewPass" element={<NewPass />} />{" "}
                                <Route path="/SuccessPass" element={<SuccessPass />} />{" "}
                                <Route path="/AboutUs" element={<AboutUs />} />{" "}
                                <Route path="/ContactUs" element={<ContactUs />} />{" "}
                                <Route
                                    path="/ContactUs/ContactUsDone"
                                    element={<ContactUsDone />}
                                />
                                <Route path="/LoginAPartner" element={<LoginAPartner />} />{" "}
                                <Route path="/MyAccount" element={<MyAccount />} />{" "}
                                <Route path="/MyOrder" element={<MyOrder />} />{" "}
                                <Route path="/MyAddress" element={<MyAddress />} />{" "}
                            </Routes>
                            <Footer />
                        </div>
                    </Router>
                </OrderProvider>
            </ConfirmedOrderProvider>
        </LanguageProvider>
    );
}
export default App;
