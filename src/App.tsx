import { useEffect, useRef, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { SearchBar } from './components/SearchBar';
import { Pokedex } from './components/Pokedex';
import { Pokemon } from './types/Pokemon';
import { fetchPokemonList } from './api/fetchPokemonList';
import { useQuery } from 'react-query';

const App = () => {
  const [modal, setModal] = useState(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonAmount, setPokemonAmount] = useState(9);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useQuery('pokemonList', () =>
    fetchPokemonList(1)
  );
  useEffect(() => {
    if (data) {
      setPokemonList(data);
    }
  }, [data]);

  useEffect(() => {
    const html = document.documentElement;

    modal
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'initial');
  }, [modal]);

  useEffect(() => {
    setError(false);
  }, [pokemonList]);

  return (
    <>
      <HeroSection />
      <SearchBar
        setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        setError={setError}
        setLoading={setLoading}
        setPage={setPage}
        setShowPagination={setShowPagination}
        disabledButton={disabledButton}
        setDisabledButton={setDisabledButton}
        searchBarRef={searchBarRef}
      />
      <Pokedex
        modal={modal}
        setModal={setModal}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        error={error}
        loading={loading}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
        showPagination={showPagination}
        setShowPagination={setShowPagination}
        searchBarRef={searchBarRef}
        disabledButton={disabledButton}
      />
    </>
  );
};

export default App;
