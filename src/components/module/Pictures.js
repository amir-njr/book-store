// Image
import Image from "next/image";
// Image
import handout from "../../../public/assets/img/handout.jpg";
import academic from "../../../public/assets/img/academic.jpg";
import story from "../../../public/assets/img/story.jpg";
import novel from "../../../public/assets/img/novel.jpg";

const Pictures = ({ category }) => {
  return (
    <div>
      {category === "handout" ? (
        <Image
          className="rounded h-[200px] w-[300px]"
          src={handout}
          alt="Handout Photo"
        />
      ) : null}
      {category === "academic" ? (
        <Image
          className="rounded h-[200px] w-[300px]"
          src={academic}
          alt="Academic Photo"
        />
      ) : null}
      {category === "story" ? (
        <Image
          className="rounded h-[200px] w-[300px]"
          src={story}
          alt="Story Photo"
        />
      ) : null}
      {category === "novel" ? (
        <Image
          className="rounded h-[200px] w-[300px]"
          src={novel}
          alt="Novel Photo"
        />
      ) : null}
    </div>
  );
};

export default Pictures;
