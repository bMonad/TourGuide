import { Link } from "react-router-dom"


const Hotels = ({ trip }) => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Recommended Hotels</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-3'>
                {trip?.tripData?.hotels.map((hotel, index) => (
                    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ', ' + hotel?.hotelAddress} key={index} target="_blank">
                        <div className='p-4 border border-gray-700 rounded-xl hover:scale-105 transition-all cursor-pointer'>
                            <img src='/assets/trip.jpg' alt={hotel?.hotelName} className='rounded-xl' />
                            <div className='flex flex-col gap-1'>
                                <h2 className='font-medium'>{hotel?.hotelName}</h2>
                                <p className='text-sm text-gray-400'>📌 {hotel?.hotelAddress}</p>
                                <p className='text-sm text-gray-300'>💲 {hotel?.price} per night</p>
                                <p className='text-sm text-gray-300'>⭐ {hotel?.rating} Stars</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Hotels