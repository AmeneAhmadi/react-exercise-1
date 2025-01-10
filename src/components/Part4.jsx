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
    <p>If you click on this button, it will show an alert, then the button&apos;s text will be changed</p>
      <button type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
}
