import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import home from "../../assets/images/home.jpg";
import walk from "../../assets/images/walk.jpg";
import sport from "../../assets/images/sport.jpg";
import css from "./SectionAboutMe.module.css";

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const SectionAboutMe = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(css.aboutMe, theme && css["aboutMe-light"])}>
      <div className={css.content}>
        <div className={css["box-left-img"]}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            custom={1}
            variants={animation}
            className={clsx(
              css["left-top-img"],
              theme && css["left-top-img-light"]
            )}
          >
            <img src={home} alt="man" width={284} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.9, once: true }}
            custom={1}
            variants={animation}
            className={clsx(
              css["left-bottom-img"],
              theme && css["left-bottom-img-light"]
            )}
          >
            <img src={sport} alt="man" width={262} />
          </motion.div>
        </div>
        <div className={clsx(css["box-desc"], theme && css["box-desc-light"])}>
          <h2 className={css.title}>About me</h2>
          <p className={clsx(css.text, theme && css["text-light"])}>
            Hello again everyone! So, you already know that my name is
            Oleksandr. A little about myself: student, 18 y.o., athlete-football
            player, I love creativity since childhood, I live in Donetsk,
            Ukraine. Why programming? Everything is elementary - I like it, the
            profession of the future, thanks to which I can provide myself and
            fulfill my dream - travel, at the moment I specialize in web design,
            front-end and back-end development, turnkey websites. Why should you
            choose me? I approach each order with great responsibility and love,
            as I want to make a name for myself, exclude plagiarism and
            negligence, fully study the project, the client and its target
            audience, work for quality, trying to make an order as quickly and
            uniquely as possible, taking into account all the edits and wishes.
            By trusting me, you will get the maximum return for your project,
            save your nerves and time. If you are interested in me , you want to
            know something more or use my services, then I will provide all my
            contacts below.
          </p>
        </div>
        <div className={css["box-right-img"]}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: true }}
            custom={1}
            variants={animation}
            className={clsx(css["right-img"], theme && css["right-img-light"])}
          >
            <img src={walk} alt="man" width={299} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
