import { getClient } from "../lib/ApolloClient";
import CharacterCard from "./components/characterCard";
import {
  GetCharactersDocument,
  GetCharactersQuery,
  GetCharactersQueryVariables,
} from "@/graphql/generated";

export default async function Home() {
  const { data } = await getClient().query<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >({
    query: GetCharactersDocument,
    variables: { page: 1 },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.characters?.results?.map((character: any) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
          />
        ))}
      </div>
    </main>
  );
}
