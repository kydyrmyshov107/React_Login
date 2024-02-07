import scss from "./UserHome.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const url =
  "https://api.elchocrud.pro/api/v1/afc5f46e0ccea647582b890031c0c221/newusers";

const UserHome = () => {
  const [users, setUsers] = useState([]);

  const getRequest = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const deleteFunc = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    setUsers(response.data);
  };

  return (
    <div className={scss.UserHome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.aside}>
            {users.map((el, index) => (
              <div className={scss.inner} key={index}>
                <p>{el.name}</p>
                <p>{el.password}</p>
                <button onClick={() => deleteFunc(el._id)}>delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
