import SpriteIcon from '../spriteIcon';
import contacts from '../../data/footer-contacts.json';
import scss from './ContactFooter.module.scss';

const ContactFooter = () => {
  return (
    <div className={scss['block-contact']}>
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
    </div>
  );
};

export default ContactFooter;
