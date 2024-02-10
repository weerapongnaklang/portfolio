import { TypeAnimation } from "react-type-animation";

const TypeAnimation = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          `Welcome to my website!\nI'm a Developer\nand a Designer.`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: "pre-line", fontSize: "2em" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeAnimation;