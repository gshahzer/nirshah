import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createPuzzlePieces, isPuzzleSolved } from '../util/puzzle';

const PuzzleContainer = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  gap: 2px;
  width: 400px;
  height: 400px;
  margin: 0 auto;
`;

interface PuzzlePieceProps {
  backgroundImage: string;
  size: string;
  position: string;
  onClick?: () => void; // Make onClick optional
}

const PuzzlePiece = styled.div<PuzzlePieceProps>`
  background-image: url(${props => props.backgroundImage});
  background-size: ${props => props.size};
  background-position: ${props => props.position};
  width: 100%;
  height: 100%;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')}; /* Change cursor based on interaction */
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

interface Piece {
  row: number;
  col: number;
}

interface PuzzleProps {
  image: string;
  rows: number;
  cols: number;
}

const Puzzle: React.FC<PuzzleProps> = ({ image, rows, cols }) => {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    setPieces(createPuzzlePieces(rows, cols));
  }, [rows, cols]);

  useEffect(() => {
    if (isPuzzleSolved(pieces, rows, cols)) {
      setSolved(true);
    } else {
      setSolved(false);
    }
  }, [pieces, rows, cols]);

  const handlePieceClick = (index: number) => {
    if (solved) return; // Prevent interaction if puzzle is solved

    const newPieces = [...pieces];
    [newPieces[index], newPieces[pieces.length - 1]] = [newPieces[pieces.length - 1], newPieces[index]];
    setPieces(newPieces);

    if (isPuzzleSolved(newPieces, rows, cols)) {
      setSolved(true);
    }
  };

  

  return (
    <div>
      <PuzzleContainer rows={rows} cols={cols}>
        {pieces.map((piece, index) => (
          <PuzzlePiece
            key={index}
            backgroundImage={image}
            size={`${cols * 100}% ${rows * 100}%`}
            position={`${piece.col * -100}% ${piece.row * -100}%`}
            onClick={() => handlePieceClick(index)}
          />
        ))}
      </PuzzleContainer>
    </div>
  );
};

export default Puzzle;
