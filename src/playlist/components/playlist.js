import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import FullScreen from '../../icons/components/full-screen';
import Volume from '../../icons/components/volume';

function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
      <Play
        size={10}
        color="blue"
      />
      <Volume
        size={15}
        color="red"
      />
      <Pause
        size={20}
        color="green"
      />
      <FullScreen
        size={30}
        color="orange"
      />
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;
