import React from 'react';
import myvideo from './pulse.mp4';

const SplashScreen = () => {
  return (
    <div className="splash">
      <video autoPlay muted>
        <source src={myvideo} type="video/mp4" />
        <track kind="captions" label="loading component" />
      </video>
    </div>
  );
};

export default SplashScreen;
