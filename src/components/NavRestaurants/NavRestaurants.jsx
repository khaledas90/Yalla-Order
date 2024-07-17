import React, { useState } from "react";
import "./NavRestaurants.css";
import logoImg from "../../assets/Insta Order.svg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, NavLink } from "react-router-dom";
import FavRestaurant from "../favorite-restaurants/FavRestaurant";
import Bag from "../bag/Bag";
import LanguageMenu from "../LanguageSwitch/LanguageMenu";
import ProfileMenu from "../ProfileResturant/ProfileMenu";
// import { useOrders } from '../../context/OrderProvider';
import { fetchFavoritesList } from "../../services/apiRestaurant";
function NavRestaurants() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const {getCount} = useOrders();
  const [dropdownOpen, setDropdownOpen] = useState({
    favorite: false,
    bag: false,
    language: false,
    profile: false,
  });
  const [loadingFavorites, setLoadingFavorites] = useState(false);
  const [favoritesError, setFavoritesError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loadingBagItems, setLoadingBagItems] = useState(false);
  const [bagItemsError, setBagItemsError] = useState(null);
  const [bagItems, setBagItems] = useState([]);

  const handleFetchFavorites = async () => {
    try {
      setLoadingFavorites(true);
      setFavoritesError(null);

      const data = await fetchFavoritesList();

      setFavorites(data.data[0].items);
      console.log("Favorites list:", data.data[0].items);
    } catch (error) {
      console.error("Error fetching favorites list:", error);
      setFavoritesError("Failed to fetch favorites list");
    } finally {
      setLoadingFavorites(false);
    }
  };
  const favCount = favorites.length;
  const bagCount = bagItems.length;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen({
      ...dropdownOpen,
      [dropdown]: !dropdownOpen[dropdown],
    });
  };

  return (
    <div className="navBar">
      <div className="logo">
        <Link to="/">
          <img src={logoImg} alt="insta order" />
        </Link>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/HomeRestaurants">Home</NavLink>
        </li>
        <li>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </li>
        <li>
          <NavLink to="/BecomeAPartner">Become a Partner</NavLink>
        </li>
        <li>
          <NavLink to="/trackOrders">Track Orders</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs">About Us</NavLink>
        </li>
      </ul>
      <div className="icons">
        {["favorite", "bag", "language", "profile"].map((icon) => (
          <div className="icon" key={icon} onClick={() => toggleDropdown(icon)}>
            {icon === "favorite" && (
              <div className="iconContainer" onClick={handleFetchFavorites}>
                <FavoriteBorderOutlinedIcon />
                {favCount !== 0 && <span className="Count">{favCount}</span>}
              </div>
            )}
            {icon === "bag" && (
              <div className="iconContainer">
                <ShoppingBagOutlinedIcon />{" "}
                {bagCount !== 0 && <span className="Count">{bagCount}</span>}
              </div>
            )}
            {icon === "language" && <LanguageOutlinedIcon />}
            {icon === "profile" && <AccountCircleOutlinedIcon />}
            <div className={`dropdown ${dropdownOpen[icon] ? "show" : ""}`}>
              {icon === "favorite" && (
                <FavRestaurant
                  favorites={favorites}
                  loadingFavorites={loadingFavorites}
                  favoritesError={favoritesError}
                />
              )}
              {icon === "bag" && (
                <Bag
                  bagItems={bagItems}
                  setBagItems={setBagItems}
                  loadingBagItems={loadingBagItems}
                  setLoadingBagItems={setLoadingBagItems}
                  bagItemsError={bagItemsError}
                  setBagItemsError={setBagItemsError}
                />
              )}
              {icon === "language" && <LanguageMenu />}
              {icon === "profile" && <ProfileMenu />}
            </div>
          </div>
        ))}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </div>
  );
}

export default NavRestaurants;
