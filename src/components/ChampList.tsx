import * as React from 'react';
import CSS from 'csstype';
import ListItem from './ListItem';
import { Champion } from './ChampionInterface';
import { useEffect, useState } from 'react';
import CachedApi from '../CachedApi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/createStore';

const api = CachedApi.axiosInstance()
const ChampList = () => {
  const [champs, setChamps] = useState([] as Champion[]);

  const version = useSelector((state: RootState) => state.version.value)
  const language = useSelector((state: RootState) => state.language.value)

  useEffect(() => {
    if (version.num && language.code) {
      api.get(`/cdn/${version.num}/data/${language.code}/champion.json`)
      .then(res => {
        const champions: Champion[] = Object.values(res.data.data)
        setChamps(champions);
      })
    }
  }, [version, language])

  const listStyles: CSS.Properties = {
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '0%',
    left: '25%',
    textAlign: 'center',
    width: '50%',
    listStyleType: 'none',
    overflow: 'hidden',
  }

  const champList = champs.sort((a,b)=>a['name'].localeCompare(b['name'])).map((c,i) => 
    <Link style={{ textDecoration: 'none' }} 
          key={i} 
          to={`/champion/${c.id}`}
    >
      <ListItem champ={c}/>
    </Link>
  );

  return (
    <ul style={listStyles}>
      { champList }
    </ul>
  )
}

export default ChampList
