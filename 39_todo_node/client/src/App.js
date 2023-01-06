import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";

import Todo from "./pages/Todo";

export const TokenContext = React.createContext(null);

// 使用 protect router
const ProtectedRoute = ({ element }) => {
  const [token, setToken] = useContext(TokenContext);
  return token ? element() : <Navigate to="/login" />;
};

function App() {
  const [token, setToken] = useState(null);
  return (
    <Router>
      <TokenContext.Provider value={[token, setToken]}>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={Todo} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </TokenContext.Provider>
    </Router>
  );
}

export default App;

// const [todos, setTodos] = useState([]);
// 使用 useEffect => fetch data
// useEffect(() => {
//   const fetch = async () => {
//     const { data } = await getTodoData();
//     setTodos(data);
//   };
//   fetch();
// }, []);
