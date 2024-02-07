import { Route, Routes, useLocation } from "react-router-dom";
import scss from "./Layout.module.scss";
import Home from "../pages/home/Home";
import UserHome from "../pages/userhome/UserHome";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  const { pathname } = useLocation();

  if (pathname === "/login") {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  } else if (pathname === "/registration") {
    return (
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    );
  } else {
    return (
      <div className={scss.Layout}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userhome" element={<UserHome />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
};

export default Layout;
