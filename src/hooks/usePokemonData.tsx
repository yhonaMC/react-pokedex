import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Pokemon } from '../types/Pokemon';
import { fetchPokemon } from '../api/fetchPokemon';

export const usePokemonData = (queryKey: string, pokemonName: string) => {
  const [open, setOpen] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState({} as Pokemon);
  const { data, isLoading } = useQuery([queryKey, pokemonName], () =>
    fetchPokemon(pokemonName)
  );

  useEffect(() => {
    if (data) {
      setPokemonData(data);
    }
  }, [data]);

  return { open, pokemonData, setOpen };
};
