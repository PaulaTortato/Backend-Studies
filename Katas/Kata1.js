// Desafio do menu do Street Fighter 2: https://www.codewars.com/kata/5853213063adbd1b9b0000be

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

const selecMenu = (moves) => {
  let lastMove = [0, 0];
  const output = moves.map((move) => {
    switch (move) {
      case 'up':
        if (lastMove[0] === 1) {
          lastMove[0] = 0;
          return fighters[lastMove[0]][lastMove[1]];
        }
        return fighters[lastMove[0]][lastMove[1]];
      case 'down':
        if (lastMove[0] === 0) {
          lastMove[0] = 1;
          return fighters[lastMove[0]][lastMove[1]];
        }
        return fighters[lastMove[0]][lastMove[1]];
      case 'right':
        if (lastMove[1] === fighters[0].length - 1) {
          lastMove[1] = 0;
          return fighters[lastMove[0]][lastMove[1]];
        } else {
          lastMove[1] += 1;
          return fighters[lastMove[0]][lastMove[1]];
        }
      case 'left':
        if (lastMove[1] === 0) {
          lastMove[1] = fighters[0].length - 1;
          return fighters[lastMove[0]][lastMove[1]];
        } else {
          lastMove[1] -= 1;
          return fighters[lastMove[0]][lastMove[1]];
        }
      default:
        break;
    }
  });
  return output;
};