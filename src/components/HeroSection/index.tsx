import * as C from './styles';
import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg';
import { ReactComponent as DividerIcon } from '../../assets/divider-fire.svg';
import { Waves } from '../Waves';
import { PokemonType } from '../PokemonType';
import { Header } from '../Layout/Header';
import imgSrc from '../../assets/img-charizard-min.png';
import { PokemonModal } from '../PokemonModal';
import { usePokemonData } from '../../hooks/usePokemonData';

export const HeroSection = () => {
  const { open, pokemonData, setOpen } = usePokemonData(
    'pokemons-Her-Section',
    'charizard'
  );

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <C.Container>
      <Header />
      <div className="main-container">
        <C.Content>
          <C.CharizardData>
            <C.CharizardNumber>#006</C.CharizardNumber>
            <C.CharizardTypes>
              <PokemonType type={'fire'} tabIndex={false} />
              <PokemonType type={'flying'} tabIndex={false} />
            </C.CharizardTypes>
            <C.CharizardName>Charizard</C.CharizardName>
            <C.CharizardDescription>
              Charizard se asemeja a un gran dragón europeo tradicional. A pesar
              de la similitud, Charizard es explícitamente un Pokémon de tipo
              Fuego y Volador, y no de tipo Dragón, excepto en su forma "Mega
              Charizard X"; Sin embargo, puede aprender ataques de tipo Dragón.
            </C.CharizardDescription>
            <C.MoreDetailsButton onClick={handleClick}>
              <BoltIcon />
              Mas Detalles
            </C.MoreDetailsButton>
          </C.CharizardData>

          <C.Divider>
            <DividerIcon />
          </C.Divider>

          <C.CharizardImg>
            <img
              src={imgSrc}
              width="488"
              height="528"
              alt="Imagem do Charizard"
            />
          </C.CharizardImg>
        </C.Content>
      </div>

      <Waves />
      {open && pokemonData && (
        <PokemonModal setModal={setOpen} pokemonData={pokemonData} />
      )}
    </C.Container>
  );
};
