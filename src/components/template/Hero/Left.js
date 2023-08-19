import Image from "next/image";

import HeroBook from "../../../../public/assets/img/hero.jpg";

const Left = () => {
  return (
    <div className="basis-6/12">
      <Image src={HeroBook} alt="Book Photo" />
    </div>
  );
};

export default Left;
