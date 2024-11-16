import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
// import BorderAltIcon from '@mui/icons-material/BorderAlt';



const Sidebar = () => {
    return (
        <div className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r">
            <Logo />
            <Menu />
            <div className="flex items-center justify-center mt-8">
                <Profile />
            </div>
        </div>
    );

    // Profile images
    function Profile() {
        return <div className="w-7 h-7 bg-orange-600 rounded-md"></div>;
    }

    function Menu() {
        return (
            <div className="flex flex-col space-y-4 items-center">
                <HomeIcon
                    sx={{ fontSize: '27px' }}
                    className="text-orange-600 cursor-pointer"
                />
                
                <SplitscreenIcon
                    sx={{ fontSize: '27px' }}
                    className="text-orange-600 cursor-pointer"
                />
                <LogoutIcon
                    sx={{ fontSize: '27px' }}
                    className="text-orange-600 cursor-pointer"
                />
            </div>
        );
    }

    // Logo
    function Logo() {
        return (
            <div className="rounded-md w-10 h-10 flex items-center justify-center">
                <TaskAltIcon
                    className="text-orange-600 font-bold"
                    sx={{ fontSize: "41px" }}
                />
            </div>
        );
    }
};

export default Sidebar;
