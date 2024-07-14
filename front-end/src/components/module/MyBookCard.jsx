// React-Icon
import { FaMoneyBillWave } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// Utils
import { sp } from "utils/common";
// Img
import emptyPhoto from "../../assets/img/remove-photo.png";
const MyBookCard = ({ title, price, image }) => {
  return (
    <div className="flex flex-col gap-6 border bg-white p-4 rounded hover:shadow-2xl">
      <img className="h-24" src={image ? image : emptyPhoto} alt={title} />
      <div className="flex justify-between">
        <MdOutlineDriveFileRenameOutline className="text-xl text-blue-700"/>
        <h1>{title}</h1>
      </div>
      <div className="flex justify-between">
        <FaMoneyBillWave className="text-xl text-lime-600"/>
        <span>{sp(price)}</span>
      </div>
    </div>
  );
};

export default MyBookCard;
