import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
 
import { NotListedLocationSharp } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
const TaskList = () => {
  return (
    <div className="ml-12 mt-12 flex-col flex gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
};
export default TaskList;

function Tabs() {
  return (
    <div className="flex items-center gap-6 ml-3 mt-8 mb-5">
      <div className="flex gap-2 text-orange-400 font-semibold">
        <span>On Going Tasks</span>
        <span className="bg-orange-600 text-white px-2 rounded-md">7</span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        <span className="bg-slate-200 px-2 rounded-md">8</span>
      </div>
    </div>
  );
}

function SingleTask() {
  return (
    <div className="flex gap-2 items-center">
      < Checkbox className="text-orange-600" />
      <div
        className="w-full bg-white rounded-lg border
             border-slate-100 flex gap-3 items-center justify-between p-5 py-6"
      >
        <div className="flex gap-3 items-center">
          {/* wallet icon  */}
          <div>
            <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-between"></div>
            <NotListedLocationSharp className="text-orange-600" />
          </div>
          {/* Wallet name  */}
          <div className="flex flex-col">
            <span className="font-bold hover:text-orange-600 cursor-pointer">
              C reate the UI of the text
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[12px] p-[2px] ">
                Projects
              </span>
            </div>
          </div>
        </div>
        {/* status  */}
        <div className="flex gap-36 font-bold items-center">
          <div className="flex gap-2 items-center">
            <CachedIcon className="text-[12px] text-green-600 " />
            <span className="text-[14px] text-slate-400 ">Low</span>
          </div>
          {/* Action Button  */}
          <div className="flex gap-2 items-center">
            <div
              className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-orange-200
                         hover:bg-orange-300 transition-all "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
