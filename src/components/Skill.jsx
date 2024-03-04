import skill_html from "./../assets/html.svg";
import skill_css from "./../assets/css.svg";
import skill_javascript from "./../assets/javascript.svg";
import skill_mongoDB from "./../assets/mongoDB.svg";
import skill_github from "./../assets/github.svg";
import skill_nodejs from "./../assets/nodejs.svg";
import skill_react from "./../assets/react.svg";
import skill_sql from "./../assets/sql.png";


const Skill = () => {
  return (
    <div className="pb-20 pt-5">
      <div className="text-center mb-10 mt-10">
        <h3 className="font-bold  text-2xl font-mono underline  decoration-4 underline-offset-8">
          <i class="fa-solid fa-code"></i>skill.
        </h3>
      </div>
      <div className="grid gap-5 grid-cols-3 w-3/5 md:w-2/5 xl:w-1/5 mx-auto skill-iamge ">
        <img src={skill_html} alt="html" />
        <img src={skill_css} alt="css" className="hover:2rem" />
        <img src={skill_javascript} alt="javascript" />
        <img src={skill_nodejs} alt="node.js" />
        <img src={skill_react} alt="react" />
        <img src={skill_github} alt="github" />
        <img src={skill_sql} alt="sql" />
        <img src={skill_mongoDB} alt="mongodb" />
      </div>
    </div>
  );
};

export default Skill;
