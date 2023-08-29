import icons from "../../assets/icons/icons.svg";
import scss from "./ContactFooter.module.scss";

const ContactFooter = () => {
  return (
    <div className={scss["block-contact"]}>
      <p>Contact</p>
      <ul className={scss.list}>
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
            <span>alexander_solonar</span>
          </a>
        </li>
        <li className={scss.item}>
          <a className={scss.link} href="tel:+380689441877">
            <svg width={22} height={22}>
              <use href={`${icons}#icon-phone`} />
            </svg>
            <span>+38 068-944-18-77</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactFooter;
