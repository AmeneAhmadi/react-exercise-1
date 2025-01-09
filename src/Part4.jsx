import { useState } from "react";
export default function Part4() {
  const [buttonText, setButtonText] = useState("Click Me");
  const handleClick = () => {
    alert("You Clicked!");
    setButtonText("Button Text Has Been Changed Successfully!");
  };
  return (
    <>
    <h6>Part4</h6>
      <button type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
}
