import { useEffect } from 'react';

type ResizeCallback = () => void;

export default function useResizeHandler(onResize: ResizeCallback): void {
  useEffect(() => {
    const handleResize = () => {
      onResize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onResize]);
}
