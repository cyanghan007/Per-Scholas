const radio = {
  stations: [
    {
      name: 'Frisky',
      songs: [{title: 'Universal', artist: 'Nick Lewis'},
              {title: 'Conjured Connections',artist: 'Lar3n'},
              {title: 'Ethereal', artist: 'Stray Theories'}]
    },
    {
      name: '181.fm - Good Time Oldies',
      songs: [{title: 'The Wah Watusi', artist: 'The Orlons'},
              {title: "I'm Happy Just To Dance With You",artist: 'Beatles'},
              {title: 'Donna The Prima Donna',artist: 'Dion'}]
    },
    {
      name: 'Soul Cafe Radio',
      songs: [{title: 'We Were Made For Us', artist: 'Frank Mccomb'},
              {title: 'Mirage',artist: 'Alex Vaughn'},
              {title: 'Calling Out Your Name', artist: 'The Temptations'}]
    }
  ],
  changeStation() {
    let i = Math.floor(Math.random()* this.stations.length);
    let j = Math.floor(Math.random()* this.stations[i].songs.length);
    console.log("Now Playing: " + this.stations[i].songs[j].title + " by " + this.stations[i].songs[j].artist);
  }
}

radio.changeStation();