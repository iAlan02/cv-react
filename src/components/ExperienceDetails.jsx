import classes from "./ExperienceDetails.module.css";

const ExperienceDetails = (props) => {

  return (
    <main className={classes.details}>
      <ul>
        {props.details.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
      </ul>
    </main>
  );
};

export default ExperienceDetails;
