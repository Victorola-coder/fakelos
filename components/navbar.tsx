import Link from "next/link";
import { GhIcon } from "./svgs";

const Navbar = () => {
  return (
    <>
      <main className="">
        <header
          className={`fixed z-40 top-0 md:relatives bg-[#061417]/90 pb-3 md:bg-transparent w-full scroll:bg-black pt-[20px] px-[32px] md:py-[30px] lg:px-[80px]`}
        >
          <nav className={`flex items-center justify-between`}>
            {/* <h2
              className={`font-clashbold font-semibold text-[18px] md:text-[25px] leading-[]`}
            >
              VickyJay<span>.</span>
            </h2> */}
            <Link href="/">
              VickyJay<span>!</span>
              <span>⚡</span>
            </Link>
            <div className="text-[#FFFFFF99] hover:text-white transition-all duration-300">
              <a
                href="https://www.github.com/victorola-coder"
                target="_blank"
                rel="noreferrer"
              >
                <span className={` flex items-center gap-[8px] md:gap-[10px]`}>
                  <GhIcon
                    className={`hover:opacity-100 opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px]`}
                  />
                  <p className="font-clash text-[15px] md:text-[18px] font-medium">
                    github
                  </p>
                </span>
              </a>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};

export default Navbar;
