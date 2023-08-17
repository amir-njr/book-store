import { sp } from "@/utils/common";
import Image from "next/image";

import handout from "../../../public/assets/img/handout.jpg";
import academic from "../../../public/assets/img/academic.jpg";
import story from "../../../public/assets/img/story.jpg";
import novel from "../../../public/assets/img/novel.jpg";
// const photo = [handout , academic , story , novel]
const BookCard = ({ data }) => {
  const { title, price, category } = data;
  return (
    <div className="border rounded p-2 flex flex-col gap-2">
      {category === "handout" ? (
        <Image className="rounded  h-[200px] w-full" src={handout} alt="Handout Photo" />
      ) : null}
      {category === "academic" ? (
        <Image className="rounded  h-[200px] w-full" src={academic} alt="Academic Photo" />
      ) : null}
      {category === "story" ? <Image className="rounded  h-[200px] w-full" src={story} alt="Story Photo" /> : null}
      {category === "novel" ? <Image className="rounded  h-[200px] w-full" src={novel} alt="Novel Photo" /> : null}

      <h1>{title}</h1>
      <span>
        {category === "handout" && "جزوه"}
        {category === "academic" && "علمی"}
        {category === "story" && "داستانی"}
        {category === "novel" && "رمان"}
      </span>
      <span>{`${sp(price)} تومان`}</span>
      <div className="flex justify-between">
        <div>
          <button className="text-white rounded bg-blue-500 hover:bg-blue-600 py-1 px-3">
            افزودن
          </button>
        </div>
        <button className="text-white rounded bg-purple-500 hover:bg-purple-600 py-1 px-3">
          جزئیات
        </button>
      </div>
    </div>
  );
};

export default BookCard;
