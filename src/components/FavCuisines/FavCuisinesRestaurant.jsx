import Slider from "react-slick";
import "./FavCuisines.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import burger from "../../assets/burger.png";
import pizaa from "../../assets/fast food 1.png";
import Chinese from "../../assets/sushi.png";
import Dessert from "../../assets/donut.png";
import Fries from "../../assets/Group.png";
import sandwich from "../../assets/Hot Dog.png";
import back from "../../assets/Group 1171276175 1.png";
import { fetchCategories } from "../../services/apiRestaurant";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function FavCuisinesRestaurant() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categoriesError, setCategoriesError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        setLoadingCategories(true);
        setCategoriesError(null);

        const data = await fetchCategories();

        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories list:", error);
        setCategoriesError("Failed to fetch categories list");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategoriesList();
  }, []);
  if (loadingCategories) return <Loader />;
  return (
    <div className={`FavContainer ${lang === "ar" ? "rtl" : ""}`}>
      <div className="container">
        <div className="mainFav">
          <img className="back" src={back} alt="back" />
          <h1>{t("Customer Favorite Cuisines")}</h1>
          <div className="slider-container">
            <Slider {...settings}>
              {categories?.map((category) => (
                <Link
                  to={`/categories/${category.id}?categoryName=${category.name}`}
                  key={category.id}
                >
                  <div>
                    <div className="item">
                      <div>
                        <img src={category.logo} alt="" />
                      </div>
                      <p>{category.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavCuisinesRestaurant;
