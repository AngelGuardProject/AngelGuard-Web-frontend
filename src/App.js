import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import MyPage from "./pages/MyPage";
import Main from "./pages/main";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";
import WriteBoard from "./pages/WriteBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/com-detail/:id" element={<CommunityDetail />}></Route>
        <Route path="/write" element={<WriteBoard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
