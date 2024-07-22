class Node {
  constructor(position, path) {
    this.position = position;
    this.path = path;
  }
}

function knightMoves(start, end) {
  const size = 8;
  const moves = [
    [-2, -1], [-1, -2], [1, -2], [2, -1],
    [2, 1], [1, 2], [-1, 2], [-2, 1]
  ];
    
  function getValidMoves([row, column]) {
    let validMoves = [];
    for (let [validRow, validColumn] of moves) {
      let newRow = row + validRow;
      let newColumn = column + validColumn;
      if (newRow >= 0 && newRow < size && newColumn >= 0 && newColumn < size) {
        validMoves.push([newRow, newColumn]);
      }
    }
    return validMoves;
  }
    
  let queue = [new Node(start, [start])];
  let visited = new Set();
  visited.add(start.toString());
    
  while (queue.length > 0) {
    let currentNode = queue.shift();
    let currentPos = currentNode.position;
    let currentPath = currentNode.path;
    
    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      console.log("You made it in " + (currentPath.length - 1) + " moves! Here's your path: ");
      console.log(currentPath);
      return currentPath;
    }
    
    for (let move of getValidMoves(currentPos)) {
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push(new Node(move, [...currentPath, move]));
      }
    }
  }
  console.log("No valid path found.");
  return null;
}
