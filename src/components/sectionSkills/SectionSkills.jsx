import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import * as API from "../../services/API";
import CardSkills from "../cardSkills";
import scss from "./SectionSkills.module.scss";

const SectionSkills = () => {
  const { theme } = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const skills = await API.getListCardSkills();
        setData(skills);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <section className={clsx(scss.skills, theme && scss["skills-light"])}>
      <div className="container">
        <h2 className={scss.title}>Skills</h2>
        <ul className={scss.list}>
          {data.map((element) => (
            <li key={element.id} className={scss.item}>
              <CardSkills data={element} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionSkills;
