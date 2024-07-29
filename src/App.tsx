import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurveyForm from "./pages/SurveyForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
