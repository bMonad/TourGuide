import React from 'react'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const profilePic = user?.name.split('')[0];

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
            <div>
                {user ? (
                    <Button className='bg-gray-800 text-white rounded-xl hover:bg-red-800 cursor-pointer'>{profilePic}</Button>
                ) : (
                    <Button variant='destructive' className='text-white rounded-sm hover:bg-red-800 cursor-pointer'>Sign In</Button>
                )}
            </div>
        </header>
    )
}

export default Header