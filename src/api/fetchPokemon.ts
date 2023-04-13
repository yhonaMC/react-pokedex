import axios from 'axios';
import { Pokemon } from '../types/Pokemon';

export const fetchPokemon = async (pokemon: string): Promise<Pokemon> => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  let response = {} as Pokemon;
  try {
    const { data } = await axios.get(URL);
    if (data) {
      response = data;
    }
  } catch (e) {
    console.log(e);
  }

  return response;
};
