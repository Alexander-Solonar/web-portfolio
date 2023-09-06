import clsx from "clsx";
import { useContext } from "react";
import { Context } from "../../context/Context";
import FormFeedback from "../formFeedback";
import MyContacts from "../myContacts/MyContacts";
import scss from "./SectionContacts.module.scss";

const SectionContacts = () => {
  const { theme } = useContext(Context);
  return (
    <section className={clsx(scss.contacts, theme && scss["contacts-light"])}>
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
