import * as C from './styles';
import { ReactComponent as PokemonLogo } from '/src/assets/logo-pokemon.svg';

export const Header = () => {
  return (
    <div className="main-container">
      <C.Container>
        <PokemonLogo />
      </C.Container>
    </div>
  );
};
