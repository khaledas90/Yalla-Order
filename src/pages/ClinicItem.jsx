import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import Header from "../components/header/Header";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import LocDoctor from "../assets/locatin.svg";
import ClinicsItems from "../components/ClinicsItem/ClinicsItem";
function ClinicItem() {
  return (
    <div className="Clinics ClinicsItems">
      <Helmet>
        <title>Clinics</title>
        <meta
          name="description"
          content="Discover the best Clinic around you."
        />
      </Helmet>
      <div className="Main_bg">
        <Header
          MainPage={"Clinic"}
          IconOne={<FavoriteBorderOutlinedIcon />}
          IconTwo={<LanguageOutlinedIcon />}
          IconThree={<ShoppingBagOutlinedIcon />}
        />

        <SearchRestaurants
          Pagetext={"Select your area to see the clinics near you"}
          pageAddress={"Clinics"}
          placeholder={"Find your Location.."}
          btnText={"View Doctors"}
          icon={Search}
          locIcon={LocDoctor}
        />
      </div>
      <ClinicsItems />
    </div>
  );
}

export default ClinicItem;
