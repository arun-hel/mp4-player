import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import NotFound from "./pages/NotFound";
import Video from "./pages/Video";
import "./App.css";
function App() {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/mp4/:meetingId" element={<Video />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
