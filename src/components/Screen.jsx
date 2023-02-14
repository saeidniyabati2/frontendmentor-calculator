import { useState } from "react";
import { threeDigits } from "../../Helper/index";
const Screen = () => {
  const [input, setInput] = useState("4454542");

  const handleChange = (event) => {
    const { name, value } = event;
    console.log(name, value);
    console.log(threeDigits(input));

    setInput(threeDigits("1345933"));
  };
  // console.log(handleChange());
  return (
    <div className="bg-color3 py-3 rounded-xl h-27 mt-4 flex justify-center items-center px-3">
      <input
        type="text"
        name="calc"
        value={input}
        onChange={handleChange}
        className="p-4 w-full bg-color3 text-white font-bold outline-0 text-4xl font-custom"
        disabled
        readOnly
        dir="rtl"
      ></input>
    </div>
  );
};

export default Screen;
