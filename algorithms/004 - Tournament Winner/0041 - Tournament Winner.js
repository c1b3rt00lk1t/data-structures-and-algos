function tournamentWinner(competitions, results) {
    return results.reduce( (acc, b, i) => {
      const winner = competitions[i][results[i] ? 0 : 1];
      acc[winner] ? acc[winner]++ : acc[winner]=1;
      if (acc[acc.result] < acc[winner]){
        acc.result = winner;
      }
      return acc;
      
    }, {result: 'none', none: 0}).result;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;