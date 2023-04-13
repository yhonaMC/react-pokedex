import { PokemonCard } from '../PokemonCard';
import * as C from './styles';
import { ErrorMessage } from '../helper/ErrorMessage';
import { Loading } from '../helper/Loading';
import { PokedexProps } from '../../types/Pokemon';

export const Pokedex = ({
  error,
  loading,
  pokemonList,
  modal,
  setModal
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
              {pokemonList &&
                pokemonList?.map((pokemon) => (
                  <PokemonCard
                    modalOpen={modal}
                    key={`${pokemon?.id}-${pokemon.name}`}
                    pokemon={pokemon}
                    setModal={setModal}
                  />
                ))}
            </C.PokemonList>
          )}
        </div>
      </C.Wrapper>
    );
};
