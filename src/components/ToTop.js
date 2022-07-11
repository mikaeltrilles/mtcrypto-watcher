import React from 'react';

//* Composant pour remonter en haut de page lors du scroll

const ToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src="./assets/arrow-icon.svg" alt="icon top" />
    </div>
  );
};

export default ToTop;