import { navigate } from 'gatsby';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { choose } from '../reducers/Champ'
import { Champion } from './ChampionInterface';
import './ListItem.css'

interface ListItemProps {
  champ: Champion
}

function ListItem({ champ }: ListItemProps) {
  const dispatch = useDispatch()
  return (
    <li key={champ.id} onMouseEnter={() => dispatch(choose({ id: champ.id }))} onClick={() => navigate('/ChampPage')}><h2>{champ.name}</h2> <h4>{champ.title}</h4></li>
  )
}

export default ListItem
