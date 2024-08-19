export const createPuzzlePieces = (rows, cols) => {
    const pieces = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        pieces.push({ row: i, col: j });
      }
    }
    return pieces.sort(() => Math.random() - 0.5);
  };
  
  export const isPuzzleSolved = (pieces: { row: number; col: number }[], rows: number, cols: number): boolean => {
    for (let i = 0; i < pieces.length; i++) {
      const piece = pieces[i];
      if (piece.row !== Math.floor(i / cols) || piece.col !== i % cols) {
        return false;
      }
    }
    return true;
  };
  