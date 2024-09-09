import axios from 'axios';
import { defineStore } from 'pinia';

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentAlbum: null,
    currentSong: null,
    album: null,
    songs: null
  }),
  actions: {
    changeLibrary(id) {
      axios
        .get(`https://spotify-server-tzv1.onrender.com/api/artist/${id}/${id}`)
        .then((response) => {
            let data = response.data;
            this.album = data.album[0];
            this.songs = data.songs;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },
    loadSong(album, song) {
      this.currentAlbum = album
      this.currentSong = song

      if(this.audio && this.audio.src) {
        this.audio.pause()
        this.isPlaying = false
        this.audio.src = ''
      }

      this.audio = new Audio()
      this.audio.src = song.path

      setTimeout(() => {
        this.isPlaying = true
        this.audio.play()
      }, 200)
    },
    playOrPauseSong() {
      if (this.audio.paused) {
        this.isPlaying = true
        this.audio.play()
      } else {
        this.isPlaying = false
        this.audio.pause()
      }
    },
    playOrPauseThisSong(album, song) {
      if(!this.audio || !this.audio.src || (this.currentSong.id !== song.id)) {
        this.loadSong(album, song)
        return
      } 
      this.playOrPauseSong()
    },
    prevSong(currentSong) {
      if(currentSong.id == 1) {
        let song = this.songs[this.songs.length - 1]
        this.loadSong(this.album, song)
      } else {
        let song =  this.songs[currentSong.id - 2]
        this.loadSong(this.album, song)
      }
    },
    nextSong(currentSong) {
      if(currentSong.id == this.songs.length) {
        let song = this.songs[0]
        this.loadSong(this.album, song)
      } else {
        let song = this.songs[currentSong.id]
        this.loadSong(this.album, song)
      }
    },
    playFromFirst() {
      this.resetState()
      let song = this.songs[0]
      this.loadSong(this.album, song)
    },
    resetState() {
      this.isPlaying = false
      this.audio = null
      this.currentSong = null
      this.currentSong = null
    }
  },
  persist: true
})
