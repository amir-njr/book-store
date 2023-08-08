// Link
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto flex items-center text-white py-2">
        <div className="basis-6/12 flex gap-8">
          <Link className="hover:text-black" href="">صفحه اصلی</Link>
          <Link className="hover:text-black" href="">درباره ما</Link>
          <Link className="hover:text-black" href="">ارتباط با ما</Link>
        </div>
        <div className="basis-6/12 flex justify-end">amir</div>
      </div>
    </nav>
  );
};

export default Navbar;