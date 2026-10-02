import Button from "../common/Button";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-black 
             min-h-[70vh] md:min-h-screen lg:min-h-[85vh] xl:min-h-screen 
             py-12 md:py-16 lg:py-20"
      >
        {/* Внешний контейнер (определяет ширину ТЕКСТА) */}
        <div className="relative w-full max-w-[1440px] mt-10">
          {/* Внутренний блок с картинками (УЖЕ текста за счет max-w-[900px] и mx-auto) */}
          <div className="flex md:gap-6  xl:gap-12 items-center w-full md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto pb-2 justify-center md:pt-10 ">
            <div className="relative overflow-hidden md:aspect-[3/4] md:w-1/2 w-full max-w-[320px] sm:max-w-[400px]  md:max-w-[500px] px-4">
              <img
                src="/neck.webp"
                alt="tattoo on the neck"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative overflow-hidden md:aspect-[3/4] md:w-1/2 w-full max-w-[320px] sm:max-w-[400px]  md:max-w-[500px] px-4 hidden md:block">
              <img
                src="/male_back.webp"
                alt="tattoo on the man's back"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Блок с текстом (выровнен по нижнему краю картинок и шире их) */}
          <div className="absolute left-0 right-0 z-10 flex items-end w-full overflow-visible pointer-events-none -bottom-8">
            <h1 className="tracking-wider w-full  uppercase  md:text-[11vw] xl:text-[160px] leading-none  text-center sm:whitespace-nowrap font-oswald font-black text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-white/70 to-black bg-clip-text">
                black{" "}
              </span>

              <span className="text-white">ink realm</span>
              {/*<span className="text-transparent bg-gradient-to-r from-white via-black/85 to-white bg-clip-text">
                black ink realm
              </span>*/}
            </h1>
          </div>
        </div>
        {/*<div className="absolute z-20 -translate-x-1/2 bottom-8 mb:bottom-16 left-1/2">*/}
        <div className="flex flex-col pb-8 mt-14 justify-items-center">
          <Button href="https://wa.me/yournumber">book an appointment</Button>
        </div>
      </section>
    </>
  );
}

export default Hero;
