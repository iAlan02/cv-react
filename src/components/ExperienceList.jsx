import ExperienceItem from "./ExperienceItem";
import classes from "./ExperienceList.module.css";
import { GiSwordsEmblem } from "react-icons/gi";

const ExperienceList = ({ experience }) => {
  return (
    <>
      <h2>
        <GiSwordsEmblem />
        Experience
      </h2>
      {experience.length > 0 && (
        <ul className={classes.cards}>
          {experience.map((job) => (
            <ExperienceItem
              key={job.title}
              title={job.title}
              company={job.company}
              startDate={job.startDate}
              endDate={job.endDate}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ExperienceList;
