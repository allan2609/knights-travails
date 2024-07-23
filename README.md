# knights-travails

Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square. Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction.

The task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

For example, if you want the shortest path from one corner of the chess board to the opposite corner, you can use the function knightMoves in the following manner:

knightMoves([0, 0], [7, 7]);

This will find the shortest path from square [0, 0] to square [7, 7] while also displaying how many moves it takes to get there.

Function getValidMoves makes sure the knight never leaves the chess board and a breadth-first search is performed to find the shortest path between the start and end squares. Using a depth-first search would find a path, but not necessarily the shortest path.
