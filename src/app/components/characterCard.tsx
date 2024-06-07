import React from "react";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  image: string;
  species: string;
};

const CharacterCard = ({ id, name, image, species }: Props) => {
  return (
    <Link href={`/character/${id}`}>
      <div
        className="group relative h-[200px] w-[200px] bg-center bg-cover rounded-[10px] flex items-end justify-center hover:bg-gradient-default p-2"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="hidden relative text-small font-bold text-center z-10 mb-[20px] group-hover:block duration-300">
          {name} - {species}
        </span>
        <div className="absolute inset-0 z-0 bg-gradient-default opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"></div>
      </div>
    </Link>
  );
};

export default CharacterCard;
