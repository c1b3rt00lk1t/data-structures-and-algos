class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function compareByName(tree1, tree2) {
  return tree1.name === tree2.name;
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const ancestorListOne = [];
  let ancestorOne = descendantOne;
  while (ancestorOne) {
    ancestorListOne.push(ancestorOne);
    ancestorOne = ancestorOne.ancestor;
  }

  const ancestorListTwo = [];
  let ancestorTwo = descendantTwo;
  while (ancestorTwo) {
    ancestorListTwo.push(ancestorTwo);
    ancestorTwo = ancestorTwo.ancestor;
  }

  for (let anc1 of ancestorListOne) {
    if (ancestorListTwo.find((anc2) => anc2.name === anc1.name)) {
      return anc1;
    }
  }
}

module.exports = { AncestralTree, getYoungestCommonAncestor };
