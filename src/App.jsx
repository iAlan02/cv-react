import "./App.css";
import data from "./utils/experience.json";

function App() {
  const general = data.general;
  const experience = data.experience;
  return (
    <>
      <header>
        <h1>{general.name}</h1>
        <h2>Contact</h2>
        <ul>
          <li>Email: {general.email}</li>
          <li>Phone: {general.phone}</li>
        </ul>
      </header>

      <section>
        <h2>Professional resume</h2>
        <p>{general.about}</p>
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((job) => (
          <div key={job.company}>
            <ul>
              <li>
                <h3>{job.company}</h3>
                <p>{job.title}</p>
                <p>
                  {job.startDate} - {job.endDate}
                </p>
                <p>{job.description}</p>
              </li>
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
