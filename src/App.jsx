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
import MyAccount from "./components/Profile/MyAccount";
import MyOrder from "./components/Profile/MyOrder";
import MyAddress from "./components/Profile/MyAddress";
import BeAPartner from "./pages/BeApartner";
import Restaurants from "./pages/Restaurants";
import RestaurantItem from "./pages/RestaurantItem";
import HomeRestaurants from "./pages/HomeRestaurants";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import HomeMedical from "./pages/HomeMedical";
import Clinics from "./pages/Clinics";
import ClinicItem from "./pages/ClinicItem";
import ShowClinicsCategoryById from "./pages/ShowClinicsByCategory";
import ProfileDoctors from "./pages/ProfileDoctors";
import LanguageProvider from "./context/LanguageProvider";
import OrderPage from "./components/Order/OrderPage";
import OrderProvider from "./context/OrderProvider";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import ConfirmedOrderProvider from "./context/ConfirmedOrderProvider";
import TrackOrders from "./pages/TrackOrders";
import TrackedOrderItem from "./components/TrackOrders/TrackedOrderItem";
import RestaurantCategory from "./components/FavCuisines/RestaurantCategory";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MyReservations from "./components/Profile/MyReservations";
import NotFound from "./components/NotFound/NotFound";
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
                <Route
                  path="/HomeRestaurants"
                  element={
                    <ProtectedRoute>
                      <HomeRestaurants />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/HomeMedical"
                  element={
                    <ProtectedRoute>
                      <HomeMedical />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/CLinics"
                  element={
                    <ProtectedRoute>
                      <Clinics />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/ShowClinicsCategoryById/:id"
                  element={
                    <ProtectedRoute>
                      <ShowClinicsCategoryById />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/CLinics/:id"
                  element={
                    <ProtectedRoute>
                      <ClinicItem />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profileDoctor/:id"
                  element={
                    <ProtectedRoute>
                      <ProfileDoctors />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/restaurants"
                  element={
                    <ProtectedRoute>
                      <Restaurants />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/restaurants/:id"
                  element={
                    <ProtectedRoute>
                      <RestaurantItem />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/restaurants/:id/menu"
                  element={
                    <ProtectedRoute>
                      <RestaurantsMenu />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/restaurants/:id/menu/orderPage"
                  element={
                    <ProtectedRoute>
                      <OrderPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/restaurants/:id/menu/orderPage/:orderId"
                  element={
                    <ProtectedRoute>
                      <OrderSummary />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/categories/:id"
                  element={
                    <ProtectedRoute>
                      <RestaurantCategory />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/trackOrders"
                  element={
                    <ProtectedRoute>
                      <TrackOrders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/trackOrders/:id"
                  element={
                    <ProtectedRoute>
                      <TrackedOrderItem />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/BecomeAPartner"
                  element={
                    <ProtectedRoute>
                      <BeAPartner />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route path="/Login" element={<Login />} />{" "}
                <Route path="/Sign Up" element={<SignUp />} />{" "}
                <Route path="/Forgot_password" element={<ForgetPass />} />{" "}
                <Route path="/VerifyEmail" element={<VerifyEmail />} />{" "}
                <Route path="/NewPass" element={<NewPass />} />{" "}
                <Route path="/SuccessPass" element={<SuccessPass />} />{" "}
                <Route
                  path="/AboutUs"
                  element={
                    <ProtectedRoute>
                      <AboutUs />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route
                  path="/ContactUs"
                  element={
                    <ProtectedRoute>
                      <ContactUs />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route
                  path="/ContactUs/ContactUsDone"
                  element={
                    <ProtectedRoute>
                      <ContactUsDone />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/LoginAPartner"
                  element={
                    <ProtectedRoute>
                      <LoginAPartner />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route
                  path="/MyAccount"
                  element={
                    <ProtectedRoute>
                      <MyAccount />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route
                  path="/MyReservations"
                  element={
                    <ProtectedRoute>
                      <MyReservations />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route
                  path="/MyOrder"
                  element={
                    <ProtectedRoute>
                      <MyOrder />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route
                  path="/MyAddress"
                  element={
                    <ProtectedRoute>
                      <MyAddress />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route path="*" element={<NotFound />} />{" "}
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
