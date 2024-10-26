import { useTranslation } from 'react-i18next';
import SpriteIcon from '../spriteIcon';
import contacts from '../../data/contacts.json';
import flag from '../../assets/images/ukraine.png';
import scss from './MyContacts.module.scss';

const MyContacts = () => {
  const { t } = useTranslation();

  return (
    <div className={scss['block-contacts']}>
      <h1 className={scss['title']}>{t('contacts.title')}</h1>
      <ul className={scss['list']}>
        {contacts.map(({ id, icon, label, ...rest }) => (
          <li key={id} className={scss['item']}>
            <a className={scss['link']} {...rest}>
              <SpriteIcon width={22} height={22} icon={icon} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <h3 className={scss['sun-title']}>{t('contacts.sub')} :</h3>
      <address className={scss['address']}>
        <a
          className={scss.link}
          href="https://goo.gl/maps/qAHahXqh9R1bDvRt6"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {t('location')} <img width={24} src={flag} alt="flag-ukr" />
        </a>
      </address>
    </div>
  );
};

export default MyContacts;
