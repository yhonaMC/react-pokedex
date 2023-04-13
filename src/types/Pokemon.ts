import { SyntheticEvent, ReactNode } from 'react';
export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
  results: any;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface GenerationV {
  'black-white': Sprites;
}

export interface GenerationIv {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  platinum: Sprites;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  'firered-leafgreen': Gold;
  'ruby-sapphire': Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export type HomeButtonProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;

  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
};

export type UsePaginationProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
  page: number;
  setPage: (value: number) => void;
};

export type PokedexProps = {
  setModal: (value: boolean) => void;
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  error: boolean;
  loading: boolean;
  setLoading: (value: boolean) => void;
  page: number;
  showPagination: boolean;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
  modal: boolean;
};

export type PokemonCardProps = {
  pokemon: Pokemon;
  setModal: (value: boolean) => void;
  modalOpen: boolean;
};

export type PokemonModalProps = {
  setModal: (value: boolean) => void;
  pokemonData: Pokemon;
};

export type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  pokemonList: Pokemon[];
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export type SearchFilterProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  pokemonList: Pokemon[];
  setPokemonAmount: (value: number) => void;
  setLoading: (value: boolean) => void;
  setShowPagination: (value: boolean) => void;
  setDisabledButton: (value: boolean) => void;
};

export type SlideProps = {
  children: ReactNode;
};

export type SkeletonLoadingProps = {
  src: string;
  alt: string;
};
