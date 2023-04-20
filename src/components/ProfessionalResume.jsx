import { ImProfile } from "react-icons/im";
const ProfessionalResume = (props) => {
  return (
    <>
      <h2>
        <ImProfile />
      </h2>
      <p>{props.about}</p>
    </>
  );
};

export default ProfessionalResume;
