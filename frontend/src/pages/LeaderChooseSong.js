import React, { Component } from 'react';
import { search as trackSearch } from '../api';
import Track from '../components/Track'

class LeaderChooseSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      results: []
    };
  }

  render() {
    return (
      <div>
          <label>
            <h2>Dude, enter a song name</h2>
            <input 
              type="text" 
              onChange={(e) => this.onChange(e.currentTarget.value)} 
              value={this.state.value}
            />
          </label>
          {this.state.results.map(track => (
            <Track track = {track} onClick={() => this.props.onSelectSong(track)}/>
          ))}
      </div>
    );
  }

  onChange(value) {
    this.setState({
      value: value
    });

    console.log(value);

    setTimeout(() => {
      if (this.state.value === value) {
        this.search(value);
      }
    }, 50);
  }

  search(value) {
    if (value.length < 2) {
      return this.setState({
        results: []
      });
    }
    trackSearch(value, (results) => {
      console.log(results);
      this.setState({results:results})
    });
  }
}

export default LeaderChooseSong;