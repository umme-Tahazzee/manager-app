import React from "react";
import  SplitscreenIcon  from "@mui/icons-material/Splitscreen";

const StateRightSideBar = () => {
  return (
    <div className="w-[22%] flex justify-end items-center max-lg:hidden ">
      {/* white background  */}
      <div className=" h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col">
        {/* Header  */}
        <Header />
        {/* Circular Chart  */}
        <div className="flex flex-col gap-11 items-center justify-center mt-6">
          <CircularChart />
          <ProjectsCompletedLabels />
        </div>
        {/* Projects List  */}
        <ProjectsList />
      </div>
    </div>
  );

  function Header() {
    return (
      <div className="text-[22px] font-bold text-center mt-7">
        Projects Completed
      </div>
    );
  }
  function CircularChart() {
    return (
      <div className="flex justify-center items-center ">
        <div className="w-40 h-40 bg-slate-100 mt-5 rounded-full flex items-center justify-center">
          <div className="w-[86%] h-[86%] bg-white rounded-full flex items-center justify-center">
            <span className="text-xl font-semibold text-orange-600">90%</span>
          </div>
        </div>
      </div>
    );
  }

  function ProjectsCompletedLabels() {
    return (
      <div className="flex justify-center flex-col gap-1 items-center">
        <p className="font-bold trxt-[17px] ">3 completed</p>
        <p className="text-[13px] text-slate-400 ">20 taka</p>
      </div>
    );
  }
  function ProjectsList() {
     return (
    <ul className="flex flex-col gap-3 mt-16 mx-4 sm:mx-2 overflow-auto">
      <SingleProject />
      <hr className="w-[90%] sm:w-[95%] mx-auto text-slate-400 opacity-50" />

      <SingleProject />
      <hr className="w-[90%] sm:w-[95%] mx-auto text-slate-400 opacity-50" />

      <SingleProject />
    </ul>
  );
    function SingleProject() {
      return (
        <li className="p-3 flex gap-3 items-center">
          <div className="w-8 h-8 bg-orange-600 rounded-md justify-center items-center flex text-white">
            <SplitscreenIcon className="" sx={{ fontSize: "19px" }} />
          </div>
          <ul>
            <li className="text-[14px] font-semibold ">Projects</li>
            <li className="text-[12px] text-slate-400 ">#Tasks</li>
          </ul>
        </li>
      );
    }
  }
};

export default StateRightSideBar;
