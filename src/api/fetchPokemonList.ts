import { fetchPokemon } from './fetchPokemon';
import axios from 'axios';

export const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  const { data } = await axios.get(URL);
  const promises = data.results.map(async (pokemon: { name: string }) => {
    const res = await fetchPokemon(pokemon.name);
    return res;
  });

  const pokemonList = Promise.all(promises);

  return pokemonList;
};
