// ReactHooks
import { useEffect, useState } from "react";

const useNav = () => {
  const [navStatus, setNavStatus] = useState(false);

  const [loginBtn, setLoginBtn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setNavStatus(true);

        setLoginBtn(true);
      } else {
        setNavStatus(false);

        setLoginBtn(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up after component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return { loginBtn, navStatus };
};

export default useNav;
