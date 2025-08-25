import { useState } from 'react'
import { Input } from '../ui/input'
import GooglePlaces from '../custom/GooglePlaces'
import FormField from '../custom/FormField';
import MenuOptions from '../custom/MenuOptions';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelersList } from '../../constants/options';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import main from '../../service/AIModel';
import SignInDialog from '../custom/SignInDialog';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../service/FirebaseConfig';
import { LiaSpinnerSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

const PlanTrip = () => {
  const [location, setLocation] = useState(null);
  const [duration, setDuration] = useState('');
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    const travelers = SelectTravelersList.find(item => item.title === value);
    const newValue = travelers?.people || value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleDurationChange = (e) => {
    const value = e.target.value;

    if (/^[1-9]\d*$/.test(value) && value <= 15) {
      setDuration(value);
      setShowError(false);
    } else {
      setDuration('');
      setShowError(true);
    }

    handleInputChange('duration', value);
  };

  const handleKeyDown = (e) => {
    if (['e', 'E', '.', '-', '+'].includes(e.key)) {
      e.preventDefault();
      setShowError(true);
    }
  };

  const generateTrip = async () => {
    const user = localStorage.getItem('user');
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (!formData.location || !formData.duration || !formData.budget || !formData.travelers) {
      toast('Please fill all the fields.');
      return;
    }
    console.log('Form Submitted:', formData);

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{duration}', formData?.duration)
      .replace('{travelers}', formData?.travelers)
      .replace('{budget}', formData?.budget)
      .replace('{duration}', formData?.duration);

    const result = await main(FINAL_PROMPT);
    let cleanedResult = result
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    setLoading(false);
    SaveTrip(cleanedResult);

    setFormData({});
    setDuration('');
    setLocation(null);
    toast.success('Trip Generated Successfully!');
  };

  const SaveTrip = async (TripData) => {
    setLoading(true);
    const docID = Date.now().toString();
    const user = JSON.parse(localStorage.getItem('user'));

    await setDoc(doc(db, 'Trips', docID), {
      id: docID,
      userEmail: user?.email,
      userSelection: formData,
      tripData: JSON.parse(TripData),
    });

    setLoading(false);
    navigate(`/view-trip/${docID}`);
  };

  return (
    <section className='mx-10 mt-10'>
      <h2 className='text-3xl text-purple-100 font-bold text-center mb-6'>Plan Your Trip 🏕️</h2>
      <p className='text-lg text-purple-100 text-center  mb-4'>
        Use our AI-powered tour guide to explore destinations, plan your itinerary, and create unforgettable memories.
      </p>
      <p className='text-lg text-purple-100 text-center  mb-4'>
        Just enjoy the journey of life with ease.
      </p>

      <div className='mt-5'>
        <FormField
          label="Destination of Your Choice"
          component={
            <GooglePlaces
              location={location}
              setLocation={setLocation}
              handleInputChange={handleInputChange}
            />
          }
        />

        <FormField
          label="Duration of Your Trip"
          component={
            <Input
              className='py-4 px-3 border border-gray-300 rounded-sm bg-white text-purple-900'
              type="number"
              placeholder="Ex. 3 (days)"
              min="1"
              max="15"
              value={duration}
              onChange={handleDurationChange}
              onKeyDown={handleKeyDown}
            />
          }
          error={showError && (
            <div className="absolute left-0 right-0 w-[40%] mt-1 bg-red-600 text-white text-sm rounded shadow p-2 mx-auto z-10">
              Duration should be 1 to 15 days.
            </div>
          )}
        />

        <FormField
          label="Budget Options"
          component={
            <MenuOptions
              menuItem={SelectBudgetOptions}
              goGreen={true}
              handleInputChange={handleInputChange}
              name="budget"
              formData={formData}
            />
          }
        />

        <FormField
          label="Travelers Options"
          component={
            <MenuOptions
              menuItem={SelectTravelersList}
              goGreen={false}
              handleInputChange={handleInputChange}
              name="travelers"
              formData={formData}
            />
          }
        />

        <div className='mt-20 mb-10 flex justify-center'>
          <Button
            disabled={loading}
            onClick={generateTrip}
            className='bg-purple-600 md:w-[20%] text-white py-2 px-4 rounded hover:bg-purple-800 cursor-pointer transition-colors'>
            {loading ?
              <LiaSpinnerSolid className="animate-spin h-6 w-6" />
              : 'Generate Trip'}
          </Button>
        </div>

        <SignInDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          generateTrip={generateTrip}
        />

      </div>
    </section>
  )
}
export default PlanTrip


