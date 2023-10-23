class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  const ancestorListOne: Record<string, boolean> = {};

  let ancestorOne: AncestralTree | null = descendantOne;
  let ancestorTwo: AncestralTree | null = descendantTwo;

  while (ancestorOne) {
    ancestorListOne[ancestorOne.name] = true;
    ancestorOne = ancestorOne.ancestor;
  }

  while (ancestorTwo) {
    if (ancestorListOne[ancestorTwo.name]) {
      return ancestorTwo;
    }
    ancestorTwo = ancestorTwo.ancestor;
  }
}
