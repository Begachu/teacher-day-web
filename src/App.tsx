import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Letter from "./pages/Letter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </div>
  );
}

export default App;
