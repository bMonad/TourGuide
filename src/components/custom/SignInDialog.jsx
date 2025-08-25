import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Button } from "../ui/button";

const SignInDialog = ({ openDialog, setOpenDialog, generateTrip }) => {

    const handleGoogleSignIn = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            GetUserProfile(tokenResponse);
        },
        onError: (error) => {
            console.error('Google Login Error:', error);
        },
    });

    const GetUserProfile = async (tokenResponse) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenResponse?.access_token}`, {
                headers: {
                    Authorization: `Bearer ${tokenResponse?.access_token}`,
                    Accept: 'Application/json'
                },
            });
            console.log('User Profile:', response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            setOpenDialog(false);
            generateTrip();
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog} >
            <DialogContent className="bg-black/40 backdrop-blur-sm hover:backdrop-blur-md border-[0.2px] border-gray-700 ">
                <DialogHeader>
                    <DialogTitle className="flex place-content-center ">
                        <img src="src/assets/tour.png" alt="Tourguide Logo" className='h-8 mb-4' />
                    </DialogTitle>
                    <DialogDescription className="flex  flex-col text-center">
                        <span className='text-lg font-bold pb-1 text-gray-400'>Sign In With Google!</span>
                        <span>Please sign in to your account to continue.</span>
                        <Button
                            className='w-full rounded-lg cursor-pointer mt-4'
                            onClick={handleGoogleSignIn}
                        >
                            <FcGoogle />
                            Sign In with Google
                        </Button>
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <button className="absolute right-4 top-1 text-red-500 hover:text-red-700 text-2xl">
                        ×
                    </button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default SignInDialog;