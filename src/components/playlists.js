import React from 'react';
import '../App.css';

class Playlists extends React.Component{
    render() {
        return (
            <div className="playlists">
              <img src="" alt=""/>
              <h3>Playlist Name</h3>
              <ul className="bullet">
                <li>Song1</li>
                <li>Song2</li>
                <li>Song3</li>
              </ul>
            </div>
        );
    }
}

export default Playlists;
