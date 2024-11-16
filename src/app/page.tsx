import Sidebar from "./Components/Sidebar";
import AllProjects from "./Pages/AllProjects/AllProjects";

export default function Page() {
  return (
    <div className="flex w-full h-screen poppins">
        
        <Sidebar/>
        <AllProjects/>
    </div>
  );
}
