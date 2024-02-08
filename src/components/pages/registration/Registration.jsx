import { useState } from "react";
import scss from "./Registration.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url =
  "https://api.elchocrud.pro/api/v1/afc5f46e0ccea647582b890031c0c221/newusers";


const Registration = () => {
  const [name, setInputValueName] = useState("");
  const [password, setInputPassword] = useState("");
  const navigate = useNavigate();

  const handleNavigate = async () => {
    if (name === "" || password === "") {
      alert("please write @email and password");
    } else {
      const reponse = await axios.get(url);
      const reponseData = reponse.data;

      const drawUser = reponseData.find(
        (item) => item.name === name && item.ipassword === password
      );
      if (drawUser) {
        navigate("/userhome");
      } else {
        alert("");
      }
      try {
        const response = await axios.post(url, {
          name,
          password,
        });
        if (reponse.status === 200 || response.status === 201)
          navigate("/login");
      } catch (error) {
        console.log("mistake in api", error);
        alert("was mistake in registration. try again");
      }
    }
  };

  return (
    <div className={scss.container}>
      <div className={scss.card}>
        <p className={scss.login}>Registration</p>

        <div className={scss.inputBox}>
          <input
            className={scss.text}
            value={name}
            onChange={(e) => setInputValueName(e.target.value)}
            required
            placeholder="email"
          />
          <span className={scss.user}>Username</span>
        </div>

        <div className={scss.inputBox}>
          <input
            className={scss.password}
            value={password}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="passoword"
            type="password"
            required
          />
          <span>Password</span>
        </div>

        <button onClick={handleNavigate} className={scss.enter}>
          registration
        </button>
      </div>
    </div>
  );
};

export default Registration;
