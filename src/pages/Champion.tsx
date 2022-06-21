import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CachedApi from '../CachedApi'
import { RootState } from '../state/createStore'
import CSS from 'csstype';
import { IndivChampion } from '../components/ChampionInterface';
import { MemoizedBackground } from '../components/Background';
import LanguageDropdown from '../components/LanguageDropdown';
import VersionDropdown from '../components/VersionDropdown';
import { useParams } from 'react-router-dom';

const api = CachedApi.axiosInstance()

enum Spells {
  Passive,
  Q,
  W,
  E,
  R
}

const ChampPage = () => {
  // const champ = useSelector((state: RootState) => state.champ.value)
  const version = useSelector((state: RootState) => state.version.value)
  const language = useSelector((state: RootState) => state.language.value)

  const [champ, setChamp] = useState(useParams().champion)
  const [champData, setChampData] = useState<IndivChampion>()

  const [title, setTitle] = useState('')
  const [hoveredSpell, setHoveredSpell] = useState<Spells>(Spells.Passive)
  const [caption, setCaption] = useState('')

  useEffect(() => {
    if (version.num && language.code) {
      api.get(`/cdn/${version.num}/data/${language.code}/champion/${champ}.json`)
      .then(res => {
        const champion: any = res.data.data
        let champKey = champ as keyof typeof champion
        setChampData(champion[champKey])
      })
    }
  }, [version, language])

  useEffect(() => {
    var title = '';
    var caption = '';
    if (champData) {
      switch(hoveredSpell) {
        case Spells.Passive: { 
          title = champData.passive.name
          caption = champData.passive.description
          break; 
        }
        case Spells.Q: { 
          title = champData.spells[0].name
          caption = champData.spells[0].description
          break; 
        }
        case Spells.W: { 
          title = champData.spells[1].name
          caption = champData.spells[1].description
          break; 
        }
        case Spells.E: { 
          title = champData.spells[2].name
          caption = champData.spells[2].description
          break; 
        }
        case Spells.R: { 
          title = champData.spells[3].name
          caption = champData.spells[3].description
          break; 
        }
      }
      setTitle(title);
      setCaption(caption);
    }
  }, [champData, hoveredSpell])

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
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${version.num}/img/passive/${champData.passive.image.full}`} style={imgStyle} onMouseOver={() => setHoveredSpell(Spells.Passive)}/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${version.num}/img/spell/${champData.spells[0].image.full}`} style={imgStyle} onMouseOver={() => setHoveredSpell(Spells.Q)}/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${version.num}/img/spell/${champData.spells[1].image.full}`} style={imgStyle} onMouseOver={() => setHoveredSpell(Spells.W)}/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${version.num}/img/spell/${champData.spells[2].image.full}`} style={imgStyle} onMouseOver={() => setHoveredSpell(Spells.E)}/></li>
      <li style={liStyle}><img src={`https://ddragon.leagueoflegends.com/cdn/${version.num}/img/spell/${champData.spells[3].image.full}`} style={imgStyle} onMouseOver={() => setHoveredSpell(Spells.R)}/></li>
    </ul>
  ) : <div></div>

  // TEMP: copied from ChampList and ListItem :]
  const divStyles: CSS.Properties = {
    position: 'absolute',
    top: '0%',
    left: '25%',
    textAlign: 'center',
    width: '50%',
    listStyleType: 'none',
    overflow: 'hidden',
    padding: '.5em',
    margin: '3px',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(7, 18, 26, 0.8)',
  }

  return (
    <>
    <MemoizedBackground overrideChamp={champ} />
    <VersionDropdown />
    <LanguageDropdown />
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
