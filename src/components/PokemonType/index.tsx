import { pokemonTypes } from '../../pokemonTypes';
import { PokemonTypeProps } from '../../types/Pokemon';
import * as C from './styles';

export const PokemonType = ({
  type,
  handleClick,
  tabIndex
}: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter((item) => item.name === type);

  const imgUrl = new URL(
    `/src/assets/pokemonTypes/${name}.svg`,
    import.meta.url
  ).href;

  return name && color ? (
    <C.Type
      color={color}
      value={name}
      onClick={handleClick}
      tabIndex={tabIndex ? 0 : -1}
    >
      <img src={imgUrl} width={16} height={16} alt={name} />
      {name}
    </C.Type>
  ) : (
    <C.ErrorMessage>
      Ups, no pude encontrar el tipo de este pokémon.
    </C.ErrorMessage>
  );
};
