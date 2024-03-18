import { TypeAnimation } from "react-type-animation";

const Introduce = () => {
  return (
    <div id="introduce" className="introduce">
      <div className="contain-introduce text-center mt-auto">
        <div >
          <h1>
            <TypeAnimation
              sequence={[`Welcome to my Portfolio!`, 1000, ""]}
              speed={200}
              style={{
                whiteSpace: "pre-line",
                fontSize: "2em",
                fontFamily: "monospace",
              }}
              repeat={Infinity}
              sx={{ fontSize: "15px" }}
            />
            <br />
            <code className="word">
              Hello ! I'm 
              <span className="font-bold text-red-600 m-2">
                Ruby
              </span>
              not Ruby Language
            </code>
          </h1>
          <p>
            <code>
              <span className="font-semibold">
                A Junior Software Developer,
              </span>
              based in bangkok.
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
