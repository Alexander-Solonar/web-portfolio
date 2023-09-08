import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import * as APIFireBase from "../../services/APIFirebase";
import CardSkills from "../cardSkills";
import scss from "./SectionSkills.module.scss";

const SectionSkills = () => {
  const { theme } = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const skills = await APIFireBase.getSkillsCollection();
        setData(skills);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <section className={clsx(scss.skills, theme && scss["skills-light"])}>
      <div className="container">
        <div className={scss.content}>
          <h2 className={scss.title}>My Skills</h2>
          <ul className={scss.list}>
            {data.map((element) => (
              <li key={element.id} className={scss.item}>
                <CardSkills data={element} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
