import Toggle from "./Buttons/Toggle";

const Header = () => {
  return (
    <div className="p-4  h-20 flex flex-row  items-center  ">
      <h2 className="text-2xl font-bold text-white w-1/2">calc</h2>
      {/* container text and toggle */}
      <div className="flex mt-3 flex-row  w-1/2 px-2 space-x-2">
        <p className=" text-[11px] font-bold text-white  flex items-center justify-center w-1/2">
          THEME
        </p>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
