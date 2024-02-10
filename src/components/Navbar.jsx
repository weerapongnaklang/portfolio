const Navbar = () => {
  return (
    <div className="">
      <div className="navbar flex">
        <div className=" font-bold text-3xl hidden lg:block flex-1 ml-10">
          <h2 className="font-mono">RUBY.</h2>
        </div>

        <ul className="list-nav  lg:flex gap-5 block text-center  md:text-center mr-20">
          <li className=" hover:underline decoration-4">
            <a href="#introduce">HOME</a>
          </li>
          <li className=" hover:underline decoration-4">
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li className=" hover:underline decoration-4">
            <a href="#aboutme">SKILL</a>
          </li>
          <li className=" hover:underline decoration-4">
            <a href="#project">PROJECT</a>
          </li>
          <li className=" hover:underline decoration-4">
            <a href="#project">CONTACT</a>
          </li>
          <a
            className=" hover:underline decoration-4 hover:bg-slate-300 bg-slate-200 p-1 rounded-md"
            href="https://drive.google.com/file/d/1WzIXlN6XvDvTfJ6ft-ISAXuZ1V2PqAuH/view?usp=drive_link"
          >
            VISIT CV
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
