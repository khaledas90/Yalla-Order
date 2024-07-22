
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import ClinicsItems from "../components/ClinicsItem/ClinicsItem";
import NavRestaurants from "../components/NavRestaurants/NavRestaurants";
function ClinicItem() {
  return (
    <div className="Clinics ClinicsItems">
      <Helmet>
        <title>Clinics</title>
        <meta name="description" content="Discover the best Clinic around you." />
      </Helmet>
      <div className="Main_bg">
        <NavRestaurants />
        <SearchRestaurants
          pageAddress={"Clinics"}
          Pagetext={"Select your area to see the clinics near you"}
          placeholder={"Find your Location.."}
          btnText={"View Doctors"}
          icon={Search}

        />
      </div>
      <ClinicsItems />
    </div>
  );
}

export default ClinicItem;
