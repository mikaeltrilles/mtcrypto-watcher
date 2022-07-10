import React, {useEffect, useState} from 'react';
import colors from "../styles/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  //* Choix de la couleur en fonction du pourcentage
  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]);  //* Si on change le pourcentage, on change la couleur (callback)

  //* Je retourne la variable avec la couleur correspondante et un seul chiffre après la virgule
  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;