import React from 'react';
import classnames from 'classnames';
import shuffle from 'shuffle-array';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  queue: state.entities.queue
});

class ReactMusicPlayer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          currentSong: this.props.queue[0],
          current: 0,
          progress: 0,
          mute: false,
          queue: this.props.queue,
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
      if (this.currentSong != newProps.queue[0]) {
        this.setState({currentSong: newProps.queue[0], queue: newProps.queue})
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

        let playPauseClass = classnames('fa', {'fa-pause': playing}, {'fa-play': !playing});
        let volumeClass = classnames('fa', {'fa-volume-up': !this.state.mute}, {'fa-volume-off': this.state.mute});

        return (
            <div className="music-player">
                <audio src={currentSong.url} autoPlay={this.state.playing} preload="auto" ref="player"></audio>

                <div className="player-progress-container" onClick={this.setProgress}>
                    <span className="player-progress-value" style={{width: progress + '%'}}></span>
                </div>


                <div className="player-options">
                    <div className="player-buttons player-controls">
                        <button onClick={this.toggle} className="player-btn big" title="Play/Pause">
                            <i className={playPauseClass} />
                        </button>

                        <button onClick={this.previous} className="player-btn medium" title="Previous Song">
                            <i className="fa fa-backward" />
                        </button>

                        <button onClick={this.next} className="player-btn medium" title="Next Song">
                            <i className="fa fa-forward" />
                        </button>
                    </div>

                    <div className="player-buttons">
                        <button className="player-btn small volume" onClick={this.toggleMute} title="Mute/Unmute">
                            <i className={volumeClass} />
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ReactMusicPlayer;
