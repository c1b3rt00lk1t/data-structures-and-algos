export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];

    while (queue.length) {
      const current = queue.pop();
      current && array.push(current.name);
      current && current.children.forEach((child) => queue.unshift(child));
    }

    return array;
  }
}
