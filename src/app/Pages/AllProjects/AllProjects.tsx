import React from 'react'
import ProjectsHeader from './Components/ProjectsHeader'
import ProjectsSubHeader from './Components/ProjectsSubHeader'
import AllProjectSection from './Components/AllProjectSection'


const AllProjects = () => {
    return (
        <div className='bg-slate-50 w-full min-h-screen flex'>
            <AllProjectsArea />
            {/* projects side bar we are going to add  */}
        </div>

    )
    function AllProjectsArea() {
        return (
            <div className='w-[78%] p-10 flex flex-col gap-3 border'>
                <ProjectsHeader />
                <ProjectsSubHeader />
                <AllProjectSection/>
            </div>
        )
    }

}

export default AllProjects