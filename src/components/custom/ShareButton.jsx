
import { FiShare2 } from "react-icons/fi";
import { Button } from "../ui/button";

const ShareButton = ({ url, title, text }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title || "Tour Guide",
                    text: text || "Check out this awesome trip!",
                    url: url || window.location.href,
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            await navigator.clipboard.writeText(url || window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <Button
            onClick={handleShare}
            className='bg-green-100 w-[30px] h-[28px] text-gray-900 rounded-full hover:bg-purple-300'>
            <FiShare2 />
        </Button>
    );
};

export default ShareButton;