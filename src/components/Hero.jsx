import { AiOutlinePlayCircle } from "react-icons/ai";
import img1 from "../../public/business-office-connection-contemporary-working-concept.jpg";
import img2 from "../../public/designers-casual-clothes-is-using-laptop.jpg";
import img3 from "../../public/developing-programmer-team-development-website-design-coding-technologies.jpg";

function Hero() {
  const iconStyle = "text-[100px] text-blue-500";

  return (
    <section className="pt-24 relative max-w-[1540px] w-full px-20 pb-20">
      <div className="absolute h-[1050px] sm:h-[950px]  md:w-[200rem] w-11/12 bg-white translate-y-[-20rem] translate-x-[-30%] md:translate-x-[-160rem] xl:translate-x-[-140rem] rounded-br-3xl z-[-99] opacity-95"></div>
      <div className="flex flex-col relative md:flex-row md:justify-between items-center gap-8">
        <div className="md:mr-12 text-left self-start w-2/3">
          <h1 className="text-3xl md:text-4xl xl:text-[48px] tracking-wider font-bold">
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
        <a className="flex group md:self-start items-center gap-2" href="#">
          <AiOutlinePlayCircle className={iconStyle} />
          <p className="text-blue-500 group-hover:text-blue-800 md:text-xl underline">
            Watch demo video
          </p>
          <span className="absolute h-1 w-50 bg-blue-700"></span>
        </a>
        <div className="flex-col flex md:items-start items-center gap-4 lg:flex-row">
          <img
            className=" max-w-[300px] hidden xl:block  rounded-[4rem] md:rounded-bl-none"
            src={img2}
            alt="decoration image"
          ></img>
          <img
            className=" max-w-[400px] hidden md:block rounded-[4rem] md:rounded-br-none "
            src={img3}
            alt="decoration image"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
