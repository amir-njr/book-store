import { Link } from "react-router-dom";

const FormLink = ({ text, href }) => {
  return (
    <Link
      className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
      to={href}
    >
      {text}
    </Link>
  );
};

export default FormLink;
