import ExperienceItem from "./ExperienceItem";
import ExperienceDetails from "./ExperienceDetails";
import Modal from "./Modal";
import classes from "./ExperienceList.module.css";
import { GiSwordsEmblem } from "react-icons/gi";
import { useState } from "react";

const ExperienceList = ({ experience }) => {
  const [jobDetails, setJobDetails] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  let modalContent;

  const getJobDetails = (id) => {
    const jobDescription = experience.find((e) => e.id === id);
    setJobDetails(jobDescription);
    setModalVisible(true);
  };

  const hideModalHandler = () => {
    setModalVisible(false);
  };

  if (modalVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <ExperienceDetails details={jobDetails.description} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}

      <h2>
        <GiSwordsEmblem />
        Experience
      </h2>
      {experience.length > 0 && (
        <ul className={classes.cards}>
          {experience.map((job) => (
            <ExperienceItem
              key={job.id}
              id={job.title}
              title={job.title}
              company={job.company}
              startDate={job.startDate}
              endDate={job.endDate}
              modalHandler={() => getJobDetails(job.id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ExperienceList;
