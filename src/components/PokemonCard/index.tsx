import { PokemonType } from '../PokemonType';
import * as C from './styles';
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg';
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg';
import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg';
import { PokemonCardProps } from '../../types/Pokemon';
import { pokemonTypes } from '../../pokemonTypes';
import { SkeletonLoading } from '../helper/SkeletonLoading';
import { usePokemonData } from '../../hooks/usePokemonData';
import { PokemonModal } from '../PokemonModal';

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { open, pokemonData, setOpen } = usePokemonData(
    'pokemons-Card',
    pokemon?.name
  );

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => pokemon?.types[0].type.name.indexOf(type.name) !== -1
  );

  const handleClick = () => {
    setOpen(true);
  };

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <>
      <C.Container>
        <C.CardOverlay color={color} />
        <C.PokemonImg>
          <SkeletonLoading src={imgUrl} alt={pokemon.name} />
        </C.PokemonImg>
        <C.PokemonNumber>{formatPokemonId(pokemon.id)}</C.PokemonNumber>
        <C.PokemonName>{pokemon.name}</C.PokemonName>
        <C.PokemonType>
          {pokemon.types.map(({ type }) => (
            <PokemonType key={type.name} type={type.name} tabIndex={false} />
          ))}
        </C.PokemonType>
        <C.PokemonFeatures>
          <C.PokemonWeight>
            <div>
              <WeightIcon />
              <span>{`${pokemon.weight / 10}`} kg</span>
            </div>
            <span>Peso</span>
          </C.PokemonWeight>
          <C.PokemonHeight>
            <div>
              <RulerIcon />
              <span>{`${pokemon.height / 10}`} m</span>
            </div>
            <span>Altura</span>
          </C.PokemonHeight>
        </C.PokemonFeatures>
        <C.MoreDetailsButton color={color} onClick={handleClick}>
          <BoltIcon />
          Más Detalles
        </C.MoreDetailsButton>
      </C.Container>
      {open && pokemonData && (
        <PokemonModal setModal={setOpen} pokemonData={pokemonData} />
      )}
    </>
  );
};
