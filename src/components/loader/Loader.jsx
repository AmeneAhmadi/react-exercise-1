import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Loader.css";

export default function Loader({ onFinish }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      count > 1 ? setCount(count - 1) : onFinish();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count, onFinish]);

  return (
    <div className="loader-container">
      <div className="loader">{count}</div>
      <div className="line"></div>
    </div>
  );
}

Loader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};