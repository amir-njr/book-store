// React-Icon
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// Img
import emptyPhoto from "../../assets/img/remove-photo.png";
const MyBookCard = ({ title, qty, image }) => {
  return (
    <div className="flex flex-col gap-6 border bg-white p-4 rounded hover:shadow-2xl">
      <img className="h-24" src={image ? image : emptyPhoto} alt={title} />
      <div className="flex justify-between">
        <MdOutlineDriveFileRenameOutline className="text-xl text-blue-700"/>
        <h1>{title}</h1>
      </div>
      <div className="flex justify-between">
        <span>تعداد</span>
        <span>{qty}</span>
      </div>
    </div>
  );
};

export default MyBookCard;
