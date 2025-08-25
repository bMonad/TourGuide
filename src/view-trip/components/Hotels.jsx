import HotelCard from "./HotelCard"

const Hotels = ({ trip }) => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Recommended Hotels</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-3'>
                {trip?.tripData?.hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))}
            </div>
        </div>
    )
}

export default Hotels