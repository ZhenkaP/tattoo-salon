import PhotoSlider from "../common/Slider";

function Gallery() {
  return (
    <section
      id="gallery"
      className="flex flex-col w-full py-4 bg-rose-950 md:pb-10  min-h-[60vh]"
    >
      <PhotoSlider />
    </section>
  );
}

export default Gallery;
