import { useEffect, useState } from "react";
import GetPlacePhoto from "../../../view-trip/components/GetPlacePhoto";
import { Link } from "react-router-dom";
import ShareButton from "../../custom/ShareButton";
import DeleteButton from "../../custom/DeleteButton";

const TripCard = ({ trip }) => {
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        trip && GetPlacePhoto(trip?.userSelection.location.label, setPhotoUrl);
    }, [trip]);

    return (

        <div className="hover:scale-105 transition-all cursor-pointer">
            <div className="relative ">
                <Link to={`/view-trip/${trip.id}`}>
                    <img src={photoUrl ? photoUrl : "/assets/trvl.webp"} alt="Trip Image" className="w-full h-48 object-cover rounded-xl" />
                </Link>
                <div className="flex gap-2 absolute top-2 right-2 z-10">
                    <DeleteButton
                        collection="Trips"
                        docId={trip.id}
                        onDelete={() => { window.location.reload() }}
                    />
                    <ShareButton
                        url={window.location.href}
                        title="My Trip"
                        text="Check out my travel plan on Tour Guide!"
                    />
                </div>
            </div>
            <Link to={`/view-trip/${trip.id}`}>
                <div className="mt-2">
                    <h3 className="font-bold" >{trip?.userSelection.location.label}</h3>
                    <p className="text-sm text-gray-400" >{new Date(parseInt(trip?.id)).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-300 mt-2" >{trip?.userSelection?.duration} Days Trip with {trip?.userSelection?.budget} Budget for {trip?.userSelection?.travelers}</p>
                </div>
            </Link>
        </div>
    )
}

export default TripCard