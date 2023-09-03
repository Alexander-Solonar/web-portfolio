import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import home from "../../assets/images/home.webp";
import walk from "../../assets/images/walk.webp";
import sport from "../../assets/images/sport.webp";
import scss from "./SectionAboutMe.module.scss";

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
    <section className={clsx(scss.aboutMe, theme && scss["aboutMe-light"])}>
      <div className={scss.content}>
        <div className={scss["box-left-img"]}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            custom={1}
            variants={animation}
            className={clsx(
              scss["left-top-img"],
              theme && scss["left-top-img-light"]
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
              scss["left-bottom-img"],
              theme && scss["left-bottom-img-light"]
            )}
          >
            <img src={sport} alt="man" width={262} />
          </motion.div>
        </div>
        <div
          className={clsx(scss["box-desc"], theme && scss["box-desc-light"])}
        >
          <h2 className={scss.title}>About me</h2>
          <p className={clsx(scss.text, theme && scss["text-light"])}>
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
        <div className={scss["box-right-img"]}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: true }}
            custom={1}
            variants={animation}
            className={clsx(
              scss["right-img"],
              theme && scss["right-img-light"]
            )}
          >
            <img src={walk} alt="man" width={299} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
