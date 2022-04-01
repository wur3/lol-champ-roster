import * as React from "react";
import CSS from 'csstype';

import { useSelector } from "react-redux";
import { RootState } from "../state/createStore";

const Background = () => {
  const champ = useSelector((state: RootState) => state.champ.value)

  const divStyles: CSS.Properties = {
    position: 'fixed',
    backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg)`,
    filter: 'blur(5px)',
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    transition: 'background-image 0.15s ease 0.15s',
  }

  return (
    <div style={divStyles}></div>
  )
}

export const MemoizedBackground = React.memo(Background)
