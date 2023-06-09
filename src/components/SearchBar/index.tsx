import * as C from './styles';
import { SearchFilter } from '../SearchFilter';
import { SearchField } from '../SearchField';
import { SearchBarProps } from '../../types/Pokemon';
import { HomeButton } from '../HomeButton';

export const SearchBar = ({
  setPokemonList,
  setLoading,

  setShowPagination,
  disabledButton,
  setDisabledButton,
  searchBarRef,
  pokemonAmount,
  setPokemonAmount,
  setError,
  pokemonList
}: SearchBarProps) => {
  return (
    <div className="main-container" ref={searchBarRef}>
      <C.Container>
        <HomeButton
          setPokemonList={setPokemonList}
          setLoading={setLoading}
          setShowPagination={setShowPagination}
          disabledButton={disabledButton}
          setDisabledButton={setDisabledButton}
        />
        <SearchFilter
          setPokemonList={setPokemonList}
          pokemonAmount={pokemonAmount}
          setPokemonAmount={setPokemonAmount}
          setLoading={setLoading}
          setShowPagination={setShowPagination}
          setDisabledButton={setDisabledButton}
          pokemonList={pokemonList}
        />
        <SearchField
          setPokemonList={setPokemonList}
          setError={setError}
          setLoading={setLoading}
        />
      </C.Container>
    </div>
  );
};
