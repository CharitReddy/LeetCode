function fillPixel(
  image: number[][],
  row: number,
  column: number,
  existingColor: number,
  newColor: number
): void {
  if (
    row < 0 ||
    column < 0 ||
    row >= image.length ||
    column >= image[0].length ||
    image[row][column] !== existingColor
  )
    return;
  image[row][column] = newColor;
  fillPixel(image, row - 1, column, existingColor, newColor);
  fillPixel(image, row + 1, column, existingColor, newColor);
  fillPixel(image, row, column - 1, existingColor, newColor);
  fillPixel(image, row, column + 1, existingColor, newColor);
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) return image;
  fillPixel(image, sr, sc, image[sr][sc], color);
  return image;
}

floodFill(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  0
);
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.
