import * as React from "react";
import { AxiosInstance} from 'axios';
import CSS from 'csstype';

import { useSelector } from "react-redux";
import { RootState } from "../pages";
import { useEffect, useState } from "react";

interface ListBackgroundProps {
  api: AxiosInstance
}

const ListBackground = ({api}: ListBackgroundProps) => {
  const champ = useSelector((state: RootState) => state.champ.value)

  const [bgUrl, setBgUrl] = useState('')
  getBase64(`/cdn/img/champion/splash/${champ.id}_0.jpg`, api).then(base64 => setBgUrl(base64))

  const divStyles: CSS.Properties = {
    backgroundImage: `url(data:image/jpeg;base64,${bgUrl})`,
    filter: 'blur(5px)',
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    transition: 'background-image 0.5s ease 0s',
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

export default ListBackground
