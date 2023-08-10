// Icons
import Upload from "@/components/icons/Upload";
import User from "@/components/icons/User";

export default function Left() {
  return (
    <section className="basis-6/12 flex flex-col justify-center gap-5 items-center">
      <div className="relative w-64 h-64 rounded-full border">
        <input
          className="w-64 h-64 rounded-full z-20 opacity-0 absolute hover:cursor-pointer peer"
          type="file"
        />
        <div className="w-64 h-64 rounded-full absolute flex bg-blue-100 justify-center items-center transition-all">
          <Upload />
        </div>
        <div className="w-64 h-64 rounded-full absolute peer-hover:opacity-0 bg-blue-600 transition-all">
          <User />
        </div>
      </div>

      <span>برای آپلود عکس پروفایل کلیک نمایید.</span>
    </section>
  );
}
