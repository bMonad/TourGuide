import { useState } from 'react'
import { Button } from '../../components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';
import { useEffect } from 'react';
import GetPlacePhoto from './GetPlacePhoto';
import ShareButton from '../../components/custom/ShareButton';
import DeleteButton from '../../components/custom/DeleteButton';

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
                <div className='flex gap-3 mt-10'>
                    <DeleteButton
                        collection="Trips"
                        docId={trip?.id}
                        onDelete={() => { window.location.reload() }}
                    />
                    <ShareButton
                        url={window.location.href}
                        title="My Trip"
                        text="Check out my travel plan on Tour Guide!"
                    />
                </div>
            </div>
        </div>
    )
}

export default InfoSection