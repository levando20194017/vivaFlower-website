// import React from "react";
// import useFetch from "../UseFetch";

// interface DataItem {
//   id: number;
//   title: string;
// }

// function Test(): JSX.Element {
//   const { data, loading, error } = useFetch("/api/data");

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {data.map((item: DataItem) => (
//         <div key={item.id}>{item.title}</div>
//       ))}
//     </div>
//   );
// }

// export default Test;

// import { useState } from "react";
// import { useDeferredValue } from "react";

// function Test(): JSX.Element {
//   const [value, setValue] = useState<string>("");
//   const deferredValue = useDeferredValue(value, { timeoutMs: 1000 });

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <p>The deferred value is: {deferredValue}</p>
//     </div>
//   );
// }
// export default Test;

// import { useRef, useState } from "react";

// function Test() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(count);

//   const handleClick = () => {
//     setCount(count + 1);
//     countRef.current = countRef.current + 1;
//     console.log(`Clicked ${countRef.current} times.`);
//   };

//   return (
//     <div>
//       <p>Clicked {count} times.</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }
// export default Test;

import React, { useState, ChangeEvent, useRef, useEffect } from "react";

function Test(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [endPoint, setEndPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [rectangles, setRectangles] = useState<
    { x: number; y: number; width: number; height: number }[]
  >([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (selectedImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current!.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          // Vẽ bounding box
          ctx.strokeStyle = "red";
          ctx.lineWidth = 2;
          if (startPoint && endPoint) {
            const x = Math.min(startPoint.x, endPoint.x);
            const y = Math.min(startPoint.y, endPoint.y);
            const width = Math.abs(startPoint.x - endPoint.x);
            const height = Math.abs(startPoint.y - endPoint.y);
            ctx.strokeRect(x, y, width, height);
          }
          // Vẽ các hình chữ nhật đã lưu trữ
          ctx.fillStyle = "red";
          rectangles.forEach((rect) => {
            ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
          });
        }
      };
      img.src = selectedImage;
    }
  }, [selectedImage, startPoint, endPoint, rectangles]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setStartPoint({ x, y });
      setEndPoint({ x, y });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas && startPoint) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setEndPoint({ x, y });
    }
  };

  const handleMouseUp = () => {
    if (startPoint && endPoint) {
      const x = Math.min(startPoint.x, endPoint.x);
      const y = Math.min(startPoint.y, endPoint.y);
      const width = Math.abs(startPoint.x - endPoint.x);
      const height = Math.abs(startPoint.y - endPoint.y);
      const newRectangle = { x, y, width, height };
      setRectangles([...rectangles, newRectangle]);
    }
    setStartPoint(null);
    setEndPoint(null);
  };

  return (
    <div>
      <h1>Tải ảnh lên và hiển thị nó</h1>
      <input type="file" onChange={handleImageUpload} />
      {selectedImage && (
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        ></canvas>
      )}
    </div>
  );
}

export default Test;
