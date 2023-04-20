import "./App.css";

import MainHeader from "./components/MainHeader";
import ProfessionalResume from "./components/ProfessionalResume";
import ExperienceList from "./components/ExperienceList";

import experienceData from "./utils/experience.json";

function App() {
  const general = experienceData.general;
  const experience = experienceData.experience;
  return (
    <>
      <section>
        <MainHeader
          name={general.name}
          email={general.email}
          phone={general.phone}
        />
      </section>

      <section>
        <ProfessionalResume about={general.about} />
      </section>

      <main>
        <section>
          <ExperienceList experience={experience} />
        </section>
      </main>
    </>
  );
}

export default App;
