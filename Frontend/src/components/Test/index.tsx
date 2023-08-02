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
          ctx.strokeRect(100, 100, 200, 200);
        }
      };
      img.src = selectedImage;
    }
  }, [selectedImage]);

  return (
    <div>
      <h1>Tải ảnh lên và hiển thị nó</h1>
      <input type="file" onChange={handleImageUpload} />
      {selectedImage && (
        <div>
          <canvas ref={canvasRef} />
          <img src={selectedImage} alt="Selected" style={{ display: "none" }} />
        </div>
      )}
    </div>
  );
}

export default Test;
