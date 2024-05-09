import { Link } from "react-router-dom";
import hero from "../../assets/img/book-hero.jpg";
const Hero = () => {
  return (
    <div className="flex">
      <div className="basis-6/12 flex flex-col gap-10 justify-center">
        <h1 className="text-6xl font-bold">#کتاب_بخوانیم 📚</h1>
        <p className=" leading-9">
          شهر کتاب ، سایتی می باشد که به شما این امکان را می دهد. تا شما به
          راحتی کتاب مورد علاقه خود را با ارزان ترین قیمت خریداری کرده و مطالعه
          فرمایید.
          <br />
          برای اطلاعات بیشتر روی دکمه بیشتر کلیک نمایید.
        </p>

        <Link
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded w-fit"
          to="/about-us"
        >
          بیشتر
        </Link>
      </div>
      <div className="basis-6/12">
        <img src={hero} className="rounded-md border-4" alt="Hero Photo" />
      </div>
    </div>
  );
};

export default Hero;
