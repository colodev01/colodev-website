import "./App.css";
import Navbar from "./components/Navbar.jsx";
import {
  HomeView,
  AboutView,
  ContactView,
  ExperienceView,
  ProjectsView,
} from "./views/index.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <section id="home">
          <HomeView />
        </section>
        <section id="about">
          <AboutView />
        </section>
        <section id="experience">
          <ExperienceView />
        </section>
        <section id="projects">
          <ProjectsView />
        </section>
        <section id="contact">
          <ContactView />
        </section>
      </div>
    </div>
  );
}

export default App;
