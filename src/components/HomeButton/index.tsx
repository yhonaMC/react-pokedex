import * as C from './styles';

import { ReactComponent as HomeIcon } from '../../assets/icon-home.svg';
import { fetchPokemonList } from '../../api/fetchPokemonList';
import { HomeButtonProps } from '../../types/Pokemon';
import { useQuery } from 'react-query';

export const HomeButton = ({
  setPokemonList,
  setLoading,
  setDisabledButton,
  setPage,
  setShowPagination,
  disabledButton
}: HomeButtonProps) => {
  const { data } = useQuery(['pokemonList'], () => fetchPokemonList(1));

  const handleClick = async () => {
    setLoading(true);
    setDisabledButton(true);
    setPokemonList(data);
    setLoading(false);
    setDisabledButton(false);
    setPage(1);
    setShowPagination(true);
  };

  return (
    <C.HomeButton
      className="button"
      onClick={handleClick}
      disabled={disabledButton ? true : false}
    >
      <HomeIcon />
      Início
    </C.HomeButton>
  );
};
