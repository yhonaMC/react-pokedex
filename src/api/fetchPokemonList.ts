import { fetchPokemon } from './fetchPokemon';
import axios from 'axios';

export const fetchPokemonList = async (offset: number, limit: number) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  const { data } = await axios.get(URL);

  const promises = data.results.map(async (pokemon: { name: string }) => {
    const res = await fetchPokemon(pokemon.name);
    return res;
  });

  const pokemonList = await Promise.all(promises);

  const { results, ...rest } = data;
  return { ...rest, results: pokemonList };
};
