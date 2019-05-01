import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(100);
  return (
    <div>
      <p>현재 카운터 값은 {value} 입니다.</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};
