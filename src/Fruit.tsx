import React from 'react';

interface FruitComponentProps {
  fruitName: string;
  index: number;
  onDeleteClicked?: (fruitName: string, index: number) => void;
  onMoveUp?: (fruitName: string, index: number) => void;
  onMoveDown?: (fruitName: string, index: number) => void;
}
const FruitComponent = (props: FruitComponentProps) => {
  const { fruitName, index, onDeleteClicked, onMoveDown, onMoveUp } = props;
  return (
    <div className="fruit-row">
      <div>{fruitName}</div>
      {onDeleteClicked && <button onClick={() => onDeleteClicked(fruitName, index)}>Delete</button>}
      {onMoveUp && <button onClick={() => onMoveUp(fruitName, index)}>Move Up</button>}
      {onMoveDown && <button onClick={() => onMoveDown(fruitName, index)}>Move Down</button>}
    </div>
  );
};

export default FruitComponent;
