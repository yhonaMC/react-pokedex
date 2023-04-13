import { useEffect, useRef, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { SearchBar } from './components/SearchBar';
import { Pokedex } from './components/Pokedex';
import { Pokemon } from './types/Pokemon';
import { fetchPokemonList } from './api/fetchPokemonList';
import { useInfiniteQuery } from 'react-query';
import { useinifiniteScroll } from './hooks/useinifiniteScroll';

const App = () => {
  const [modal, setModal] = useState(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonAmount, setPokemonAmount] = useState(9);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPagination, setShowPagination] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const { handlePage, page, limit, offset } = useinifiniteScroll();

  const { fetchNextPage, hasNextPage, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: 'listPokemon',
      queryFn: () => fetchPokemonList(offset, limit),
      getNextPageParam: (lastPage) => lastPage.next || null,
      select: (val) => {
        const resultArray = val.pages.map((page) => page.results);
        return resultArray.flat();
      }
    });

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

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      handlePage();
      if (hasNextPage) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    const debounceScroll = debounce(handleScroll, 200);
    window.addEventListener('scroll', debounceScroll);
    return () => {
      window.removeEventListener('scroll', debounceScroll);
    };
  }, []);

  const debounce = (func: () => void, delay: number) => {
    let timeoutId: number;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  };

  return (
    <>
      <HeroSection />
      <SearchBar
        setPokemonList={setPokemonList}
        pokemonAmount={offset}
        setPokemonAmount={setPokemonAmount}
        setError={setError}
        setLoading={setLoading}
        setShowPagination={setShowPagination}
        disabledButton={disabledButton}
        setDisabledButton={setDisabledButton}
        searchBarRef={searchBarRef}
        pokemonList={pokemonList}
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
        showPagination={showPagination}
        setShowPagination={setShowPagination}
        searchBarRef={searchBarRef}
        disabledButton={disabledButton}
      />
    </>
  );
};

export default App;
