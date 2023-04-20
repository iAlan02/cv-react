import classes from "./ExperienceItem.module.css";
import { motion } from "framer-motion";

const ExperienceItem = (props) => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    >
      <Link to={props.title}>
        <li className={classes.card}>
          <p className={classes.author}>{props.title}</p>
          <p className={classes.text}>{props.company}</p>
          <p>
            {props.startDate} - {props.endDate}
          </p>
        </li>
      </Link>
    </motion.div>
  );
};

export default ExperienceItem;
