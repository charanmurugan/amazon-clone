import React from "react";
import "../styles/Scroll.css";
function ScrollToTop() {
  const scrolltoTop = () => window.scrollTo({ top: 0, behavior: "auto" });

  return (
    <div className="scrollToTop" onClick={scrolltoTop}>
      <h2>Back To Top</h2>
    </div>
  );
}

export default ScrollToTop;
