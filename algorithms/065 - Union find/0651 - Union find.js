class UnionFind {
    constructor() {
      this.parents = {};
    }
  
    createSet(value) {
      this.parents[value] = value;
    }
  
    find(value) {
      return this.parents[value];
    }
  
    union(valueOne, valueTwo) {
      const parentOne = this.find(valueOne);
      const parentTwo = this.find(valueTwo);
  
      if (parentOne === undefined || parentTwo === undefined || parentOne === parentTwo) return;
  
      Object.entries(this.parents).forEach(([key,value]) => {
        if (value === parentTwo) this.parents[key] = parentOne;
      })
  
    }
  
    
  }
  
