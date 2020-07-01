import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onAnswer, question} = this.props;
    const {type, song, answers} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer
              isPlaying={true}
              src={song.src}
            />
          </div>
        </div>

        <form className={`game__${type}`}>
          {answers.map((answer, i) => {
            return (
              <div key={`${answer.picture}-${i}`} className="artist">
                <input className="artist__input visually-hidden"
                  type="radio" name="answer"
                  value={`artist-${i}`}
                  id={`answer-${i}`}
                  onChange={(evt) => {
                    evt.preventDefault();

                    onAnswer(question, answer);
                  }}/>
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                  {answer.artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      src: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    }))
  })
};

export default ArtistQuestionScreen;
