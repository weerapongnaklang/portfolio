import Aboutme from "./Aboutme";
import Introduce from "./Introduce";
import Navbar from "./Navbar";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduce />
      <Aboutme />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
