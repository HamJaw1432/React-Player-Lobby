import { useState } from "react";
import Player from "./Player";

import Box from '@mui/material/Box';

function Players() {
  const [colors, setColors] = useState(["Red", "Blue", "Green", "Yellow"]);
  const [players, setPlayers] = useState([
    {
      id: 1,
      col: "White",
      lock: false,
    },
    {
      id: 2,
      col: "White",
      lock: false,
    },
    {
      id: 3,
      col: "White",
      lock: false,
    },
    {
      id: 4,
      col: "White",
      lock: false,
    },
  ]);

  const toggleColor = (id, newColor) => {
    if (!colors.includes(newColor)) {
      return;
    }
    let newArr = [...players];
    for (let i = 0; i < players.length; i++) {
      const element = newArr[i];
      if (id === element.id) {
        newArr[i].col = newColor;
        if (newColor !== "Select") {
          newArr[i].lock = newArr[i].lock ? false : true;
        } else {
          newArr[i].lock = false;
        }
        break;
      }
    }
    setPlayers(newArr);
    setColors(colors.filter((ele) => ele !== newColor));
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      {players.map((ele) => (
        <Player
          key={ele.id}
          colorsArr={colors}
          player={ele}
          toggleLock={toggleColor}
        />
      ))}
    </Box>
  );
}

export default Players;
