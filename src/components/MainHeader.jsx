import { CgProfile } from "react-icons/Cg";
import { FcCellPhone } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";

import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>
        <CgProfile />
        {props.name}
      </h1>
      <h2>Contact</h2>

      <ul>
        <li>
          <AiOutlineMail /> {props.email}
        </li>
        <li>
          <FcCellPhone />
          {props.phone}
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
