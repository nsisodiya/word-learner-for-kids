import React from 'react';
import settingIcon from '../assets/61094.png';

export const WelcomeScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.gameTitle}>Word Learner</h1>
      <img
        className="hoverAndMakeItBig"
        onClick={() => {
          window.location.href = '/level-selection';
        }}
        src={settingIcon}
        style={styles.settingsIcon}
      />
      <button
        className="hoverAndMakeItBig"
        onClick={() => {
          window.location.href = '/play';
        }}
        style={styles.playButton}
      >
        Play
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  gameTitle: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
    flex: '0.5',
  },
  settingsIcon: {
    width: '5rem',
    height: '5rem',
    marginBottom: '2rem',
    position: 'absolute',
    right: '4%',
    top: '4%',
  },
  playButton: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '1rem',
    fontWeight: 'bold',
    fontSize: '4rem',
  },
};
