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
          currentSong: {url: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBSQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--361e519fe9d6bd267ce3bdb6286ffd80c6fce274/fileNumber1",
          cover: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8e1fc061e1b2b0e51ffa6a02508d31e38e9ff885/rite_of_spring.jpg",
          songId: 1,
          artist: {
            name: 'Bernstein',
            song: 'Rite'
          }},
          current: 0,
          progress: 0,
          mute: false,
          queue: [{url: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBSQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--361e519fe9d6bd267ce3bdb6286ffd80c6fce274/fileNumber1",
          cover: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8e1fc061e1b2b0e51ffa6a02508d31e38e9ff885/rite_of_spring.jpg",
          songId: 1,
          artist: {
            name: 'Bernstein',
            song: 'Rite',
            songId: 1
          }}],
          playing: false
      }
      this.toggle = this.toggle.bind(this);
      this.updateProgress = this.updateProgress.bind(this);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.setProgress = this.setProgress.bind(this);
      this.toggleMute = this.toggleMute.bind(this);
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
        this.setState({currentSong: newProps.queue[0], queue: newProps.queue}, this.play);
      }
    }

    componentWillUnmount() {
        let playerElement = this.refs.player;
        playerElement.removeEventListener('timeupdate', this.updateProgress);
        playerElement.removeEventListener('ended', this.end);
        playerElement.removeEventListener('error', this.next);
    }

    setProgress(e) {
        let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
        let width = target.clientWidth;
        let rect = target.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let duration = this.refs.player.duration;
        let currentTime = (duration * offsetX) / width;
        let progress = (currentTime * 100) / duration;

        this.refs.player.currentTime = currentTime;
        this.setState({ progress: progress });
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
      this.setState({ playing: false });
    }

    next() {
        var total = this.state.queue.length;
        var current = (this.state.current < total - 1) ? this.state.current + 1 : 0;
        var currentSong = this.state.queue[current];

        this.setState({ current: current, currentSong: currentSong, progress: 0 });

        this.refs.player.src = currentSong.url;
        this.play();
    }

    previous() {
        var total = this.state.queue.length;
        var current = (this.state.current > 0) ? this.state.current - 1 : total - 1;
        var currentSong = this.state.queue[current];

        this.setState({ current: current, currentSong: currentSong, progress: 0 });

        this.refs.player.src = currentSong.url;
        this.play();
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
                          <button onClick={this.previous} className="player-btn medium" title="Previous Song">
                              <i className="fas fa-step-backward"></i>
                          </button>

                          <button onClick={this.toggle} className="player-btn big" title="Play/Pause">
                              <i className={playPauseClass} />
                          </button>

                          <button onClick={this.next} className="player-btn medium" title="Next Song">
                              <i className="fas fa-step-forward"></i>
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
