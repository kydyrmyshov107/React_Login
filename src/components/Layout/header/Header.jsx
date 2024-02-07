import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const url =
  "https://api.elchocrud.pro/api/v1/afc5f46e0ccea647582b890031c0c221/newusers";

const Header = () => {
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();
  const navigateToLogin = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const getUserProfile = async () => {
    const response = await axios.get(url);

    const userProfile = response.data;
    const getUserIdLocalStorage = localStorage.getItem("isAuth");
    const findUser = userProfile.find(
      (item) => item._id === +getUserIdLocalStorage
    );
    if (findUser) {
      setUserProfile(findUser);
    } else {
      localStorage.removeItem("isAuth");
      navigate("/login");
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <div className={style.logo}>
            <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt=""
            />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/userhome">Users</Link>
              </li>
            </ul>
          </nav>
          <div className={style.auth}>
            <div className={style.user_info}>
              <p>new user profile:{userProfile.name}</p>
              <button className={style.button} onClick={navigateToLogin}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
