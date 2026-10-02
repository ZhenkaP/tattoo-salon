import Artist from "../common/Artist";

function Artists() {
  return (
    <section
      className="w-full md:min-h-screen bg-stone-500 min-h-[70vh]  py-4 md:pb-10"
      id="artists"
    >
      <div className="max-w-[1440px] mx-auto">
        <h1 className="py-4 pr-6 text-3xl tracking-widest text-right uppercase lg:py-8 md:text-4xl lg:text-[80px] font-boldonse lg:my-6 ">
          artists
        </h1>
        <div className="flex flex-col items-center justify-center w-full gap-6 px-4 mx-auto xl:grid-cols-3 xl:grid xl:items-stretch xl:pt-6 md:px-6 lg:grid-cols-2 lg:grid lg:items-stretch lg:pt-6">
          <Artist />
        </div>
      </div>
    </section>
  );
}

export default Artists;
