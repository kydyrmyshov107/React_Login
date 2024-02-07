import style from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={style.notFoundPage}>
      <h1>404 Not Found</h1>
      <h2>Sorry, the page you are looking for does not exist.</h2>
    </div>
  );
};

export default NotFoundPage
