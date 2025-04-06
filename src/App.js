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
    <>
      <Navbar />
      <div className="content">
          <HomeView />
          <AboutView />
          <ExperienceView />
          <ProjectsView />
        <section id="contact">
          <ContactView />
        </section>
      </div>
    </>
  );
}

export default App;
