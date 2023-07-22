import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import css from "./SectionSkills.module.css";
import * as API from "../../services/API";
import CardSkils from "../cardSkills";

const SectionSkills = () => {
  const [data, setData] = useState([]);
  const { theme } = useContext(Context);

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
              <CardSkils data={element} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionSkills;
