import FormFeedback from '../formFeedback';
import MyContacts from '../myContacts/MyContacts';
import scss from './SectionContacts.module.scss';

const SectionContacts = () => {
  return (
    <section className={scss['contacts']}>
      <div className="container">
        <div className={scss.content}>
          <MyContacts />
          <FormFeedback />
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
