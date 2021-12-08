import * as React from 'react';
import axios from 'axios';
import './ChampList.css';
import ListItem from './ListItem';

interface Champion {
  blurb: string,
  key: string,
  name: string,
  title: string
};

interface States {
  champs: Champion[]
};

class ChampList extends React.Component<{},States> {
  constructor ({}) {
    super({});
    this.state = {
      champs: []
    };
  }

  componentDidMount() {
    axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
      .then(res => {
        const current_ver = res.data[0]
        axios.get(`http://ddragon.leagueoflegends.com/cdn/${current_ver}/data/en_US/champion.json`)
          .then(res => {
            const champions = Object.values(res.data.data)

            console.log(Object.values(res.data.data));

            this.setState({ champs: champions });
        })
    });
  }

  render() {
    let champs = this.state.champs && this.state.champs.length > 0 ? this.state.champs.map(c => 
      <ListItem champ={c}/>
    ) : <span>empty</span>;

    return (
      <ul>
        {
          champs
        }
      </ul>
    )
  }
}

export default ChampList
