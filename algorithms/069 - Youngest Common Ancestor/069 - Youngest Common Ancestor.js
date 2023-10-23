class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const ancestorListOne = [];
  let ancestorOne = descendantOne;
  while (ancestorOne) {
    ancestorListOne.push(ancestorOne);
    ancestorOne = ancestorOne.ancestor;
  }

  // const ancestorListTwo = [];
  let ancestorTwo = descendantTwo;
  while (ancestorTwo) {
    if (ancestorListOne.find((anc1) => anc1.name === ancestorTwo.name)) {
      return ancestorTwo;
    }
    ancestorTwo = ancestorTwo.ancestor;
  }
}

module.exports = { AncestralTree, getYoungestCommonAncestor };
