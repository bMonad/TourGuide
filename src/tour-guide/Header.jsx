import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import SignInDialog from '../components/custom/SignInDialog'
import { HiMenuAlt4 } from "react-icons/hi";
import ProfileMenu from '../components/custom/ProfileMenu';

const Header = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const profilePic = user?.picture;

    return (
        <header className='flex justify-between items-center px-5 py-4 shadow-sm ' >
            <figure
                onClick={() => navigate('/')}
                className="cursor-pointer">
                <img
                    src="/assets/tourLogo.png"
                    style={{ width: '120px', height: '40px' }}
                    alt="TourGuide logo" className="logo"
                    loading="lazy"
                />
            </figure>
            <div className="flex items-center">
                {user ? (
                    <>
                        <div className='hidden md:flex items-center gap-5 text-white cursor-pointer'>
                            <ProfileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} profilePic={profilePic} user={user} />
                        </div>
                        <div className="md:hidden flex items-center">
                            <Popover open={menuOpen} onOpenChange={setMenuOpen}>
                                <PopoverTrigger asChild>
                                    <button className="p-2">
                                        <HiMenuAlt4 className="w-7 h-7 text-purple-300" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="flex flex-col gap-2 w-50 bg-black/80 border border-gray-700 mt-2">
                                    <ProfileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} profilePic={profilePic} user={user} />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </>
                ) : (
                    <div className='bg-red-600 p-4 py-1 text-white rounded-sm hover:bg-red-800 cursor-pointer' onClick={() => setOpenDialog(true)}>Sign In</div>
                )}
            </div>

            {openDialog && (
                <SignInDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            )}
        </header>
    )
}

export default Header

