import React from 'react'
import { Link } from 'react-router-dom'

const PlaceCard = ({ place }) => {
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName + ', ' + place?.placeAddress} target="_blank">
            <div className='border rounded-xl p-3 mt-2 flex gap-4 hover:scale-102 transition-all cursor-pointer'>
                <div className='w-[140px] h-auto flex place-items-center'>
                    <img src='/assets/trip.jpg' alt={place?.placeName} className='w-[130px] h-[130px] rounded-xl' />
                </div>
                <div>
                    <p className='text-sm text-gray-400'>{place?.placeDetails}</p>
                    <p className='text-sm text-gray-200 '>Best Time to Visit:
                        <span className='text-orange-200'>
                            {' '}{place?.bestTimeToVisit}
                        </span>
                    </p>
                    <p className='text-sm text-gray-200 '>Entry Fee:
                        <span className={` ${place?.ticketPricing.includes('Free') ? 'text-green-400' : 'text-red-300'}`}>
                            {' '}{place?.ticketPricing}
                        </span>
                    </p>
                    <p className='text-sm text-gray-200 '>Time To Travel:
                        <span className='text-orange-200'>
                            {' '}{place?.timeToTravel}
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCard