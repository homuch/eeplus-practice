import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import PersonDetail from "./PersonDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<PersonDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
