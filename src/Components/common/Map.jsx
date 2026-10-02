function NewYorkMap() {
  return (
    <div>
      <a
        href="https://maps.app.goo.gl/usVyFBJ9xFzC2G1KA"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="overflow-hidden ">
          <img
            src="/map.webp"
            alt="Карта расположения"
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105 grayscale contrast-125"
          />
          <div className="pt-6 text-lg font-medium text-rose-900 md:pt-10">
            Открыть карту →
          </div>
        </div>
      </a>
    </div>
  );
}
export default NewYorkMap;
