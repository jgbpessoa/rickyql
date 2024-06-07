type CharacterPageParams = {
  params: {
    id: number;
  };
};

export default async function CharacterPage({ params }: CharacterPageParams) {
  return <div>Character Page Id: {params.id}</div>;
}
