import scss from "./Home.module.scss";

const Home = () => {
  return (
    <div className={scss.home}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </div>
  );
};

export default Home;
