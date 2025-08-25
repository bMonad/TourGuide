import { useEffect, useState } from "react";
import GetPlacePhoto from "../../../view-trip/components/GetPlacePhoto";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        trip && GetPlacePhoto(trip?.userSelection.location.label, setPhotoUrl);
    }, [trip]);

    return (
        <Link to={`/view-trip/${trip.id}`}>
            <div className="hover:scale-105 transition-all cursor-pointer">
                <img src={photoUrl ? photoUrl : "/assets/trvl.webp"} alt="Trip Image" className="w-full h-48 object-cover rounded-xl" />
                <div>
                    <h3 className="font-bold" >{trip?.userSelection.location.label}</h3>
                    <p className="text-sm text-gray-400" >{new Date(parseInt(trip?.id)).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-300 mt-2" >{trip?.userSelection?.duration} Days Trip with {trip?.userSelection?.budget} Budget for {trip?.userSelection?.travelers}</p>
                </div>
            </div>
        </Link>
    )
}

export default TripCard