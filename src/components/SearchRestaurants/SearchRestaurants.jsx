import "./SearchRestaurants.css";


function SearchRestaurants({
    pageAddress,
    Pagetext,
    icon,
    placeholder,
    btnText,
    locIcon,
}) {
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
                    className={`position-relative formStyle form-control rounded-pill bg-white py-2 px-4 `}
                >
                    <div>
                        <input
                            type="text"
                            className="form-control w-75 border-0 font-monospace"
                            placeholder={placeholder}
                        />
                        <img src={icon} className='locationIcon2' alt="" />
                    </div>
                    <button className="btn rounded-pill p-2 position-absolute top-0 end-0 text-white px-3">
                        {btnText}
                        <img src={locIcon} className='locationIcon' alt="" />
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchRestaurants
