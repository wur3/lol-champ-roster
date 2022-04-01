import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CachedApi from '../../CachedApi'
import { RootState } from '../../state/createStore'
import CSS from 'csstype';
import { IndivChampion } from '../../components/ChampionInterface';
import { MemoizedBackground } from '../../components/Background';

const api = CachedApi.axiosInstance()
const ChampPage = () => {
  const champ = useSelector((state: RootState) => state.champ.value)
  
  const [current_ver, setCurrentVer] = useState('')
  const [champData, setChampData] = useState<IndivChampion>()

  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')


  useEffect(() => {
    api.get('/api/versions.json')
    .then(res => {
      setCurrentVer(res.data[0])
      api.get(`/cdn/${res.data[0]}/data/en_US/champion/${champ.id}.json`)
        .then(res => {
          const champion: any = res.data.data
          let champKey = champ.id as keyof typeof champion
          setChampData(champion[champKey])
        })
    });
  }, [])

  const nameTitle = champData ? (
    <div><h2>{ champData.title }</h2><h1>{ champData.name }</h1></div>
  ) : <div></div>

  const desc = champData ? (
    <p>{champData.lore}</p>
  ) : <div></div>

  const liStyle: CSS.Properties = {
    display: 'inline-block',
  }

  const imgStyle: CSS.Properties = {
    padding: '1em',
  }

  const spells = champData ? ( 
    <ul>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${current_ver}/img/passive/${champData.passive.image.full}`} style={imgStyle} onMouseOver={() => {setTitle(champData.passive.name);
              setCaption(champData.passive.description);} }/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${current_ver}/img/spell/${champData.spells[0].image.full}`} style={imgStyle} onMouseOver={() => {setTitle(champData.spells[0].name);
              setCaption(champData.spells[0].description);}}/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${current_ver}/img/spell/${champData.spells[1].image.full}`} style={imgStyle} onMouseOver={() => {setTitle(champData.spells[1].name);
              setCaption(champData.spells[1].description);}}/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${current_ver}/img/spell/${champData.spells[2].image.full}`} style={imgStyle} onMouseOver={() => {setTitle(champData.spells[2].name);
              setCaption(champData.spells[2].description);}}/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${current_ver}/img/spell/${champData.spells[3].image.full}`} style={imgStyle} onMouseOver={() => {setTitle(champData.spells[3].name);
              setCaption(champData.spells[3].description);}}/></li>
    </ul>
  ) : <div></div>

  // TEMP: copied from ChampList
  const divStyles: CSS.Properties = {
    position: 'absolute',
    top: '0%',
    left: '25%',
    textAlign: 'center',
    width: '50%',
    listStyleType: 'none',
    overflow: 'hidden',
  }

  return (
    <>
    <MemoizedBackground />
    <div style={divStyles}>
      { nameTitle }
      { desc }
      <ul>
        { spells }
      </ul>
      <h3>{title}</h3>
      <p>{caption}</p>
    </div>
    </>
  )
}

export default ChampPage
