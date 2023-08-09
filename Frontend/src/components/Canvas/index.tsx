import React, { useRef, useEffect, useState } from 'react';

interface CanvasProps {
  width: number;
  height: number;
}

export const Canvas= () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setDrawing] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Set canvas styles
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        // Add event listeners
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
      }
    }
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    // Start drawing
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
  
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
      setDrawing(true);
    }
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    // Draw line
    if (isDrawing) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
  
      if (ctx) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
      }
    }
  };
  
  const handleMouseUp = (e: MouseEvent) => {
    // Stop drawing
    if (isDrawing) {
      setDrawing(false);
    }
  };
  const handleSave = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
  
    link.download = 'drawing.png';
    link.href = canvas?.toDataURL('image/png') ?? '';
    link.click();
  };
  
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
    const ctx = canvasRef.current?.getContext('2d') ?? null;
  
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
  };
  return(
          <div>
      <canvas ref={canvasRef} width={800} height={800} />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
