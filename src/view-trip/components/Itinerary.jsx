import React from 'react'
import PlaceCard from './PlaceCard'

const Itinerary = ({ trip }) => {
    return (
        <div>
            <h2 className='text-lg font-bold my-5'>Itinerary Plan:</h2>
            <div className='flex flex-col gap-4'>
                {trip?.tripData?.itinerary.map((item, index) => (
                    <div key={index} className='p-4 border-b border-gray-700'>
                        <h3 className='font-medium mb-2'>Day {item?.day}:</h3>
                        <div className='grid md:grid-cols-2 gap-5 pb-2 '>
                            {item?.places.map((place, idx) => (
                                <div key={idx} className='text-gray-300'>
                                    <h2 className='text-purple-300 font-bold'>
                                        {place?.placeName}
                                    </h2>
                                    <PlaceCard place={place} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Itinerary    