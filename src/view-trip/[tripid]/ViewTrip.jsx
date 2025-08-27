import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../service/FirebaseConfig';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import Itinerary from '../components/Itinerary';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const ViewTrip = () => {
    const tripId = useParams().tripid;
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        const GetTripDetails = async () => {
            const docRef = doc(db, 'Trips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setTrip(docSnap.data());
            } else {
                toast("No such document!");
            }
        };

        if (tripId) {
            GetTripDetails();
        }
    }, [tripId]);

    return (

        <div className='p-10 md:px-20 lg:px-44 xl:px-56 text-purple-100'>
            <InfoSection trip={trip} />
            <Hotels trip={trip} />
            <Itinerary trip={trip} />
            <Footer trip={trip} />
        </div>
    )
}

export default ViewTrip