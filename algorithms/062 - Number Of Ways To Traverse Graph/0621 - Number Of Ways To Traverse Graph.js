function numberOfWaysToTraverseGraph(width, height) {
    return width === 1 || height === 1 ? 1
           : numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
 }
 