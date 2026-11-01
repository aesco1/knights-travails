function knightMoves(start, target) {
  const queue = [[start, [start]]];
  const visited = new Set([start.join(",")]);

  while (queue.length > 0) {
    const [square, path] = queue.shift();
    if (square[0] === target[0] && square[1] === target[1]) return path;

    const possibleMoves = getMoves(square);
    for (const move of possibleMoves) {
      const key = move.join(",");

      if (visited.has(key)) continue;

      visited.add(key);
      queue.push([move, [...path, move]]);
    }
  }
}

function getMoves(coordinates) {
  const offsetCords = offsets.map(([x, y]) => [
    coordinates[0] + x,
    coordinates[1] + y,
  ]);
  const filteredCords = offsetCords.filter(
    ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8,
  );
  return filteredCords;
}

const offsets = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];
function displayKnightMoves(path) {
  for (const coordinate of path) {
    console.log();
  }
}
displayKnightMoves(knightMoves([0, 0], [7, 7]));
