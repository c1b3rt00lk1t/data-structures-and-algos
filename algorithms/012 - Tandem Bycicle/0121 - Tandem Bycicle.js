  
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Declarative solution with sort() and reduce()
    // Time: O(Nlog(N))
    // Space: O(1)
    redShirtSpeeds.sort((a,b) => a - b);
    blueShirtSpeeds.sort((a,b) => fastest ? b - a : a - b);
    
    return redShirtSpeeds.reduce((acc,b,i) => acc += Math.max(b,blueShirtSpeeds[i]),0);
  }

  