import img1 from '../../public/business-office-connection-contemporary-working-concept.jpg';

function Hero() {
  return (
    <section className="pt-24 px-8 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-8 ">
        <div className="md:mr-12">
          <h1 className="text-2xl font-bold">
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
        ></img>
      </div>
      <div className="flex flex-col mt-4">
        <a className="flex gap-4" href="#">
          <button>P</button>
          <p>Watch demo video</p>
        </a>
      </div>
    </section>
  );
}

export default Hero;
