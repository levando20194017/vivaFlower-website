import React from "react";
import useFetch from "../UseFetch";

interface DataItem {
  id: number;
  title: string;
}

function Test(): JSX.Element {
  const { data, loading, error } = useFetch("/api/data");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((item: DataItem) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default Test;

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
