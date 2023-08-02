function hasSingleCycle(array) {
    
  console.log('length', array.length);

  const visited = {};
  let start = 0;
  let step = 0;
  let stop = 0;
  let i = 0;

   while (i < array.length) {  
        start = stop;    
        step = array.at(start);
        
        stop = step + stop < 0 
              ? (array.length + (step + stop) % array.length) % array.length  
              : (step + stop) % array.length ;
        console.log('start', start, 'step', step, 'stop', stop)
        if (visited[stop]) return false;
        visited[stop] = true;
        console.log('visited', visited)
        i++;
    } 
    return stop === 0 ;
}

// Do not edit the line below.
module.exports = hasSingleCycle;