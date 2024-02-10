const ProjectCard = () => {
  return (
    <div class=" card card-compact bg-base-100 shadow-xl hover:scale-105 duration-100 w-80 mx-auto">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src="src/assets/project-image.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <a href="">DOGGO Application</a>
          </h2>
          <p>
            Web Application project from Generation Thailand Bootcamp to
            practicing full stack software development as a team
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Javascript</div>
            <div className="badge badge-outline">React</div>
            <div className="badge badge-outline">HTML & CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <>
      <div className=" mb-10 pb-10">
        <div className="text-center text-2xl font-bold mt-10 mb-10">
          <h2 id="project ">
            <span className="  font-mono underline  decoration-4 underline-offset-8">
              proj
            </span>
            ect.
          </h2>
        </div>
        <div className="grid gap-5 grid-cols-3 w-full  ">
          <div className="flex">
            <ProjectCard />
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
