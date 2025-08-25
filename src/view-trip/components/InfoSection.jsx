import { useState } from 'react'
import { FiShare2 } from "react-icons/fi";
import { Button } from '../../components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';
import { useEffect } from 'react';
import GetPlacePhoto from './GetPlacePhoto';

const InfoSection = ({ trip }) => {
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        trip && GetPlacePhoto(trip?.userSelection?.location?.label, setPhotoUrl);
    }, [trip]);

    return (
        <div>
            <img src={photoUrl || '/assets/trvl.webp'} alt='trip.title' className='h-[340px] w-full object-cover rounded-sm' />

            <div className='flex justify-between items-center'>
                <div className='w-full my-5 flex flex-col gap-2'>
                    <h2 className='text-2xl font-bold'>
                        {trip?.userSelection.location.label}</h2>
                    <div className='flex flex-wrap gap-5'>
                        <h2 className='p-1 px-3 bg-gray-800 rounded-full text-gray-300 ' >
                            🗓️ {trip?.userSelection.duration} Days
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-800 rounded-full text-gray-300' >
                            💰 {trip?.userSelection.budget} Budget
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-800 rounded-full text-gray-300' >
                            👯‍♂️ {trip?.userSelection.travelers}
                        </h2>
                    </div>
                </div>
                <Button
                    className='bg-green-100 w-[40px] mt-10 text-gray-900 rounded-full hover:bg-purple-300'>
                    <FiShare2 />
                </Button>
            </div>
        </div>
    )
}

export default InfoSection