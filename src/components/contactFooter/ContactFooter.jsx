import css from "./ContactFooter.module.css";

const ContactFooter = () => {
  return (
    <div className={css["block-contact"]}>
      <p>Contact</p>
      <ul className={css.list}>
        <li className={css.item}>
          Email:
          <a
            href="mailto: solo991@ukr.net"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            solo991@ukr.net
          </a>
        </li>
        <li className={css.item}>
          Telegram:
          <a
            href="https://t.me/alexander_solonar"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            alexander_solonar
          </a>
        </li>
        <li className={css.item}>
          Telephone: <a href="tel:+380689441877">+38 068-944-18-77</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactFooter;
