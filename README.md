# knights-travails

This project demonstrates how to use graph search algorithms to solve the shortest path problem on a chessboard.

Given enough turns, a knight on a standard 8x8 chessboard can move from any square to any other square. The knight's basic move is "L" shaped: two steps in one direction and one step perpendicular, or one step in one direction and two steps perpendicular. The knight can face any direction.

The task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all the squares the knight will stop on along the way.
Example Usage

For example, if you want the shortest path from one corner of the chessboard to the opposite corner, you can use the function knightMoves in the following manner:

knightMoves([0, 0], [7, 7]);

This will find the shortest path from square [0, 0] to square [7, 7] and display the sequence of moves the knight takes, along with the number of moves it takes to get there.

getValidMoves Function: This function generates all possible moves for the knight from a given position and ensures that the knight never leaves the chessboard.

Breadth-First Search (BFS): The BFS algorithm is used to find the shortest path between the start and end squares. BFS is suitable for this task because it explores all possible moves level by level, ensuring the shortest path is found. While a depth-first search could also find a path from the start square to the end square, it would not necessarily find the shortest path.

Node Class: The Node class is used to represent each position on the board along with the path taken to reach that position. It helps in tracking the sequence of moves and the current position efficiently.

To run the script, simply call the knightMoves function with the starting and ending coordinates as arguments.
