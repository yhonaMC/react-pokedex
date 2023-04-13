import * as C from './styles';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { SyntheticEvent, useState } from 'react';
import { fetchPokemon } from '../../api/fetchPokemon';
import { Pokemon } from '../../types/Pokemon';
import { useQuery } from 'react-query';

type SearchFieldProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

export const SearchField = ({
  setPokemonList,
  setError,
  setLoading
}: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState('');
  const { data, error, isError, refetch } = useQuery(
    ['pokemons', inputValue.toLocaleLowerCase()],
    () => fetchPokemon(inputValue.toLowerCase())
  );
  console.log('🚀 ~ file: index.tsx:23 ~ data:', data);

  const handleSubmit2 = async (e: SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();
    setLoading(false);
    data ? setPokemonList([data]) : setError(true);
    setInputValue('');
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();
    setLoading(false);
    data ? setPokemonList([data]) : setError(true);
    setInputValue('');
  };

  return (
    <>
      <C.Container onSubmit={handleSubmit}>
        <C.InputText
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="buscar pokémon"
          required
        />
        <C.SearchButton>
          <SearchIcon />
        </C.SearchButton>
      </C.Container>
      <C.Container onSubmit={handleSubmit}>
        <C.InputText
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="buscar pokémon"
          required
        />
        <C.SearchButton>
          <SearchIcon />
        </C.SearchButton>
      </C.Container>
    </>
  );
};
