export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch() {
    return getDepthFirstSearch(this);
  }
}

const getDepthFirstSearch = (currentNode: Node): string | string[] => {
  return !currentNode.children.length
    ? currentNode.name
    : [
        currentNode.name,
        ...currentNode.children.flatMap((child) => getDepthFirstSearch(child)),
      ];
};
