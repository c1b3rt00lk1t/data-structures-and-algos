function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => a - b);
    blueShirtHeights.sort((a,b) => a - b);
  
    const compare = redShirtHeights.reduce((acc,b,i) => {
      if (b > blueShirtHeights[i]){
        acc += 1;
      } else if (b < blueShirtHeights[i]){
        acc += -1;
      } else {
      }
      return acc;
    }, 0)
    
    return Math.abs(compare) === redShirtHeights.length;
  }
  