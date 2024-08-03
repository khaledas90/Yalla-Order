import React, { useEffect, useState, useRef } from "react";
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
import useBagItems from "../bag/useBagItems";

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
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const { bagItems, loadingBagItems, bagItemsError, removeOrder, isRemoving } = useBagItems();

  const favoriteRef = useRef(null);
  const bagRef = useRef(null);
  const languageRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    if (!token || token === "undefined") {
      setFavorites([]);
      return;
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
  }, [token, setFavorites, setLoadingFavorites, setFavoritesError]);

  const favCount = favorites.length;
  const bagCount = bagItems?.length;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen({
      ...dropdownOpen,
      [dropdown]: !dropdownOpen[dropdown],
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        favoriteRef.current && !favoriteRef.current.contains(event.target) &&
        bagRef.current && !bagRef.current.contains(event.target) &&
        languageRef.current && !languageRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target)
      ) {
        setDropdownOpen({
          favorite: false,
          bag: false,
          language: false,
          profile: false,
        });
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="navBar">
      <div className="logo">
        <Link to="/">
          <img src={logoImg} alt="insta order" />
        </Link>
      </div>
      {token && token !== "undefined" ? (
        <ul className={`nav-links ${lang === "ar" ? "ar" : ""} ${menuOpen ? "active" : ""}`}>
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
        {token && token !== "undefined"
          ? ["favorite", "bag", "language", "profile"].map((icon) => (
            <div
              className="icon"
              key={icon}
              onClick={() => toggleDropdown(icon)}
              ref={
                icon === "favorite" ? favoriteRef
                  : icon === "bag" ? bagRef
                    : icon === "language" ? languageRef
                      : profileRef
              }
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
                    loadingBagItems={loadingBagItems}
                    bagItemsError={bagItemsError}
                    removeOrder={removeOrder}
                    isRemoving={isRemoving}
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
              ref={icon === "favorite" ? favoriteRef : languageRef}
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
