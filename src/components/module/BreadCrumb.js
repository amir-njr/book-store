import { RiArrowLeftDoubleFill } from "react-icons/ri";

const BreadCrumb = ({ title = [] }) => {
  return (
    <div className="border-b-2 px-2 py-1 flex gap-1">
      {title.map((item, index) => (
        <div key={index} className="flex gap-1 items-center">
          <span>{item}</span>
          <span>
            <RiArrowLeftDoubleFill className="text-purple-600" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
