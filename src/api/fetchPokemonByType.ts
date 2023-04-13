import { fetchPokemon } from './fetchPokemon';
import axios from 'axios';

type Props = {
  pokemon: { name: string };
};

export const fetchPokemonByType = async (type: string, pokemonAmount = 9) => {
  const URL = `https://pokeapi.co/api/v2/type/${type}`;
  const { data } = await axios.get(URL);

  const promises = data.pokemon
    .filter((item: Props, index: number) => index + 1 <= pokemonAmount && item)
    .map(async (item: { pokemon: { name: string } }) => {
      const res = await fetchPokemon(item.pokemon.name);
      return res;
    });

  const pokemonList = Promise.all(promises);

  return pokemonList;
};
