import * as React from "react";
import { AxiosInstance} from 'axios';
import CSS from 'csstype';

import { useSelector } from "react-redux";
import { useState } from "react";
import CachedApi from "../CachedApi";
import { RootState } from "../state/createStore";

const Background = () => {
  const champ = useSelector((state: RootState) => state.champ.value)

  const [bgUrl, setBgUrl] = useState('')
  // getBase64(`/cdn/img/champion/splash/${champ.id}_0.jpg`, CachedApi.axiosInstance()).then(base64 => setBgUrl(base64))

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
    transition: 'background-image 0.5s ease 0.5s',
  }

  return (
    <div style={divStyles}></div>
  )
}

function getBase64(url: string, api: AxiosInstance) {
  return api
    .get(url, {
      responseType: 'arraybuffer'
    })
    .then(response => Buffer.from(response.data, 'binary').toString('base64'))
}

export const MemoizedBackground = React.memo(Background)
