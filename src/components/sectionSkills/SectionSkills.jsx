import { useEffect, useState } from "react";
import css from "./SectionSkills.module.css";
import * as API from "../../services/API";
import CardSkills from "../cardSkills";

const SectionSkills = () => {
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
    <section className={css.skills}>
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
