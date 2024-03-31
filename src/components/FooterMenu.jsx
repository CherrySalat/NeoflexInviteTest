import "../style/FooterMenu.scss";
import vk from "../assets/vk.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import theWorld from "../assets/theWorld.svg";
import Logo from "./UI/Logo/Logo.jsx";

const FooterMenu = () => {
  return (
    <footer>
      <Logo />
      <div className="footer__menu">
        <div className="footer__menu__part ">
          <p>
            <a href="">Избранное</a>
          </p>
          <p>
            <a href="">Корзина</a>
          </p>
          <p>
            <a href="">Контакты</a>
          </p>
        </div>
        <div className="footer__menu__part">
          <p>
            <a href="">Условия сервиса</a>
          </p>
          <div className="menu__language">
            <img src={theWorld} className="App-logo" alt="logo" />
            <p>
              <a href="" className="language--active ">
                Рус
              </a>
            </p>
            <p>
              <a href="" className="language">
                Eng
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="social">
        <img src={vk} className="App-logo" alt="logo" />
        <img src={telegram} className="App-logo" alt="logo" />
        <img src={whatsapp} className="App-logo" alt="logo" />
      </div>
    </footer>
  );
};

export default FooterMenu;
