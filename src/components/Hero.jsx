import img1 from "/business-office-connection-contemporary-working-concept.webp";
import img2 from "/designers-casual-clothes-is-using-laptop.webp";
import img3 from "/decoration.png";
import decor1 from "/26432.svg";
import buttonImg from "/button.svg";
import line from "/line.svg";

function Hero() {
  return (
    <section className="pt-24 relative max-w-[1540px] bg-white md:bg-transparent w-full px-4 md:px-20 md:pb-8">
      <span className="absolute sm:h-[950px] md:w-[200rem] md:block hidden bg-white translate-y-[-17rem]  md:translate-x-[-160rem] xl:translate-x-[-140rem] rounded-br-3xl z-[-99]"></span>
      <div className="flex flex-col relative md:flex-row md:justify-between items-center gap-8">
        <div className="md:mr-12 text-left self-start w-full md:w-3/4">
          <h1 className="text-2xl md:text-4xl xl:text-[48px] tracking-wider font-bold">
            We Are Creative Digital & Marketing Agency
          </h1>
          <p className="font-normal xl:w-3/4 text-lg text-gray-600 mt-4">
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
        <span className="hidden md:flex flex-col absolute z-[-9999] right-0 translate-x-10 translate-y-[-0.5rem]">
          <img
            className="h-32 filter-gray"
            alt="decoration image"
            src={decor1}
          ></img>
          <img
            className="h-32 hidden md:block filter-gray"
            alt="decoration image"
            src={decor1}
          ></img>
        </span>
        <span className="absolute hidden md:block bg-transparent w-80 h-80 border-white border-[3px] rounded-full bottom-0 translate-x-[-1rem] translate-y-[10rem] right-0"></span>
        <a
          className="flex md:pb-20 group md:self-start items-center gap-2"
          href="#"
        >
          <div className="shrink-0">
            <img
              className="absolute bg-blue-500 w-[500px] h-[2px] translate-x-[-460px] translate-y-[70px]"
              src={line}
            ></img>
            <img src={buttonImg}></img>
          </div>
          <p className="text-blue-500 group-hover:text-blue-800 md:text-xl">
            <span className="underline">Watch </span>
            demo video
          </p>
        </a>
        <div className="flex-col flex md:items-start items-center gap-4 lg:flex-row">
          <img
            className=" max-w-[450px] hidden xl:block  rounded-[4rem] md:rounded-bl-none"
            src={img2}
            alt="decoration image"
          ></img>
          <img
            className=" xl:max-w-[265px] max-w-[300px] hidden md:block rounded-[4rem] md:rounded-br-none "
            src={img3}
            alt="decoration image"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
