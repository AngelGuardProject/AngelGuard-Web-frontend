import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import MyPage from "./pages/MyPage";
import Main from "./pages/main";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/com-detail/:id" element={<CommunityDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
