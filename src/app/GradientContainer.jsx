import React from 'react';

export const GradientContainer = (props) => {
  const { styleName } = props;
  return <div style={styles[styleName]}>{props.children}</div>;
};

const styles = {
  style1: {
    background: 'linear-gradient(to right, #ff0000, #ffff00)',

    width: '100%',
    height: '100%',
  },
  style2: {
    background: 'linear-gradient(to right, #0000ff, #00ffff)',

    width: '100%',
    height: '100%',
  },
  style3: {
    background: 'linear-gradient(to right, #00ff00, #ff00ff)',

    width: '100%',
    height: '100%',
  },
  style4: {
    background: 'linear-gradient(to right, #ff0066, #ff6600)',

    width: '100%',
    height: '100%',
  },
  style5: {
    background: 'linear-gradient(to right, #6600ff, #00ff66)',

    width: '100%',
    height: '100%',
  },
};
