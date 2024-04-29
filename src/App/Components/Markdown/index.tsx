import React, { useState, useRef, useEffect, FC } from 'react';
import './Markdown.css'; // Import the CSS styles
import { useProvided } from 'nonaction'; // Assume the hook is typed
import { TextContainer } from '../../Container';
import Previewer from './Previewer'; // Ensure types are defined for these components
import Editor from './Editor/Editor';
import DragBar from './DragBar';
import 'github-markdown-css';
import useDrop from '../../Container/Hooks/useDrop'; // Assume the hook is typed
import uploadFile from '../../Lib/uploadFile'; // Assume it's typed

interface MarkdownProps {
  className?: string;
}

const Markdown: FC<MarkdownProps> = ({ className }) => {
  const [text, setText] = useProvided<string>(TextContainer);  const [isDrag, setDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [width, setWidth] = useState(window.innerWidth / 2);
  const markdownRef = useRef<HTMLDivElement>(null);
  
  const [uploading, isOver] = useDrop(markdownRef );

  useEffect(() => {
    const handleMouseUp = () => setDrag(false);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={markdownRef}
      style={{ opacity: isOver || uploading ? 0.5 : 1 }}
      className={className}
      onMouseMove={e => {
        if (!isDrag) return;
        const pageX = e.nativeEvent.pageX;
        setWidth(pageX - startX);
      }}
    >
      <Editor className="no-print" width={width} setText={setText} />
      <DragBar
        className="no-print"
        isDrag={isDrag}
        setDrag={setDrag}
        setStartX={setStartX}
      />
      <Previewer>{text}</Previewer>
    </div>
  );
};

export default Markdown;
