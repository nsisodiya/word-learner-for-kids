import React from 'react';

export const LevelSelection = (props) => {
  const levels = Array(50)
    .fill()
    .map((_, i) => i + 1);
  const splitLevels = levels.reduce((acc, curr, i) => {
    if (i % 5 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);
  return (
    <div style={styles.containerParent}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {splitLevels.map((row, i) => (
            <div key={i} style={styles.row}>
              {row.map((level) => (
                <button
                  onClick={() => {
                    localStorage.setItem('level', level);
                    window.location.href = '/play';
                  }}
                  className="hoverAndMakeItBig"
                  key={level}
                  style={styles.levelButton}
                >
                  <span style={styles.levelNumber}>{level}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  containerParent: {
    height: '100%',
    overflow: 'scroll',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
  },
  levelButton: {
    margin: '1rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '6rem',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #333',
  },
  levelNumber: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#333',
  },
};
