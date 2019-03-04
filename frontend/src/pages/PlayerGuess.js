import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search as trackSearch } from '../api';
import Track from '../components/Track';
import Scores from '../components/Scores';

class PlayerGuess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      results: [],
    };
  }

  onChange(value) {
    this.setState({
      value,
    });

    this.search(value);
  }

  search(value) {
    if (value.length < 2) {
      return this.setState({
        results: [],
      });
    }

    trackSearch(value, (results) => {
      if (value === this.state.value) {
        this.setState({ results });
      }
    });
  }

  render() {
    const { guessTimer, guessed, players, nickname, onGuess } = this.props;
    const { value, results } = this.state;
    return (
      <div className="game">
        <h1>{guessTimer}</h1>
        {guessed && (
          <div>
            <h2>Waiting for other players</h2>
            <Scores players={players} nickname={nickname} />
          </div>
        )}

        {!guessed && (
          <div>
            <label>
              Guess the song name
              <input
                type="text"
                onChange={e => this.onChange(e.currentTarget.value)}
                value={value}
              />
            </label>
            {results.map(track => (
              <Track track={track} onClick={() => onGuess(track)} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

PlayerGuess.propTypes = {
  guessTimer: PropTypes.number.isRequired,
  guessed: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  nickname: PropTypes.string.isRequired,
  onGuess: PropTypes.func.isRequired,
};

export default PlayerGuess;
