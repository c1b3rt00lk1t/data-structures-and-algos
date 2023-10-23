class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const ancestorListOne = {};
  let ancestorOne = descendantOne;
  while (ancestorOne) {
    ancestorListOne[ancestorOne.name] = true;
    ancestorOne = ancestorOne.ancestor;
  }

  let ancestorTwo = descendantTwo;
  while (ancestorTwo) {
    if (ancestorListOne[ancestorTwo.name]) {
      return ancestorTwo;
    }
    ancestorTwo = ancestorTwo.ancestor;
  }
}

module.exports = { AncestralTree, getYoungestCommonAncestor };
