
import {useState} from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
//   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="mt-2 mx-6">
      <div className="flex justify-between items-center bg-slate-300 p-4">
      <h1 className="font-bold text-lg">{title}</h1>
      <button className="font-thin text-blue-600 text-5xl" onClick={() => setIsVisible(!isVisible)}>
        {!isVisible ? "+" : "-"}
        </button>
      </div>
      
      {isVisible && <p className="p-4 mt-1 bg-slate-300 ">{description}</p>}
     
    </div>
  );
};

const Grocery = () => {
    const [visibleSection, setVisibleSection] = useState("about")

      
  return (
    <div className="my-14 mx-56 ">
      <h1 className="font-semibold text-2xl mb-10">
        Shop grocery's with best offers from REZO !!..
      </h1>
      <div className="p-5 border bg-slate-100">
      <Section
        title={"About InstaMart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(section)=> section ? setVisibleSection("about") : setVisibleSection("")}
      />
      <Section
        title={"Team InstaMart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(section) => section ? setVisibleSection("team") : setVisibleSection("")}
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(section) => section ? setVisibleSection("career") : setVisibleSection("")}
      />
      </div>
    </div>
  );
};
export default Grocery;
