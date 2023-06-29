function numberOfWaysToTraverseGraph(width, height) {
    const ways = Array.from({length: height}, (_,j) => Array.from({length: width}, (_,i) => j === 0 ? 1 : i === 0 ? 1 : 0));
  
    for (let j = 1; j < height; j++){
      for (let i = 1; i < width; i++){
          ways[j][i] = ways[j-1][i] + ways[j][i-1];      
      }
    }
    return ways.at(-1).at(-1);
  }
  