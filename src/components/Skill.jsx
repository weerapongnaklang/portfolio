

const Skill = () => {
  return (
    <>
      <div>
        <div className="text-center mb-10 mt-10">
          <h3 className="font-bold text-2xl font-mono underline  decoration-4 underline-offset-8">
            skill
          </h3>
        </div>
        <div className="grid gap-5 grid-cols-3 w-1/4 mx-auto skill-iamge">
          <img
            src="src/assets/html.svg"
            alt="html"
            className="hover:bg-[RGB(242 191 169)] "
          />
          <img src="src/assets/css.svg" alt="css" className="hover:2rem"/>
          <img src="src/assets/javascript.svg" alt="javascript" />
          <img src="src/assets/nodejs.svg" alt="node.js" />
          <img src="src/assets/react-logo.svg" alt="react" />
          <img src="src/assets/github.svg" alt="github" />
          <img src="src/assets/sql.png" alt="sql" />
          <img src="src/assets/mongoDB.svg" alt="mongodb" />
        </div>
      </div>
    </>
  );
};

export default Skill;
