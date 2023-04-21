import "./App.css";
import { motion } from "framer-motion";

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
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <MainHeader
            name={general.name}
            email={general.email}
            phone={general.phone}
          />
        </motion.div>
      </section>

      <section>
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <ProfessionalResume about={general.about} />
        </motion.div>
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
