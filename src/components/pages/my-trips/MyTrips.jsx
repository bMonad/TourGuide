import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../service/FirebaseConfig";
import TripCard from "./TripCard";

const MyTrips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return [];

        setTrips([]);
        const q = query(collection(db, "Trips"), where("userEmail", "==", user?.email));
        const snapshot = await getDocs(q);
        const trips = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTrips(trips);
    }

    return (
        <div className="px-5 sm:px-10 md:px-32 lg:px-56 xl:px-72 mt-10 mb-2 text-gray-100">
            <h2 className="text-2xl font-bold">My Trips</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                {trips && trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                ))}
            </div>
            {trips.length === 0 && (
                <div className=" mt-2 text-center">
                    <p className="text-gray-200 p-5">No trips found. Start planning your first trip!</p>
                </div>
            )}
        </div>
    )
}

export default MyTrips