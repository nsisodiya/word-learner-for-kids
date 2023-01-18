import React from 'react';
import nextIcon from '../assets/next.png';

const allWordsByLevel = [
  [{ word: 'house' }, { word: 'book' }],
  [{ word: 'apple' }, { word: 'banana' }],
];

const wordLengthToFontSizeMap = {
  1: '87vw',
  2: '65vw',
  3: '47vw',
  4: '41vw',
  5: '33vw',
  6: '31vw',
  7: '24vw',
  8: '21vw',
  9: '18vw',
  10: '16vw',
  11: '16vw',
  12: '16vw',
  13: '16vw',
  14: '16vw',
};
export class Play extends React.Component {
  constructor(props) {
    super(props);
    this.words = allWordsByLevel[parseInt(localStorage.getItem('level')) - 1];
    if (this.words === undefined) {
      this.words = [
        {
          word: 'Wrong Level',
        },
      ];
    }

    this.state = {
      currentWord: this.words[Math.floor(Math.random() * this.words.length)],
    };
  }

  componentDidMount() {
    let timerDuration = parseInt(localStorage.getItem('timerDuration'));
    let disableTimer = JSON.parse(localStorage.getItem('disableTimer'));

    if (!disableTimer) {
      this.intervalId = setInterval(() => {
        this.setState({
          currentWord:
            this.words[Math.floor(Math.random() * this.words.length)],
        });
      }, timerDuration * 1000);
    }
  }
  setNewCurrentWord() {
    this.setState({
      currentWord: this.words[Math.floor(Math.random() * this.words.length)],
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.level}>Level : {localStorage.getItem('level')}</div>
        <div
          style={{
            fontSize:
              wordLengthToFontSizeMap[this.state.currentWord.word.length],
          }}
        >
          {this.state.currentWord.word}
        </div>
        {/* <button
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Go Back
        </button> */}
        <img
          className="hoverAndMakeItBig"
          onClick={() => {
            this.setNewCurrentWord();
          }}
          src={nextIcon}
          style={styles.nextIcon}
        />
        <img
          className="rotate180"
          onClick={() => {
            window.location.href = '/';
          }}
          src={nextIcon}
          style={styles.backIcon}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    padding: '9px',
  },
  level: {
    fontSize: '5vh',
    color: '#3838c4',
    position: 'absolute',
    top: '10%',
  },
  nextIcon: {
    width: '5rem',
    height: '5rem',
    marginBottom: '2rem',
    position: 'absolute',
    right: '4%',
    top: '4%',
  },
  backIcon: {
    width: '5rem',
    height: '5rem',
    marginBottom: '2rem',
    position: 'absolute',
    bottom: '4%',
    left: '4%',
  },
};
