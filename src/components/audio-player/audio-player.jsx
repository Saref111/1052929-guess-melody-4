import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };

    this._onButtonClickHandler = this._onButtonClickHandler.bind();
  }

  _onButtonClickHandler() {
    this.setState(() => Object.assign(this.state, {isPlaying: !this.state.isPlaying}));
    console.log(this.state);
  }

  componentDidMount() {
    const {src} = this.props;

    this._audio = new Audio(src);

    this._audio.oncanplaythrough = () => this.setState(() => {
      return {
        isLoading: false
      };
    });

    this._audio.onplay = () => this.setState(() => {
      return {
        isPlaying: true
      };
    });
    this._audio.onpause = () => this.setState(() => {
      return {
        isPlaying: false
      };
    });
    this._audio.ontimeupdate = () => this.setState(() => {
      return {
        progress: this._audio.currentTime
      };
    });
  }

  componentWillUnmount() {
    this._audio.oncanplaythrough = null;
    this._audio.onplay = null;
    this._audio.onpause = null;
    this._audio.ontimeupdate = null;
    this._audio.src = ``;
    this._audio = null;
  }

  render() {
    const {isPlaying, isLoading} = this.state;

    return (
      <div className="track">
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._onButtonClickHandler}
        ></button>
        <div className="track__status">
          <audio ></audio>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this._audio.play();
    } else {
      this._audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
