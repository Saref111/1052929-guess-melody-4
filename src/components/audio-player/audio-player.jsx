import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState(() => {
      return {
        isLoading: false
      };
    });

    audio.onplay = () => this.setState(() => {
      return {
        isPlaying: true
      };
    });

    audio.onpause = () => this.setState(() => {
      return {
        isPlaying: false
      };
    });

    audio.ontimeupdate = () => this.setState(() => {
      return {
        progress: audio.currentTime
      };
    });
  }

  componentWillUnmount() {
    let audio = this._audioRef.current;
    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
    audio = null;
  }

  render() {
    const {onButtonClick} = this.props;
    const {isPlaying, isLoading} = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => {
            this.setState(() => {
              return {isPlaying: !this.state.isPlaying};
            });
            onButtonClick();
          }}
        ></button>
        <div className="track__status">
          <audio ref={this._audioRef} ></audio>
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.state.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
