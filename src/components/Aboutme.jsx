import aboutme_html from "../assets/aboutme_html.jpg";
import aboutme_javascript from "../assets/aboutme_javascript.jpg";
import aboutme_react from "../assets/aboutme_react.jpg";
import aboutme_database from "../assets/aboutme_database.jpg";
import profile from "../assets/Profile.png";

const Aboutme = () => {
  return (
    <div className="border-b-2 border-t-2  h-full pt-10 pb-20" id="aboutme">
      <div className="mx-5 ">
        <h2 className="font-semibold font-mono w-full  text-xl h-vh mb-5">
          <span className="underline  decoration-4 underline-offset-8">
            about
          </span>
          <span> me.</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row ml-20 mr-20">
        <div className="img-profile mt-5">
          <img
            className="rounded-full drop-shadow-xl "
            src={profile}
            alt="weerapongnaklang"
          />
        </div>
        <div className="w-full mt-12 md:mt-0 md:mx-16 mb-auto">
          <h3 className="mb-3 text-2xl">WEERAPONG NAKLANG</h3>
          <p className="break-words text-gray-600 font-thin">
            Graduated with a degree in Public Health. Hardworking and flexible
            professional with experience as a Secretary and Administrative
            Officer. Keen to use skills from my previous background, along with
            newfound coding and software development abilities, to succeed in a
            Software Developer position.
          </p>
          <div className="text-gray-500 pt-3 ">
            <a
              href="https://www.instagram.com/rulabie_ruby/"
              className=" hover:text-gray-900  hover:underline decoration-2 underline-offset-8"
            >
              INSTAGRAM
            </a>
            <a
              href="https://github.com/weerapongnaklang"
              className=" hover:text-gray-900 hover:underline decoration-2 underline-offset-8 ml-3"
            >
              GITHUB
            </a>
            <a
              href="mailto:weerapongnaklangs@gmail.com"
              className=" hover:text-gray-900 hover:underline decoration-2 underline-offset-8 ml-3"
            >
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/weerapong-naklang-555b8423a/"
              className=" hover:text-gray-900 hover:underline decoration-2 underline-offset-8 ml-3"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
      <div className="pt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 auto-rows-fr">
          <AboutMeCard heading="html&css" iconUrl={aboutme_html}>
            Responsive websites with fast loading
          </AboutMeCard>
          <AboutMeCard heading="javascript" iconUrl={aboutme_javascript}>
            Building a website that can interact with users
          </AboutMeCard>
          <AboutMeCard heading="react.js" iconUrl={aboutme_react}>
            Building system with functional components
          </AboutMeCard>
          <AboutMeCard heading="database" iconUrl={aboutme_database}>
            Appropriate data management
          </AboutMeCard>
        </div>
      </div>
      <div className="pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 auto-rows-fr">
          <AboutMeCard heading="had experience with">
            <p>Project Tracking Exercise</p>
            <p>Working with Teamwork</p>
            <p>MySQL, MongoDB Database</p>
            <p>Git, GitHub</p>
            <p>Figma</p>
            <p>CSS Preprocessors</p>
          </AboutMeCard>
          <AboutMeCard heading="I work and study about">
            <p>Coding React.js</p>
            <p>Coding CSS</p>
            <p>Coding Javascript</p>
            <p>Studying Node.js basics</p>
            <p>Studying API RESTFUL</p>
            <p>Studying TypeScript</p>
          </AboutMeCard>
        </div>
      </div>
    </div>
  );
};

const AboutMeCard = ({ heading, iconUrl, children }) => {
  return (
    <div className=" flex border-2 rounded-md pt-3 pb-3 m-auto h-full lg:m-0 w-1/2 lg:w-full">
      <div className="text-center align-middle border-r-4 ml-3">
        {iconUrl && <img src={iconUrl} alt={heading} className="block mr-3" />}
      </div>
      <div className="mx-4 flex-1 w-auto">
        <p className="font-bold">{heading}</p>
        <p className="text-xs text-gray-700 font-thin">{children}</p>
      </div>
    </div>
  );
};

export default Aboutme;
