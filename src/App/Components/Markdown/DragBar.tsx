import React, { FC } from 'react';
import './DragBar.css'; // Importamos los estilos desde un archivo CSS

interface DragBarProps {
  className?: string;
  setDrag: (dragging: boolean) => void;
  setStartX: (x: number) => void;
  isDrag: boolean; // Asumimos que necesitas pasar esta prop basada en tus estilos
}

const DragBar: FC<DragBarProps> = ({ className, setDrag, setStartX, isDrag }) => {
  const dragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const offsetX = e.nativeEvent.offsetX;
    setStartX(offsetX);
  };

  return (
    <div
      className={`${className} ${isDrag ? 'drag-active' : ''}`}
      onMouseDown={e => {
        setDrag(true);
        dragStart(e);
      }}
    />
  );
};

export default DragBar;
