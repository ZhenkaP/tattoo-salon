import Button from "./Button";
import { ARTISTS } from "../../data/artistsData";

function Artist() {
  return (
    <>
      {ARTISTS.map((artist) => (
        <div
          key={artist.name}
          className="flex flex-col items-center w-full h-full gap-4 px-6 py-4 pt-6 pb-6 text-justify shadow-lg md:gap-8 md:px-10 md:pb-8 md:pt-8 shadow-rose-950"
        >
          <img
            src={artist.img}
            alt={artist.name}
            className="object-cover w-48 h-48 rounded-full lg:h-96 lg:w-96 md:w-72 md:h-72"
          />
          <p className="text-lg font-bold md:text-3xl lg:text-4xl">
            {artist.name}
          </p>
          <p className="text-lg md:text-2xl">{artist.about}</p>
          <div className="mt-auto">
            <Button href={artist.instagram}>view profile</Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Artist;
