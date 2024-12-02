import { Splitscreen } from "@mui/icons-material";
import React from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";

const SingleProjectsCard = () => {
  return (
    <li className="w-[300px] flex flex-col gap-8 rounded-lg p-7 bg-white ">
      <ProjectCartHeader />
      <ProjectCardBody />
      <ProjectsCardFooter />
    </li>
  );

  function ProjectCartHeader() {
    return (
      <div className="flex justify-between items-center">
        <div className=" flex gap-3 items-center border">
          {/* projects icon  */}
          <div className="bg-orange-600 flex justify-center items-center w-[38px] h-[38px] rounded-md ">
            <SplitscreenIcon sx={{ fontSize: "20px" }} className="text-white" />
          </div>
          {/* projects title  */}
          <div className="flex flex-col">
            <span className="font-semibold text-[19px]">Project Title</span>
            <span className="text-slate-400 text-[13px] ">2 days ago</span>
          </div>
          {/* progress bar  */}
        </div>
        {/* more option  */}
        <div>
          <MoreVertIcon className="text-slate-400 text-[19px] cursor-pointer " />
        </div>
      </div>
    );
  }
  function ProjectCardBody() {
    return (
      <ul className="text-slate-400  text-[13px] flex flex-col gap-2 ml-3">
        <li className="flex gap-2 items-center">
          <CircleIcon className="text-[8px] " />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
        <li className="flex gap-2 items-center">
          <CircleIcon className="text-[8px] " />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
      </ul>
    );
  }

  function ProjectsCardFooter() {
    return (
      <div className="flex gap-4 flex-col mt-2">
        
        <div className="text-[12px] gap-3 items-center flex w-full">
          <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden ">
            <div className="w-1/2 bg-orange-600 h-full rounded-r-xl "></div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-[13px] text-slate-400 ">On progress</p>
          <div className="flex gap-1 text-[13px]">
            <p>78%</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleProjectsCard;
