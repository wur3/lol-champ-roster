import * as React from "react";
import CSS from 'csstype';

import { useSelector } from "react-redux";
import { RootState } from "../pages";

const ListBackground = () => {
  const champ = useSelector((state: RootState) => state.champ.value)
  console.log(champ.key);

  const divStyles: CSS.Properties = {
    backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.key}_0.jpg)`,
    filter: 'blur(5px)',
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

  return (
    <div style={divStyles}></div>
  )
}

export default ListBackground
