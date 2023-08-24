import { RiArrowLeftDoubleFill } from "react-icons/ri";

const BreadCrumb = ({ title = [] }) => {
  return (
    <div className="border-b-2 px-2 py-1 flex items-center mb-8 gap-1">
      {title[0]}
      <span>
        <RiArrowLeftDoubleFill className="text-purple-600" />
      </span>
      {title[1]}
    </div>
  );
};

export default BreadCrumb;
