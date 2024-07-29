import { BrowserRouter, Route, Routes } from "react-router-dom";
import Impact from "./pages/Impact";
import Data from "./pages/Data";
import Reporting from "./pages/Reporting";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="impact" element={<Impact />} />
        <Route path="data" element={<Data />} />
        <Route path="reporting" element={<Reporting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
