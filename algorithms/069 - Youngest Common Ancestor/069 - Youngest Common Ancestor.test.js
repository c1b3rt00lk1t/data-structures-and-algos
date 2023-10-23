const {
  AncestralTree,
  getYoungestCommonAncestor,
} = require("./069 - Youngest Common Ancestor");

require("./069 - Youngest Common Ancestor").default;

describe("Tests for Youngest Common Ancestor", () => {
  test("Top ancestor is the youngest common ancestor", () => {
    const topAncestor = new AncestralTree("A");
    const descendantOne = new AncestralTree("B");
    descendantOne.ancestor = topAncestor;
    const descendantTwo = new AncestralTree("C");
    descendantTwo.ancestor = topAncestor;

    const expected = "A";

    const result = getYoungestCommonAncestor(
      topAncestor,
      descendantOne,
      descendantTwo
    );
    console.log(result);
    expect(result?.name).toStrictEqual(expected);
  });
});
