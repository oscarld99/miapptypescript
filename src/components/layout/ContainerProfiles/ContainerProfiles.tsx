import { Card, List } from "components/ui";
import React, { useState } from "react";
import style from "./ContainerProfiles.module.css";

const ContainerProfiles = () => {
  const [card, setCard] = useState(true);

  return (
    <div className={style.container}>
      <div>
        <button onClick={() => setCard(!card)}>SWITCH</button>
      </div>
      {card ? <Card /> : <List />}
    </div>
  );
};

export default ContainerProfiles;
