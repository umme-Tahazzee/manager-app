import React from 'react'
import SingleProjectsCard from './SingleProjectsCard';

const AllProjectSection = () => {
    return (
        <div>
            <ul className=' h-[78%] overflow-auto flex gap-4 flex-wrap
             mt-6 max-sm:grid max-sm:grid-cols-1 '>
                <SingleProjectsCard />
                <SingleProjectsCard />
                <SingleProjectsCard />
                <SingleProjectsCard />
                <SingleProjectsCard />
            </ul>

        </div>
    )
}

export default AllProjectSection