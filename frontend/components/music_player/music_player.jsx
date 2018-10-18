import React from 'react';
import classnames from 'classnames';
import shuffle from 'shuffle-array';
import { connect } from 'react-redux';
import SongFavoriteButton from '../songs/song_favorite_button';

const mapStateToProps = state => {
  return {
  queue: state.entities.queue
}};

class ReactMusicPlayer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          currentSong: {cover: window.darkDoor,
          url: window.darkDoorSong,
          songId: 1,
          artist: {
            name: 'Victoire',
            song: 'A Door in the Dark'
          }},
          current: 0,
          progress: 0,
          mute: false,
          repeat: false,
          shuffle: false,
          currentTime: 0,
          originalQueue: [],
          queue: [{cover: window.darkDoor,
          url: window.darkDoorSong,
          songId: 1,
          artist: {
            name: 'Victoire',
            song: 'A Door in the Dark'
          }}],
          playing: false
      }
      this.toggle = this.toggle.bind(this);
      this.updateProgress = this.updateProgress.bind(this);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.setProgress = this.setProgress.bind(this);
      this.toggleMute = this.toggleMute.bind(this);
      this.repeat = this.repeat.bind(this);
      this.shuffle = this.shuffle.bind(this);
      this.end = this.end.bind(this);
    }

    componentDidMount() {
        let playerElement = this.refs.player;
        playerElement.addEventListener('timeupdate', this.updateProgress);
        playerElement.addEventListener('ended', this.end);
        playerElement.addEventListener('error', this.next);
    }

    componentWillReceiveProps(newProps) {
      if (!newProps.queue){
        return;
      }
      if (this.state.currentSong.url != newProps.queue[0]) {
        this.setState({
          currentSong: newProps.queue[0],
          queue: newProps.queue,
          originalQueue: newProps.queue}, this.play);
      }
    }

    componentWillUnmount() {
        let playerElement = this.refs.player;
        playerElement.removeEventListener('timeupdate', this.updateProgress);
        playerElement.removeEventListener('ended', this.end);
        playerElement.removeEventListener('error', this.next);
    }

    setProgress(e) {
      debugger;
      let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
      let width = target.clientWidth;
      let rect = target.getBoundingClientRect();
      let offsetX = e.clientX - rect.left;
      let duration = this.refs.player.duration;
      let currentTime = (duration * offsetX) / width;
      let progress = (currentTime * 100) / duration;

      this.refs.player.currentTime = currentTime;
      this.setState({ progress: progress});
      this.play();
    }

    updateProgress() {
        let duration = this.refs.player.duration;
        let currentTime = this.refs.player.currentTime;
        let progress = (currentTime * 100) / duration;

        this.setState({ progress: progress });
    }

    play() {
        this.setState({ playing: true });
        this.refs.player.play();
    }

    pause() {
        this.setState({ playing: false });
        this.refs.player.pause();
    }

    toggle() {
        this.state.playing ? this.pause() : this.play();
    }

    end() {
      if (this.state.repeat) {
        this.play()
      } else {
        this.setState({play: false});
        this.next();
      }
    }

    next() {
        var current = this.state.repeat ? (
          this.state.current
        ) : (
          this.state.current < this.state.queue.length-1 ? (
            this.state.current + 1
          ) : ( 0 )
        )
        var currentSong = this.state.queue[current];
        this.setState({ current: current, currentSong: currentSong, progress: 0 });
        this.refs.player.src = currentSong.url;
        this.play();
    }

    previous() {
        var current = this.state.repeat ? (
          this.state.current
        ) : (
          this.state.current > 0 ? this.state.current - 1 : this.state.queue.length - 1
        )
        var currentSong = this.state.queue[current];
        this.setState({ current: current, currentSong: currentSong, progress: 0 });
        this.refs.player.src = currentSong.url;
        this.play();
    }

    repeat() {
      this.setState({ repeat: !this.state.repeat });
    }

    shuffle() {
      var shuffledQueue = this.state.originalQueue.slice(0,1).concat(shuffle(this.state.originalQueue.slice(1)));
      if (this.state.shuffle) {
        this.setState({ shuffle: false, queue: this.state.originalQueue})
      } else {
        this.setState( { shuffle: true, queue: shuffledQueue})
      }
    }

    toggleMute() {
        let mute = this.state.mute;

        this.setState({ mute: !this.state.mute });
        this.refs.player.volume = (mute) ? 1 : 0;
    }

    render () {

        const { currentSong, playing, progress } = this.state;

        let playPauseClass = classnames('fa', {'fas fa-pause': playing}, {'fas fa-play-circle': !playing});
        let volumeClass = classnames('fa', {'fa-volume-up': !this.state.mute}, {'fa-volume-off': this.state.mute});

        return (
            <div className="music-player">
                <audio src={currentSong.url} autoPlay={this.state.playing} preload="auto" ref="player"></audio>

                <div className="song-info-and-img">
                  <img className="song-info-img" src={currentSong.cover}></img>
                  <div className="song-info-title-artistname">
                    <h6 className="song-info-title">{currentSong.artist.song}</h6>
                    <h6 className="song-info-artist-name">{currentSong.artist.name}</h6>
                  </div>
                  <SongFavoriteButton songId={currentSong.songId} />
                </div>

                <div className="player-options">
                    <div className="player-buttons player-controls">

                        <div className="pbf">

                          <button onClick={this.shuffle} className={this.state.shuffle ? "player-btn small active-btn" : "player-btn small"}>
                            <i className="fas fa-random"></i>
                          </button>

                          <button onClick={this.previous} className="player-btn medium" title="Previous Song">
                              <i className="fas fa-step-backward"></i>
                          </button>

                          <button onClick={this.toggle} className="player-btn big" title="Play/Pause">
                              <i className={playPauseClass} />
                          </button>

                          <button onClick={this.next} className="player-btn medium" title="Next Song">
                              <i className="fas fa-step-forward"></i>
                          </button>

                          <button onClick={this.repeat} className={this.state.repeat ? `player-btn small active-btn` : `player-btn small`}>
                            <i className="fas fa-infinity"></i>
                          </button>

                        </div>

                        <div className="player-progress-container" onClick={this.setProgress}>
                          <span className="player-progress-value" style={{width: progress + '%'}}></span>
                        </div>

                    </div>

                </div>
                <div className="volume-manager">
                  <button className="mute-btn" onClick={this.toggleMute} title="Mute/Unmute">
                      <i className={volumeClass} />
                  </button>
                </div>


            </div>
        );
    }
}

export default connect(mapStateToProps)(ReactMusicPlayer);
