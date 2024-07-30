import React, { useEffect, useState } from "react";
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
import ProfileMenuRestaurant from "../Profile/ProfileMenuResturant";
import { fetchFavoritesList } from "../../services/apiRestaurant";
import { useTranslation } from "react-i18next";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

function NavRestaurants() {
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    favorite: false,
    bag: false,
    language: false,
    profile: false,
  });
  const [loadingFavorites, setLoadingFavorites] = useState(false);
  const [favoritesError, setFavoritesError] = useState(null);
  const [favorites, setFavorites] = useLocalStorageState([], "FavItems");
  const [loadingBagItems, setLoadingBagItems] = useState(false);
  const [bagItemsError, setBagItemsError] = useState(null);
  const [bagItems, setBagItems] = useLocalStorageState([], "BagItems");
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");

  useEffect(() => {
    if (!token) {
      return
    } else {
      const fetchFavorites = async () => {
        try {
          setLoadingFavorites(true);
          setFavoritesError(null);

          const data = await fetchFavoritesList();

          setFavorites(data.data[0].items);
        } catch (error) {

          setFavoritesError("Failed to fetch favorites list");
        } finally {
          setLoadingFavorites(false);
        }
      };
      fetchFavorites();
    }
  }, []);
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
      {token ? (
        <ul
          className={`nav-links ${lang === "ar" ? "ar" : ""} ${menuOpen ? "active" : ""
            }`}
        >
          <li>
            <NavLink to="/HomeRestaurants">{t(`Home`)}</NavLink>
          </li>
          <li>
            <NavLink to="/restaurants">{t("restaurants")}</NavLink>
          </li>
          <li>
            <NavLink to="/BecomeAPartner">{t("Become a Partner")}</NavLink>
          </li>
          <li>
            <NavLink to="/trackOrders">{t("track order")}</NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs">{t("About us")}</NavLink>
          </li>
        </ul>
      ) : null}

      <div className="icons">
        {token
          ? ["favorite", "bag", "language", "profile"].map((icon) => (
            <div
              className="icon"
              key={icon}
              onClick={() => toggleDropdown(icon)}
            >
              {icon === "favorite" && (
                <div className="iconContainer">
                  <FavoriteBorderOutlinedIcon />
                  {favCount !== 0 && (
                    <span className="Count">{favCount}</span>
                  )}
                </div>
              )}
              {icon === "bag" && (
                <div className="iconContainer">
                  <ShoppingBagOutlinedIcon />
                  {bagCount !== 0 && (
                    <span className="Count">{bagCount}</span>
                  )}
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
                {icon === "profile" && <ProfileMenuRestaurant />}
              </div>
            </div>
          ))
          : ["favorite", "language"].map((icon) => (
            <div
              className="icon"
              key={icon}
              onClick={() => toggleDropdown(icon)}
            >
              {icon === "favorite" && (
                <div className="iconContainer">
                  <FavoriteBorderOutlinedIcon />
                  {favCount !== 0 && (
                    <span className="Count">{favCount}</span>
                  )}
                </div>
              )}
              {icon === "language" && <LanguageOutlinedIcon />}
              <div className={`dropdown ${dropdownOpen[icon] ? "show" : ""}`}>
                {icon === "favorite" && (
                  <FavRestaurant
                    favorites={favorites}
                    loadingFavorites={loadingFavorites}
                    favoritesError={favoritesError}
                  />
                )}
                {icon === "language" && <LanguageMenu />}
              </div>
            </div>
          ))}
        {!token && (
          <div className="icon">
            <Link to="/login">
              <button className="loginBtn">Login</button>
            </Link>
          </div>
        )}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </div>
  );
}

export default NavRestaurants;
