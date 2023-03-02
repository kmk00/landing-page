import { AiOutlinePlayCircle } from 'react-icons/ai';
import img1 from '../../public/business-office-connection-contemporary-working-concept.jpg';
import img2 from '../../public/designers-casual-clothes-is-using-laptop.jpg';
import img3 from '../../public/developing-programmer-team-development-website-design-coding-technologies.jpg';

function Hero() {
  const iconStyle = 'text-[100px] text-blue-500';

  return (
    <section className="pt-24 realtive px-8 pb-20">
      <div className="absolute h-[700px] w-2/3 bg-white translate-y-[-6rem] translate-x-[-6rem] rounded-br-3xl z-0"></div>
      <div className="flex flex-col relative md:flex-row items-center gap-8 z-10">
        <div className="md:mr-12">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            We Are Creative Digital & Marketing Agency
          </h1>
          <p className="font-thin text-gray-600 mt-4">
            We use methods that are tailored to each of your business and we
            help you make a better world
          </p>
        </div>
        <img
          className="mt-8 max-w-[400px] shadow-md shadow-black rounded-3xl rounded-bl-none "
          src={img1}
          alt="decoration image"
        ></img>
      </div>
      <div className="flex flex-col items-center relative md:justify-between gap-4 md:flex-row mt-4">
        <a className="flex group items-center gap-2" href="#">
          <AiOutlinePlayCircle className={iconStyle} />
          <p className="text-blue-500 group-hover:text-blue-800 md:text-xl underline font-thin">
            Watch demo video
          </p>
        </a>
        <div className="flex-col flex md:items-start items-center gap-4 lg:flex-row">
          <img
            className=" max-w-[300px] hidden md:block shadow-md shadow-black rounded-full md:rounded-bl-none selt-top"
            src={img2}
            alt="decoration image"
          ></img>
          <img
            className="mt-8 max-w-[400px] hidden md:block shadow-md shadow-black rounded-full md:rounded-br-none "
            src={img3}
            alt="decoration image"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
