import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";
import GetPlacePhoto from "./GetPlacePhoto";

const HotelCard = ({ index, hotel }) => {

    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        hotel && GetPlacePhoto(hotel?.hotelName, setPhotoUrl);
    }, [hotel]);

    return (
        <>
            <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ', ' + hotel?.hotelAddress} key={index} target="_blank">
                <div className='border border-gray-700 rounded-xl hover:scale-105 transition-all cursor-pointer flex flex-col h-full'>
                    <img src={photoUrl || '/assets/trvl.webp'} alt={hotel?.hotelName} className='rounded-xl h-[180px] w-full object-cover' />
                    <div className='flex flex-col gap-1 mt-2 px-2 pb-2'>
                        <h2 className='font-medium'>{hotel?.hotelName}</h2>
                        <p className='text-sm text-gray-400'>📌 {hotel?.hotelAddress}</p>
                        <p className='text-sm text-gray-300'>💲 {hotel?.price} per night</p>
                        <p className='text-sm text-gray-300'>⭐ {hotel?.rating} Stars</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HotelCard