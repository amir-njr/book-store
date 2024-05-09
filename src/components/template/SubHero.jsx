// React-Icon
import { GiBookshelf } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
// Module
import HeroCard from "../module/HeroCard";

const SubHero = () => {
  return (
    <div className="flex justify-around items-center py-4 border-b-2 border-blue-600">
      <HeroCard
        text="کتاب خواندن"
        icon={<GiBookshelf className="text-6xl" />}
      />
      <FaArrowLeftLong className="text-blue-600" />
      <HeroCard text="نوت برداری" icon={<GiNotebook className="text-6xl" />} />
      <FaArrowLeftLong className="text-blue-600" />
      <HeroCard
        text="آگاهی بیشتر"
        icon={<GiSpellBook className="text-6xl" />}
      />
    </div>
  );
};

export default SubHero;
