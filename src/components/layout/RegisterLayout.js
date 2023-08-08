import Image from "next/image";
import loginBg from "../../../public/assets/img/login-photo.jpg";
const RegisterLayout = ({ children }) => {
  return (
    <div className="flex h-[100vh] max-w-[1536px]">
      <div className="basis-6/12 bgLogin flex items-center justify-center">
        {children}
      </div>
      <div className="basis-6/12">
        <Image src={loginBg} className="w-full h-full" alt="Login Background" />
      </div>
    </div>
  );
};

export default RegisterLayout;
