'use client'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTask from "./AllTasks/AllTask";

export default function Page() {
  return (
    <Router>
      <div className="flex w-full h-screen poppins">
        {/* Sidebar will be static */}
        <Sidebar />
        {/* Routes for dynamic pages */}
        <div className="flex-grow">
          <Routes>
            {/* Route for AllProjects */}
            <Route path="/" element={<AllProjects />} />
            
            {/* Route for AllTasks */}
            <Route path="/all-tasks" element={<AllTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
