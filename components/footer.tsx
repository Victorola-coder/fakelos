import Link from "next/link";
import { Copyright, FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";

const Footer = () => {
  return (
    <section
      className={`mx-[30px] mt-[60px] pb-[50px] lg:mx-[76px] lg:mt-[150px]`}
    >
      {/* line */}
      <div className="lg:max-w-[13000px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#0A1C20]"></div>
      <div className="mt-[63px] flex flex-col md:flex md:flex-row justify-between items-center ">
        <div className="flex items-center gap-[10px]">
          <span>
            <Copyright
              className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px]`}
            />
          </span>
          <p className={`text-[#FFFFFF99] md:text-xl text-lg font-medium`}>
            Victor Olatunji<span> {new Date().getFullYear()} </span>
          </p>
        </div>
        <div className="mt-[35px] md:mt-[65px] flex justify-start items-center  gap-[26px] md:gap-[40px]">
          <Link
            href="https://web.facebook.com/victortoluu"
            target="_blank"
            rel="noreferrer"
            className={`h-auto w-auto hover:scale-[0.99] active:scale-[1.1]`}
          >
            <FbIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#0a1c20]`}
            />
          </Link>
          <Link
            href="https://twitter.com/HeyVickyJay"
            target="_blank"
            rel="noreferrer"
            className={`h-auto w-auto`}
          >
            <TwIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-[#0a1c20]`}
            />
          </Link>
          <Link
            href="https://www.instagram.com/vickyjayox"
            target="_blank"
            rel="noreferrer"
            className={`h-auto w-auto`}
          >
            <IgIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#0a1c20]`}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/victor-olatunji-889568246"
            target="_blank"
            rel="noreferrer"
            className={`h-auto w-auto`}
          >
            <InIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-[#0a1c20]`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
