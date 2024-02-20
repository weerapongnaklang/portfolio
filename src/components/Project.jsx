const ProjectCard = () => {
  return (
    <>
      {/* doggo */}
      <div className="flex">
        <div className="bg-gray-100 w-60 p-10 ">
          <div className="w-40 ">
            <img src="src/assets/d.png" className="w-100 " alt="" />
          </div>
          <div className="text-xs">
            <ul className="flex gap-1 content-end  mt-5">
              <li className="bg-white rounded-xl pr-2 pl-2">javascript</li>
              <li className="bg-white rounded-xl pr-2 pl-2">react</li>
              <li className="bg-white rounded-xl pr-2 pl-2">node.js</li>
            </ul>
          </div>
        </div>
        <div className=" w-100 p-5">
          <h3 className="font-bold mb-2 tracking-wide">DOGGO</h3>
          <p className="font-thin text-gray-600">
            To increase motivation for exercise, we aim to develop a website and
            application that track exercise with dogs using JavaScript and
            React.js for website development, and Node.js for backend support,
            utilizing Express. Additionally, we will focus on soft skills such
            as communication and teamwork to ensure project success within the
            deadline.
          </p>
          <a
            href="https://doggo-project.vercel.app/"
            className="tracking-wide hover:text-gray-500 "
          >
            <span className="underline underline-offset-4 ">see</span> project
          </a>
        </div>
      </div>
      {/* react assessment */}
      <div className="flex">
        <div className="bg-gray-100 w-60 p-10 ">
          <div className="w-40 ">
            <img src="src/assets/project_react.png" className="w-100 " alt="" />
          </div>
          <div className="text-xs">
            <ul className="flex gap-1 content-end  mt-5">
              <li className="bg-white rounded-xl pr-2 pl-2">react.js</li>
            </ul>
          </div>
        </div>
        <div className=" w-100 p-5">
          <h3 className="font-bold mb-2 tracking-wide">React Aessessment</h3>
          <p className="font-thin text-gray-600">
            Learning how to use React.js to manage displays and create user
            interfaces, allows us to write code for complex UIs divided into
            smaller parts. Each part can be separated to work independently,
            making it possible to reuse those UI components.
          </p>
          <a
            href="https://36-ruby-react-assessment.vercel.app/"
            className="tracking-wide hover:text-gray-500 "
          >
            <span className="underline underline-offset-4 ">see</span> project
          </a>
        </div>
      </div>

      {/* ruby shop */}
      <div className="flex">
        <div className="bg-gray-100 w-60 p-10 ">
          <div className="w-40 ">
            <img
              src="src/assets/project_rubyshop.png"
              className="w-100 "
              alt=""
            />
          </div>
          <div className="text-xs">
            <ul className="flex gap-1 content-end  mt-5">
              <li className="bg-white rounded-xl pr-2 pl-2">html&css</li>
              <li className="bg-white rounded-xl pr-2 pl-2">flexbox</li>
            </ul>
          </div>
        </div>
        <div className=" w-100 p-5">
          <h3 className="font-bold mb-2 tracking-wide">ruby's shop</h3>
          <p className="font-thin text-gray-600">
            As part of learning about flexbox and CSS management, you'll create
            your own dream store.
          </p>
          <a
            href="https://jsd6-rubyflexshop.vercel.app/"
            className="tracking-wide hover:text-gray-500 "
          >
            <span className="underline underline-offset-4 ">see</span> project
          </a>
        </div>
      </div>
      {/* colmar */}
      <div className="flex">
        <div className="bg-gray-100 w-60 p-10 ">
          <div className="w-40 ">
            <img
              src="src/assets/project_colmar.png"
              className="w-100 "
              alt=""
            />
          </div>
          <div className="text-xs">
            <ul className="flex gap-1 content-end  mt-5">
              <li className="bg-white rounded-xl pr-2 pl-2">html</li>
              <li className="bg-white rounded-xl pr-2 pl-2">css</li>
            </ul>
          </div>
        </div>
        <div className=" w-100 p-5">
          <h3 className="font-bold mb-2 tracking-wide">Colmar Academy</h3>
          <p className="font-thin text-gray-600">
            Designing and managing university websites to provide users with a
            user experience that is supported on each screen size of the device.
          </p>
          <a
            href="https://36-colmar-academy.vercel.app/"
            className="tracking-wide hover:text-gray-500 "
          >
            <span className="underline underline-offset-4 ">see</span> project
          </a>
        </div>
      </div>
    </>
  );
};

const Project = () => {
  return (
    <>
      <div className=" mb-10 pb-20 pt-10 border-t-2 border-b-2">
        <div className="text-end text-2xl font-bold mt-10 mb-10">
          <h2 id="project">
            <span className="  font-mono underline  decoration-4 underline-offset-8">
              proj
            </span>
            ect.
          </h2>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 w-full  ">
          <ProjectCard />
        </div>
        <p className="text-center pt-20 font-bold tracking-wider">
          <span className="underline underline-offset-4 font-mono">sh</span>ow
          more project
        </p>
      </div>
    </>
  );
};

export default Project;
