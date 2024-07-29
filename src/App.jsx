import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LanguageProvider from "./context/LanguageProvider";
import OrderProvider from "./context/OrderProvider";
import ConfirmedOrderProvider from "./context/ConfirmedOrderProvider";
import TransitionWrapper from "./hooks/TransitionWrapper";
import Loader from "./components/loader/Loader";
import PromoCode from "./components/AllRestaurants/PromoCode";

const Footer = lazy(() => import("./components/footer/Footer"));
const Login = lazy(() => import("./components/Login/Login"));
const SignUp = lazy(() => import("./components/sign up/SignUp"));
const ForgetPass = lazy(() => import("./components/FrogrtPasss/FrogrtPasss"));
const VerifyEmail = lazy(() => import("./components/VerifyEmail/VerifyEmail"));
const NewPass = lazy(() => import("./components/NewPass/NewPass"));
const SuccessPass = lazy(() =>
  import("./components/SuccessPass/SuccessPassWord")
);
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const ContactUsDone = lazy(() =>
  import("./components/ContactUs/ContactUsDone")
);
const LoginAPartner = lazy(() => import("./components/Login/LoginAPartner"));
const MyAccount = lazy(() => import("./components/Profile/MyAccount"));
const MyOrder = lazy(() => import("./components/Profile/MyOrder"));
const MyAddress = lazy(() => import("./components/Profile/MyAddress"));
const BeAPartner = lazy(() => import("./pages/BeApartner"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const RestaurantItem = lazy(() => import("./pages/RestaurantItem"));
const HomeRestaurants = lazy(() => import("./pages/HomeRestaurants"));
const RestaurantsMenu = lazy(() => import("./pages/RestaurantsMenu"));
const HomeMedical = lazy(() => import("./pages/HomeMedical"));
const Clinics = lazy(() => import("./pages/Clinics"));
const ClinicItem = lazy(() => import("./pages/ClinicItem"));
const ShowClinicsCategoryById = lazy(() =>
  import("./pages/ShowClinicsByCategory")
);
const ProfileDoctors = lazy(() => import("./pages/ProfileDoctors"));
const OrderPage = lazy(() => import("./components/Order/OrderPage"));
const ConfirmBooking = lazy(() =>
  import("./components/ConfirmBooking/ConfirmBooking")
);

const OrderSummary = lazy(() =>
  import("./components/OrderSummary/OrderSummary")
);
const TrackOrders = lazy(() => import("./pages/TrackOrders"));
const TrackedOrderItem = lazy(() =>
  import("./components/TrackOrders/TrackedOrderItem")
);
const RestaurantCategory = lazy(() =>
  import("./components/FavCuisines/RestaurantCategory")
);
const ProtectedRoute = lazy(() =>
  import("./components/ProtectedRoute/ProtectedRoute")
);
const MyReservations = lazy(() =>
  import("./components/Profile/MyReservations")
);
const WhislistClinics = lazy(() => import("./pages/WhislitClinics"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
function App() {
  return (
    <LanguageProvider>
      <ConfirmedOrderProvider>
        <OrderProvider>
          <Router>
            <div className="App">
              <Suspense fallback={<Loader />}>
                <TransitionWrapper>
                  <Routes>
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
                      path="/whislistClinics"
                      element={
                        <ProtectedRoute>
                          <WhislistClinics />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Clinics"
                      element={
                        <ProtectedRoute>
                          <Clinics />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/Clinics/:id"
                      element={
                        <ProtectedRoute>
                          <ClinicItem />
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
                      path="/profileDoctor/:id"
                      element={
                        <ProtectedRoute>
                          <ProfileDoctors />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/confirmBooking"
                      element={
                        <ProtectedRoute>
                          <ConfirmBooking />
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
                    />

                    <Route path="/Login" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Forgot_password" element={<ForgetPass />} />
                    <Route path="/VerifyEmail" element={<VerifyEmail />} />
                    <Route path="/NewPass" element={<NewPass />} />
                    <Route path="/SuccessPass" element={<SuccessPass />} />
                    <Route
                      path="/AboutUs"
                      element={
                        <ProtectedRoute>
                          <AboutUs />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                    path="/promocodes"
                    element={
                      <ProtectedRoute>
                      <PromoCode/>
                      </ProtectedRoute>
                    }
                    />
                    <Route
                      path="/ContactUs"
                      element={
                        <ProtectedRoute>
                          <ContactUs />
                        </ProtectedRoute>
                      }
                    />
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
                    />
                    <Route
                      path="/MyAccount"
                      element={
                        <ProtectedRoute>
                          <MyAccount />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/MyReservations"
                      element={
                        <ProtectedRoute>
                          <MyReservations />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/MyOrder"
                      element={
                        <ProtectedRoute>
                          <MyOrder />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/MyAddress"
                      element={
                        <ProtectedRoute>
                          <MyAddress />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </TransitionWrapper>
              </Suspense>
              <Footer />
            </div>
          </Router>
        </OrderProvider>
      </ConfirmedOrderProvider>
    </LanguageProvider>
  );
}

export default App;
