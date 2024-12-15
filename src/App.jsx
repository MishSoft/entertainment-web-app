import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="md:flex ">
        <Header />
        <h1 className="p-2">Hello World</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
