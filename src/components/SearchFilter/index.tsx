import * as C from './styles';
import { SyntheticEvent, useEffect, useState } from 'react';
import { fetchPokemonByType } from '../../api/fetchPokemonByType';
import { Slide } from '../Slide';
import { PokemonType } from '../PokemonType';
import { pokemonTypes } from '../../pokemonTypes';
import { SearchFilterProps } from '../../types/Pokemon';

export const SearchFilter = ({
  setLoading,
  setShowPagination,
  pokemonAmount,
  setPokemonList,
  setDisabledButton,
  pokemonList
}: SearchFilterProps) => {
  const [selectedType, setSelectedType] = useState('');

  const handleClick = async (e: SyntheticEvent) => {
    try {
      const typeName = (e.currentTarget as HTMLButtonElement).value;
      setPokemonList(await fetchPokemonByType(typeName, pokemonAmount));
      setSelectedType(typeName);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setShowPagination(false);
    }
  };

  useEffect(() => {
    if (selectedType) {
      (async () => {
        setDisabledButton(true);
        setPokemonList(await fetchPokemonByType(selectedType, pokemonAmount));
        setDisabledButton(false);
      })();
    }
  }, [pokemonAmount, selectedType]);

  return (
    <C.Container>
      <C.Title>Buscar por tipos</C.Title>
      <Slide>
        {pokemonTypes.map(({ name }) => (
          <PokemonType
            key={name}
            type={name}
            tabIndex={true}
            handleClick={handleClick}
          />
        ))}
      </Slide>
    </C.Container>
  );
};
