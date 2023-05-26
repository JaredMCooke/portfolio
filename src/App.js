import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/TopNav/NavBar";
import Home from "./components/Home";
import Layout from "./components/Layouts";
// import About from "./components/About";
// import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience">
            <Route index element={<Experience />} />
            {/* Create component for experience details using position key
          and replace component below  */}
            <Route path=":position" element={<Experience />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
