import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SplitscreenIcon  from '@mui/icons-material/Splitscreen';

const TaskSubHeader = () => {
    return (
        <div className='mt-20 flex justify-between font-bold items-center'>
            <MyProjectsText />
            <SortByButton />
        </div>
    );

    function MyProjectsText() {
         return (
            <div className='     flex items-center gap-3'>
                 <div className='w-[41px] mt-1 flex justify-center items-center h-[44px] rounded-md bg-orange-100  '>
                {/* projects icon  */}
                 <SplitscreenIcon
                 className='text-orange-600'
                 sx={{fontSize:'21px'}}
                 />
                 </div>


                 <ul className='flex flex-col gap-[7px]'>
                     <li className='text-[17px] font-semibold flex gap-2 items-center'>
                      <div className='text-slate-700 flex gap-2 items-center'>
                        <span className='text-lg'>All Projects</span>
                        <span className='bg-slate-700 text-white text-[14px] p-[2px] px-2 rounded-md'>
                            6
                        </span>
                      </div>
                      <KeyboardArrowDownIcon className='text-slate-400 ml-3'/>
                     </li> 
                     <div className='flex gap-1 items-center'>
                         <li className='text-[12px] h-[4px] w-[280px] bg-slate-200 rounded-full overflow-auto'>
                           <div className='w-1/2 h-[100%] bg-orange-600 rounded-r-xl '></div>         
                         </li>
                         <p className='text-[12px] text-slate-400 ml-3 '>20% completed</p>
                     </div>
                 </ul>

            </div>
         )
    }
 
    function SortByButton() {
        return (
            <div className='flex text-[15px] font-semibold gap-3 '>
                <span className='text-slate-300 mt-1'>Sort By</span>
                <div className='flex gap-1 items-center cursor-pointer '>
                    <span className='text-slate-800'>Recent Tasks</span>
                    <KeyboardArrowDownIcon sx={{ fontSize: '30px' }} />

                </div>
            </div>
        );

    }
}

export default TaskSubHeader