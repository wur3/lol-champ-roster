import * as React from 'react';
import './ListItem.css'

interface Champion {
  blurb: string,
  key: string,
  name: string,
  title: string
};

interface ListItemProps {
  champ: Champion
}

function ListItem({ champ }: ListItemProps) {
  return (
    <li key={champ.key}><h2>{champ.name}</h2> <h4>{champ.title}</h4></li>
  )
}

export default ListItem
