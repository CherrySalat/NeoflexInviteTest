import Logo from "./UI/Logo/Logo.jsx";
import "../style/HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <header>
      <Logo />

      <div className="header__container">
        <a href="/">
          <img src="../assets/heart.png" />
        </a>

        <a href="/">
          <img src="../assets/basket.png" />
        </a>
      </div>
    </header>
  );
};

export default HeaderMenu;
