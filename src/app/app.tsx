// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { WelcomeScreen } from './WelcomeScreen';
import { GradientContainer } from './GradientContainer';
import { LevelSelection } from './LevelSelection';
import { Play } from './Play';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'normalize.css';

if (!localStorage.getItem('level')) {
  localStorage.setItem('level', '1');
}

if (!localStorage.getItem('timerDuration')) {
  localStorage.setItem('timerDuration', '5');
}
if (!localStorage.getItem('disableTimer')) {
  localStorage.setItem('disableTimer', 'true');
}

export function App() {
  const [currentSelectedComponent, setCurrentSelectedComponent] =
    useState('home');
  return (
    <GradientContainer styleName="style1">
      <Router>
        <Routes>
          <Route element={<LevelSelection />} path="/level-selection"></Route>
          <Route element={<WelcomeScreen />} path="/"></Route>
          <Route element={<Play />} path="/play"></Route>
        </Routes>
      </Router>
    </GradientContainer>
  );
}

export default App;
