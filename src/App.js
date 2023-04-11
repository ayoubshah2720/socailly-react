import Home from "../src/pages/home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
