import React from 'react';
import './App.css';
import Title from './components/title';
import HoursTotalPlaylists from './components/infoUnderTitle';
import Filter from './components/filter';
import Playlists from './components/playlists';

function App() {
  return (
   <div>
     <Title/>
     <HoursTotalPlaylists/>
     <HoursTotalPlaylists/>
     <Filter/>
     <Playlists/>
     <Playlists/>
     <Playlists/>
     <Playlists/>
   </div>
  );
}

export default App;
