import "./App.css";
import data from "./utils/experience.json";

function App() {
  const general = data.general;
  const experience = data.experience;
  return (
    <>
      <h1>{general.name}</h1>
      <h2>Contact</h2>
      <ul>
        <li>Email: {general.email}</li>
        <li>Phone: {general.phone}</li>
      </ul>
      <h2>Experience</h2>
      {experience.map((job) => (
        <div key={job.company}>
          <h3>{job.company}</h3>
          <p>{job.title}</p>
          <p>
            {job.startDate} - {job.endDate}
          </p>
          <p>{job.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
