import UsePagination from '../Pagination';
import { PokemonCard } from '../PokemonCard';
import * as C from './styles';
import { ReactComponent as AddIcon } from '../../assets/icon-add.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icon-arrow-up.svg';
import { ErrorMessage } from '../helper/ErrorMessage';
import { Loading } from '../helper/Loading';
import { PokedexProps } from '../../types/Pokemon';

export const Pokedex = ({
  error,
  loading,
  showPagination,
  setPokemonList,
  pokemonList,
  setLoading,
  searchBarRef,
  page,
  setPage,
  pokemonAmount,
  disabledButton,
  modal,
  setModal,
  setPokemonAmount
}: PokedexProps) => {
  if (error) return <ErrorMessage />;
  else
    return (
      <C.Wrapper>
        <div className="main-container">
          {loading ? (
            <Loading />
          ) : (
            <C.PokemonList>
              {pokemonList?.map((pokemon) => (
                <PokemonCard
                  modalOpen={modal}
                  key={pokemon?.id}
                  pokemon={pokemon}
                  setModal={setModal}
                />
              ))}
            </C.PokemonList>
          )}
          {pokemonList?.length > 1 &&
            loading === false &&
            showPagination === true && (
              <UsePagination
                setPokemonList={setPokemonList}
                setLoading={setLoading}
                searchBarRef={searchBarRef}
                page={page}
                setPage={setPage}
              />
            )}
          {pokemonList?.length > 1 &&
            loading === false &&
            showPagination === false && (
              <C.ButtonContainer>
                {pokemonAmount < 54 && (
                  <button
                    className="button"
                    onClick={() => setPokemonAmount(pokemonAmount + 9)}
                    disabled={disabledButton ? true : false}
                  >
                    <AddIcon />
                    Mostrar mas pokémons
                  </button>
                )}

                <button
                  className="button"
                  onClick={() => {
                    window.scrollTo({
                      top: searchBarRef.current.offsetTop - 56
                    });
                  }}
                >
                  <UpArrowIcon />
                </button>
              </C.ButtonContainer>
            )}
        </div>
      </C.Wrapper>
    );
};
