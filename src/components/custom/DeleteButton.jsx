import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../service/FirebaseConfig";
import { FiTrash2 } from "react-icons/fi";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

const DeleteButton = ({ collection, docId, onDelete }) => {
    const handleDelete = async () => {
        if (!collection || !docId) return;
        try {
            await deleteDoc(doc(db, collection, docId));
            if (onDelete) onDelete();
            toast.success("Trip deleted successfully");
        } catch (error) {
            console.error("Error deleting trip:", error);
            toast.error("Error deleting trip");
        }
    };

    return (
        <Button
            onClick={handleDelete}
            className="bg-red-100 w-[30px] h-[28px] text-red-700 rounded-full hover:bg-red-300"
            title="Delete"
        >
            <FiTrash2 />
        </Button>
    );
};

export default DeleteButton;