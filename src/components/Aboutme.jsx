const Aboutme = () => {
  return (
    <div className="bg-slate-50 h-full p-5" id="aboutme">
      <div className="mx-5 ">
        <h2 className="font-semibold font-mono w-full text-center text-xl h-vh mb-5">
          <span className="underline  decoration-4 underline-offset-8">
            about
          </span>
          <span> me.</span>
        </h2>
        <div className="flex ">
          <div className="img-profile ">
            <img
              className="mb-auto mt-auto rounded-tl-3xl rounded-br-3xl drop-shadow-xl"
              src="src/assets/Profile.png"
              alt=""
            />
          </div>
          <div className="w-full mx-5 mt-auto mb-auto">
            <h3 className="mb-3 ">WEERAPONG NAKLANG</h3>
            <p className="break-words">
              I'm a junior software developer, Diligent and adaptable
              professional with a background in as a Secretary and
              Administrator. Graduated with a degree in Public Health, merging a
              passion for healthcare with a burgeoning interest in technology
              and software development. Eager to leverage comprehensive
              administrative experience, coupled with a newfound proficiency in
              coding and software development, to excel in a Junior Software
              Developer role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
