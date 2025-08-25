import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

const GetPlacePhoto = async (query, setPhotoUrl) => {
    const photoReference = { textQuery: query };
    const photoIndex = Math.floor(Math.random() * 10);
    try {
        const response = await GetPlaceDetails(photoReference);
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', response.data.places[0].photos[photoIndex].name);
        setPhotoUrl(PhotoUrl);
    } catch (error) {
        console.error("Error fetching place photo:", error);
        return null;
    }
}

export default GetPlacePhoto