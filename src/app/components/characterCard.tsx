import React from "react";

type Props = {
  name: string;
  image: string;
};

const CharacterCard = ({ name, image }: Props) => {
  return (
    <div
      className="h-[200px] w-[200px] bg-center bg-cover rounded-lg flex items-end justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="mb-[20px]">{name}</span>
    </div>
  );
};

export default CharacterCard;
