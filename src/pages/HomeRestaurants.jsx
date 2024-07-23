
import { Helmet } from "react-helmet";
import HeroRestaurant from "../components/Hero/HeroRestaurant";
import HowWorkHomeRestaurant from "../components/How-Work-Home/HowWorkHomeRestaurant.jsx";
import FavCuisinesRestaurant from "../components/FavCuisines/FavCuisinesRestaurant.jsx";
import NavToPartnerRestaurant from "../components/NavToPartner/NavToPartnerRestaurant.jsx";
import DownloadAppRestaurant from "../components/DownloadApp/DownloadAppRestaurant.jsx";
import Explore from "../components/Explore/Explore.jsx";
import NavRestaurants from "../components/NavRestaurants/NavRestaurants.jsx";
import { Toaster } from "react-hot-toast";



function HomeRestaurants() {

    return (
        <main className="HomeRestaurants">
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <Helmet>
                <title>insta Order</title>
                <meta name="description" content="Welcome to our service. Here you can find the best restaurants and clinics." />
            </Helmet>
            <div className="Main_bg">
                <NavRestaurants />
                <HeroRestaurant />
            </div>
            <HowWorkHomeRestaurant />
            <FavCuisinesRestaurant />
            <NavToPartnerRestaurant />
            <div className="bgEndHome">
                <Explore />
                <DownloadAppRestaurant />
            </div>
        </main>
    );
}

export default HomeRestaurants
