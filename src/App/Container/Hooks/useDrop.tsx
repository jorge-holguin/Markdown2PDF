import { useEffect, useState, useRef, RefObject, useCallback } from 'react';

interface UseDropProps {
  ref: RefObject<HTMLElement>;
  onLoad: (data: string) => void;
}

function useDrop({ ref, onLoad }: UseDropProps): [boolean, boolean] {
  const [uploading, setUploading] = useState(false);
  const [isOver, setOver] = useState(false);

  const stopDefault = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const uploadHandler = useCallback((files: FileList | null | undefined) => {
    if (files && files[0] && /\.(md)$/i.test(files[0].name)) {
      setUploading(true);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setUploading(false);
        onLoad(e.target!.result as string);
      };
      reader.readAsText(files[0]);
    }
  }, [onLoad]);

  const dragLeaveHandler = useCallback((e: DragEvent) => {
    setOver(false);
    stopDefault(e);
  }, [stopDefault]);

  const dragOverHandler = useCallback((e: DragEvent) => {
    setOver(true);
    stopDefault(e);
  }, [stopDefault]);

  const dropHandler = useCallback((e: DragEvent) => {
    setOver(false);
    stopDefault(e);
    uploadHandler(e.dataTransfer?.files);
  }, [stopDefault, uploadHandler]);

  useEffect(() => {
    const target = ref.current;
    if (target) {
      target.addEventListener('dragenter', stopDefault, true);
      target.addEventListener('dragover', dragOverHandler, true);
      target.addEventListener('dragleave', dragLeaveHandler, true);
      target.addEventListener('drop', dropHandler, true);

      return () => {
        target.removeEventListener('dragenter', stopDefault, true);
        target.removeEventListener('dragover', dragOverHandler, true);
        target.removeEventListener('dragleave', dragLeaveHandler, true);
        target.removeEventListener('drop', dropHandler, true);
      };
    }
  }, [ref, dragOverHandler, dragLeaveHandler, dropHandler, stopDefault]);

  return [uploading, isOver];
}

export default useDrop;
