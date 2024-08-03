import { useTranslation } from "react-i18next";
import "./SearchRestaurants.css";
import { useEffect, useState } from "react";
import useScroll from "../../hooks/useScroll";
import { useLocation } from "react-router-dom";
import { useSearchRestaurants } from "./useSearchRestaurants";

function SearchRestaurants({
  pageAddress,
  Pagetext,
  icon,
  placeholder,
  btnText,
  locIcon,
  onSearchResults,
  type,
}) {
  const [name, setName] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { t } = useTranslation();
  const scrollPosition = useScroll();
  const { pathname } = useLocation();

  // console.log(scrollPosition)
  const { data, isLoading, isError, error, refetch } = useSearchRestaurants(
    name,
    type
  );

  // This effect will pass the search results to the parent component whenever data is updated
  useEffect(() => {
    if (data && !isLoading && !isError) {
      onSearchResults(data.data);
    }
  }, [data, isLoading, isError, onSearchResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (name.trim() === "") return; // Ignore empty search
    refetch(); // Trigger the query refetch
    window.scrollTo(0, 742);
  };


  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const results = await searchRestaurants(name, type);
  //     onSearchResults(results.data);
  //     window.scrollTo(0, 742);
  //   } catch (error) {
  //     console.error("Error searching for restaurants:", error);
  //     setError("Failed to search for restaurants");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      <div
        className={`d-flex flex-column justify-content-center align-items-center inputStyle`}
      >
        <div className="heading text-white text-center">
          <h1 className="mb-2">{pageAddress}</h1>
          <p className={`pStyle text-white`}>{Pagetext}</p>
        </div>
        <form
          onSubmit={handleSearch}
          className={`position-relative formStyle form-control rounded-pill bg-white py-2 px-4 `}
        >
          <div>
            <input
              type="text"
              className="form-control w-75 border-0 font-monospace"
              placeholder={placeholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <img src={icon} className="locationIcon2" alt="" />
          </div>
          <button
            type="submit"
            className="btn rounded-pill p-2 position-absolute top-0 end-0 text-white px-3"
          >
            {isLoading ? "searching..." : btnText}
            <img src={locIcon} className="locationIcon" alt="" />
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchRestaurants;
