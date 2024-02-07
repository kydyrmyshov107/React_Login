import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    const isAuthBoolean = Boolean(isAuth);
    console.log(isAuthBoolean);
    console.log(!isAuth);

    if (!!isAuth && pathname === "/login") {
      navigate("/");
    } else if (!!isAuth && pathname === "/registration") {
      navigate("/userhome");
    } else if (!isAuth && pathname === "/") {
      navigate("/login");
    } else if (!isAuth && pathname === "/userhome") {
      navigate("/login");
    }
  }, [pathname]);

  return children;
};

export default PrivateRoute;
