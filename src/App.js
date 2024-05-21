import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import MyPage from "./pages/MyPage";
import Main from "./pages/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
