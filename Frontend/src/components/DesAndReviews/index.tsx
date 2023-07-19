import "./style.scss";
import { useState } from "react";
export const DesAndReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="des-and-reviews mt-4">
      <ul className="nav justify-content-center">
        <li
          className={activeIndex === 0 ? "nav-item active" : "nav-item"}
          onClick={() => handleSetActiveIndex(0)}
        >
          Description
        </li>
        <li
          className={activeIndex === 1 ? "nav-item active" : "nav-item"}
          onClick={() => handleSetActiveIndex(1)}
        >
          Reviews (99)
        </li>
      </ul>
      <div className="des"></div>
      <div className="reviews"></div>
    </div>
  );
};
