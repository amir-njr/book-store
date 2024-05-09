// State
import { useState } from "react";
// Components
import CaptchaPage from "./CaptchaPage";
import CardInfo from "./CardInfo";

const Shaparak = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-[#00202F] w-full h-[100vh] flex items-center justify-center">
      {step === 1 ? (
        <CaptchaPage step={step} setStep={setStep} />
      ) : (
        <CardInfo />
      )}
    </div>
  );
};

export default Shaparak;
