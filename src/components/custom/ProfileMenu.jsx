import { googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const ProfileMenu = ({ menuOpen, setMenuOpen, profilePic, user }) => {
    const navigate = useNavigate();
    return (
        <>
            <Button
                onClick={() => { navigate('/plan-trip'); setMenuOpen(false); }}
                className='bg-green-400 text-purple-900 rounded-lg hover:bg-green-500 cursor-pointer'
            >
                Plan trip
            </Button>
            <Button
                onClick={() => { navigate('/my-trips'); setMenuOpen(false); }}
                className='bg-gray-800 text-white rounded-lg hover:bg-slate-900 cursor-pointer'
            >
                My trips
            </Button>
            <Popover>
                <PopoverTrigger className='flex place-items-center gap-3'>
                    <img src={profilePic} alt="Profile"
                        className='w-[35px] h-[35px] object-cover border-2 border-purple-600 rounded-full'
                    />
                    {menuOpen && <span className='text-purple-100'>{user?.given_name}</span>}
                </PopoverTrigger>
                <PopoverContent
                    className='w-auto py-2 mt-4 mr-4 bg-black/20 border-[0.2px] border-gray-700 cursor-pointer text-purple-200'
                    onClick={() => {
                        googleLogout();
                        localStorage.clear();
                        navigate('/');
                    }}>
                    Sign Out
                </PopoverContent>
            </Popover>
        </>
    )
}

export default ProfileMenu;