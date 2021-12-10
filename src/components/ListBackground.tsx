import * as React from "react";
import CSS from 'csstype';

const divStyles: CSS.Properties = {
  backgroundImage: 'url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg)',
  filter: 'blur(5px)',
  width: '100%',
  height: '100vh',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
}

const ListBackground = () => (
  <div style={divStyles}></div>
)

export default ListBackground
