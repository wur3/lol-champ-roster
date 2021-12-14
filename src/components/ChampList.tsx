import * as React from 'react';
import './ChampList.css';
import ListItem from './ListItem';
import { Champion } from './ChampionInterface';
import { useEffect, useState } from 'react';
import CachedApi from '../CachedApi';

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

  const champList = champs.sort((a,b)=>a['name'].localeCompare(b['name'])).map(c => 
    <ListItem champ={c}/>
  );

  return (
    <ul>
      { champList }
    </ul>
  )
}

export default ChampList
