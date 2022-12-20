import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShareLayout from "./components/ShareLayout";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
