import * as React from 'react';
import CSS from 'csstype';
import ListItem from './ListItem';
import { Champion } from './ChampionInterface';
import { useEffect, useState } from 'react';
import CachedApi from '../CachedApi';
import { Link } from 'gatsby';

const api = CachedApi.axiosInstance()
const ChampList = () => {
  const [champs, setChamps] = useState([] as Champion[]);
  useEffect(() => {
    api.get('/api/versions.json')
    .then(res => {
      const current_ver = res.data[0]
      api.get(`/cdn/${current_ver}/data/en_US/champion.json`)
        .then(res => {
          const champions: Champion[] = Object.values(res.data.data)
          setChamps(champions);
        })
    });
  }, [])

  const listStyles: CSS.Properties = {
    position: 'absolute',
    top: '0%',
    left: '25%',
    textAlign: 'center',
    width: '50%',
    listStyleType: 'none',
    overflow: 'hidden',
}

  const champList = champs.sort((a,b)=>a['name'].localeCompare(b['name'])).map(c => 
    <Link to={`/${c.name}`}><ListItem champ={c}/></Link>
  );

  return (
    <ul style={listStyles}>
      { champList }
    </ul>
  )
}

export default ChampList
