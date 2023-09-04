import Image from "next/image";
import loginBg from "../../../public/assets/img/login-photo.jpg";
const RegisterLayout = ({ children }) => {
  return (
    <div className="flex h-[100vh] xl:max-w-[1536px]">
      <div className="md:basis-6/12 w-full bgLogin flex items-center justify-center">
        {children}
      </div>
      <div className="md:basis-6/12 md:block hidden">
        <Image src={loginBg} className="w-full h-full" alt="Login Background" />
      </div>
    </div>
  );
};

export default RegisterLayout;
