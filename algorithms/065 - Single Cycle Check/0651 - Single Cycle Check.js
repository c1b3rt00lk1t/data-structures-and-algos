function hasSingleCycle(array) {
  console.log('length', array.length);

  const visited = {};
  let step = 0;
  let stop = 0;
  let i = 0;

   while (i < array.length) {  
        console.log('start', start)
        step = array.at(stop);
        console.log('step', step)
        stop = step + stop < 0 
              ? array.length + (step + stop) % array.length  
              : (step + stop) % array.length ;
     
        if (visited[stop]) return false;
        visited[stop] = true;
     
        i++;
    } 
    return stop === 0 ? true : false;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;