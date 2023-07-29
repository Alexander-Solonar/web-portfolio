import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import * as API from "../../services/API";
import CardSkills from "../cardSkills";
import css from "./SectionSkills.module.css";

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
    <section className={clsx(css.skills, theme && css["skills-light"])}>
      <div className="container">
        <ul className={css.list}>
          {data.map((element) => (
            <li key={element.id} className={css.item}>
              <CardSkills data={element} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionSkills;
