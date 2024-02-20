const Contact = () => {
  return (
    <>
      <div className="flex flex-col h-100% ">
        <h2 className="mx-auto text-2xl font-mono font-semibold  mb-20">
          con
          <span className="underline decoration-4 underline-offset-8">
            tact
          </span>{" "}
          me.
        </h2>
        <div className="text-4xl m-2 mx-auto p-10 pt-20 mb-40 ">
          <a href="https://github.com/weerapongnaklang">
            <i className="fa-brands fa-github mr-10"></i>
          </a>
          <a href="https://www.linkedin.com/in/weerapong-naklang-555b8423a/">
            <i className="fa-brands fa-linkedin mx-2 mr-10"></i>
          </a>
          <a href="https://www.instagram.com/rulabie_ruby/">
            <i className="fa-brands fa-instagram mx-2 mr-10"></i>
          </a>
          <a href="mailto:weerapongnaklangs@gmail.com" mailto>
            <i className="fa-regular fa-envelope mx-2"></i>
          </a>
        </div>
        <div className="flex">
          <p className="flex-1 mb-10 text-gray-600 font-bold ">RUBY.</p>
          <p className="text-gray-400">
            Thank you for watcing
            <span className="font-bold text-gray-500"> my portfolio.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
