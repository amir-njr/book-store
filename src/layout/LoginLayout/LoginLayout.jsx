// img
import bg_book from "../../assets/img/hero.jpg";

const LoginLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="basis-6/12 flex justify-center items-center">
        {children}
      </div>
      <div className="basis-6/12 flex">
        <img src={bg_book} alt="Book Photo" />
      </div>
    </div>
  );
};

export default LoginLayout;
