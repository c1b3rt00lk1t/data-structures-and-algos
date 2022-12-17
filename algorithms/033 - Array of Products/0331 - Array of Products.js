function arrayOfProducts(array) {
    return array.map((a, i, arr) => arr.reduce((acc, b, j) => {return acc*(j===i ? 1 : b)},1));
  }