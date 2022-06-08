import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setChamp } from '../reducers/Champ'
import { Champion } from './ChampionInterface';
import CSS from 'csstype';

interface ListItemProps {
  champ: Champion
}

const listItemStyles: CSS.Properties = {
  padding: '.5em',
  margin: '3px',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(7, 18, 26, 0.8)',
}

function ListItem({ champ }: ListItemProps) {
  const dispatch = useDispatch()
  return (
    <li style={listItemStyles} key={champ.id} onMouseEnter={() => dispatch(setChamp({ id: champ.id, name: champ.name }))}><h2>{champ.name}</h2> <h4>{champ.title}</h4></li>
  )
}

export default ListItem
