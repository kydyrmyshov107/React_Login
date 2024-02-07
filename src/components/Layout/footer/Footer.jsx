import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className={scss.footer}>
          <div>
            <hr />
            <p>© 2024 TextNow All Rights Reserved.</p>
          </div>
          <p>Terms </p>
          <p>Jadoo</p>
          <p>Help/FAQ</p>
          <p>Privacy Policy</p>
          <p>2G Fair Use Policy</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
