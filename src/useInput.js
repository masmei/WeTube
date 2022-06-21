import { useState } from "react";

function useInput(initialValue){
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue)
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
    reset
  };
};

export default useInput;

//recommended by a friend from previous cohort that I try to learn custom useInput hook, used this article and video as references
// 1) https://designcode.io/react-hooks-handbook-useinput-hook
// 2) https://www.youtube.com/watch?v=6am-yn3ZLEw&t=25s
