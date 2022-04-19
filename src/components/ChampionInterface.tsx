export interface Champion {
  id: string,
  name: string,
  title: string
};

export interface Image {
  full: string
}

export interface Passive {
  name: string,
  description: string, 
  image: Image,
}

export interface Spell {
  id: string,
  name: string,
  description: string,
  tooltip: string,
  image: Image,
}

export interface IndivChampion {
  id: string,
  name: string,
  title: string,
  lore: string,
  spells: Spell[],
  passive: Passive
}