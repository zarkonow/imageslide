import React from "react";
import "./App.css";
import ImageSlide from "./imageslider/index.jsx";

function App() {
  return (
    <div className="App">
      <ImageSlide
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
