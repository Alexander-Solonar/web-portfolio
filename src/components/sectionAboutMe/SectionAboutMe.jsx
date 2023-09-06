import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import walk from "../../assets/images/walk.webp";
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
        <div
          className={clsx(scss["box-desc"], theme && scss["box-desc-light"])}
        >
          <h2 className={scss.title}>About me</h2>
          <p className={clsx(scss.text, theme && scss["text-light"])}>
            Hello, my name is Alexander, and here is some information about me.
            I'm 32 years old, and I've always had a passion for sports,
            particularly football. Over 17 months ago, I made the decision to
            dive into the world of programming, specifically front-end
            development. After completing my education at GoIT IT school, I
            gained a solid knowledge foundation. In both work and life, I always
            uphold personal qualities like responsibility, perseverance, and
            punctuality. I genuinely enjoy the world of programming and crafting
            unique web applications. Currently, I'm in the process of seeking
            new career opportunities and am open to considering job offers. If
            you're interested in my portfolio or would like to get in touch with
            me, you'll find my contact information below or can visit the
            "Contacts" page. My goal is to continue growing in the field of
            front-end development and contribute my skills to exciting projects
            that make a positive impact.
          </p>
        </div>
        <div className={scss["block-image"]}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: true }}
            custom={1}
            variants={animation}
            className={clsx(scss.image, theme && scss["image-light"])}
          >
            <div className={scss["border-image"]}>
              <img src={walk} alt="man" width={360} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
