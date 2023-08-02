const HOME_TEAM = 1;
const competitions = [
  ['HTML', 'C#'],
  ['C#', 'PYTHON'],
  ['PYTHON', 'HTML'],
];
const results = [0, 0, 1];

const tournamentWinner = (competition, result) => {
  const scores = {};
  let winner = '';

  for (let i = 0; i < competition.length; i++) {
    const roundWinner =
      result[i] === HOME_TEAM ? competition[i][0] : competition[i][1];

    scores[roundWinner] = (scores[roundWinner] || 0) + 3;

    if ((scores[winner] || 0) < scores[roundWinner]) winner = roundWinner;
  }

  return winner;
};

const winner = tournamentWinner(competitions, results);
console.log(winner);
