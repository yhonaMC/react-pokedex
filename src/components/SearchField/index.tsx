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
  const { data } = useQuery(['pokemons', inputValue.toLowerCase()], () =>
    fetchPokemon(inputValue.toLowerCase())
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    data ? setPokemonList([data]) : setError(true);
    setLoading(false);
    setInputValue('');
  };

  return (
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
  );
};
