import * as React from 'react';
import axios from 'axios';
import './ChampList.css';
import ListItem from './ListItem';
import { Champion } from './ChampionInterface';
import { useState } from 'react';

const ChampList = () => {
  const [champs, setChamps] = useState([] as Champion[]);

  axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(res => {
      const current_ver = res.data[0]
      axios.get(`https://ddragon.leagueoflegends.com/cdn/${current_ver}/data/en_US/champion.json`)
        .then(res => {
          const champions: Champion[] = Object.values(res.data.data)
          setChamps(champions);
      })
  });

  const champList = champs && champs.length > 0 ? champs.sort((a,b)=>a['name'].localeCompare(b['name'])).map(c => 
    <ListItem champ={c}/>
  ) : <span>empty</span>;

  return (
    <ul>
      { champList }
    </ul>
  )
}

export default ChampList
