import * as C from './styles';
import { ReactComponent as HomeIcon } from '../../assets/icon-home.svg';
import { fetchPokemonList } from '../../api/fetchPokemonList';
import { HomeButtonProps } from '../../types/Pokemon';
import { useQuery } from 'react-query';
import { useinifiniteScroll } from '../../hooks/useinifiniteScroll';

export const HomeButton = ({
  setPokemonList,
  setLoading,
  setDisabledButton,

  setShowPagination,
  disabledButton
}: HomeButtonProps) => {
  const { limit, offset } = useinifiniteScroll();
  const { data } = useQuery(['pokemonList'], () =>
    fetchPokemonList(offset, limit)
  );

  const handleClick = async () => {
    setLoading(true);
    setDisabledButton(true);
    setPokemonList(data?.results ? data.results : data);
    setLoading(false);
    setDisabledButton(false);

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
