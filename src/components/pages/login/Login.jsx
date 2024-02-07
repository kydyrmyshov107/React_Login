import { useState } from "react";
import scss from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url =
  "https://api.elchocrud.pro/api/v1/afc5f46e0ccea647582b890031c0c221/newusers";
export const Login = () => {
  const [name, setValue] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNavigate = async () => {
    if (name === "" || password === "") {
      alert("please write @email and password");
    } else {
      const response = await axios.get(url);
      const responseData = response.data;

      const findUser = responseData.find(
        (item) => item.name === name && item.password === password
      );
      if (findUser) {
        localStorage.setItem("isAuth", "" + findUser._id);
        navigate("/userhome");
      } else {
        alert("wrong password or name");
        console.log("user is not found");
      }
    }
  };

  const navigateRegistration = () => {
    navigate("/registration");
  };
  return (
    <div className={scss.content}>
      <div className={scss.form}>
        <p className={scss.heading}>Login</p>
        <input
          className={scss.input}
          value={name}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          className={scss.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button onClick={handleNavigate} className={scss.btn}>
          login
        </button>
        <button onClick={navigateRegistration}>registration</button>
      </div>
    </div>
  );
};

export default Login;
