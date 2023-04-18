import "./App.css";
import experienceData from "./utils/experience.json";

function App() {
  const general = experienceData.general;
  const experience = experienceData.experience;
  return (
    <>
      <section>
        <header>
          <h1>{general.name}</h1>
          <h2>Contact</h2>
        </header>
        <ul>
          <li>Email: {general.email}</li>
          <li>Phone: {general.phone}</li>
        </ul>
      </section>

      <section>
        <h2>Professional resume</h2>
        <p>{general.about}</p>
      </section>

      <main>
        <section>
          <h2>Experience</h2>
          {experience.map((job) => (
            <article key={job.title}>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <ul>
                {job.description.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
