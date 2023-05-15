import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="typing-demo">
          8기 8반 학생들로부터 편지가 도착했습니다. 비행기를 클릭해 보세요.
        </div>
      </div>
      <div className="frame">
        <div className="plane-container">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="1131.53px"
            height="379.304px"
            viewBox="0 0 1131.53 379.304"
            enableBackground="new 0 0 1131.53 379.304"
            xmlSpace="preserve"
            className="plane"
          >
            <polygon
              fill="#f2f2f2"
              points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  "
            />
            <polygon
              fill="#d5d5d5"
              points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   "
            />
          </svg>
        </div>
      </div>
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
    </>
  );
}

export default Home;
