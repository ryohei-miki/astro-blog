import { useState } from "react";

export const Header: React.FC = () => {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    console.log("onclick button");
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={onClickButton}>Header</button>
      <div>count{count}</div>
    </div>
  );
};
