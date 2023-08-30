import { Link } from "react-router-dom";
import scss from "./BtnConnection.module.scss";

const BtnConnection = () => {
  return (
    <Link className={scss.button} to="/contacts">
      Contact me
    </Link>
  );
};

export default BtnConnection;
