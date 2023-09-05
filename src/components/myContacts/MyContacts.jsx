import icons from "../../assets/icons/icons.svg";
import flag from "../../assets/images/ukraine.png";
import scss from "./MyContacts.module.scss";

const MyContacts = () => {
  return (
    <div className={scss["block-contacts"]}>
      <h1 className={scss.title}>Get in touch with me</h1>
      <ul className={scss.list}>
        <li className={scss.item}>
          <a className={scss.link} href="tel:+380689441877">
            <svg width={22} height={22}>
              <use href={`${icons}#icon-phone`} />
            </svg>
            <span>+38 068-944-18-77</span>
          </a>
        </li>
        <li className={scss.item}>
          <a
            className={scss.link}
            href="mailto: solo991@ukr.net"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg width={22} height={22}>
              <use href={`${icons}#icon-email`} />
            </svg>
            <span>solo991@ukr.net</span>
          </a>
        </li>
        <li className={scss.item}>
          <a
            className={scss.link}
            href="https://t.me/alexander_solonar"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg width={22} height={22}>
              <use href={`${icons}#icon-telegram`} />
            </svg>
            <span>Telegram</span>
          </a>
        </li>
        <li className={scss.item}>
          <a
            className={scss.link}
            href="https://www.linkedin.com/in/alexandersolonar"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg width={22} height={22}>
              <use href={`${icons}#icon-linkedin`} />
            </svg>
            <span>Linkedin</span>
          </a>
        </li>
        <li className={scss.item}>
          <a
            className={scss.link}
            href="https://github.com/Alexander-Solonar"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg width={22} height={22}>
              <use href={`${icons}#icon-github`} />
            </svg>
            <span>GitHub</span>
          </a>
        </li>
      </ul>
      <h3 className={scss["sun-title"]}>Location :</h3>
      <address className={scss.address}>
        <a
          className={scss.link}
          href="https://goo.gl/maps/qAHahXqh9R1bDvRt6"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Odesa, Ukraine <img width={24} src={flag} alt="flag-ukr" />
        </a>
      </address>
    </div>
  );
};

export default MyContacts;
