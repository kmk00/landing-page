import { AiOutlinePlayCircle } from "react-icons/ai";
import img1 from "../../public/business-office-connection-contemporary-working-concept.webp";
import img2 from "../../public/designers-casual-clothes-is-using-laptop.webp";
import img3 from "../../public/developing-programmer-team-development-website-design-coding-technologies.webp";
import decor1 from "../../public/26432.svg";

function Hero() {
  const iconStyle = "text-[60px] text-blue-500 shrink-0";

  return (
    <section className="pt-24 relative max-w-[1540px] w-full px-4 md:px-20 pb-20">
      <span className="absolute h-[1050px] sm:h-[950px]  md:w-[200rem] w-11/12 bg-white translate-y-[-20rem] translate-x-[-30%] md:translate-x-[-160rem] xl:translate-x-[-140rem] rounded-br-3xl z-[-99]"></span>
      <div className="flex flex-col relative md:flex-row md:justify-between items-center gap-8">
        <div className="md:mr-12 text-left self-start w-full md:w-2/3">
          <h1 className="text-xl md:text-4xl xl:text-[48px] tracking-wider font-bold">
            We Are Creative Digital & Marketing Agency
          </h1>
          <p className="font-thin text-lg text-gray-600 mt-4">
            We use methods that are tailored to each of your business and we
            help you make a better world
          </p>
        </div>
        <img
          className="mt-8 md:max-w-[400px] max-w-[280px] md:self-end rounded-[4rem] rounded-tr-none "
          src={img1}
          alt="decoration image"
        ></img>
      </div>
      <div className="flex flex-col items-center relative md:justify-between gap-4 md:flex-row mt-4">
        <span className="flex flex-col absolute z-[-9999] right-0 translate-x-10 translate-y-[-0.5rem]">
          <img className="h-32 filter-gray" src={decor1}></img>
          <img className="h-32 hidden md:block filter-gray" src={decor1}></img>
        </span>
        <span className="absolute hidden md:block bg-transparent w-64 h-64 border-white border-4 rounded-full bottom-0 translate-x-[-5rem] translate-y-[8rem] right-0"></span>
        <a
          className="flex relative md:border-b-4 border-blue-500 pb-20 md:pr-20 group md:self-start items-center gap-2"
          href="#"
        >
          <AiOutlinePlayCircle className={iconStyle} />
          <p className="text-blue-500 group-hover:text-blue-800 md:text-xl text-center underline">
            Watch demo video
          </p>
        </a>
        <div className="flex-col flex md:items-start items-center gap-4 lg:flex-row">
          <img
            className=" max-w-[300px] hidden xl:block  rounded-[4rem] md:rounded-bl-none"
            src={img2}
            alt="decoration image"
          ></img>
          <img
            className=" xl:max-w-[400px] max-w-[300px] hidden md:block rounded-[4rem] md:rounded-br-none "
            src={img3}
            alt="decoration image"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
