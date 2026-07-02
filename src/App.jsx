import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

import LessonTopics from "./pages/LessonTopics";
import VideoPlayer from "./pages/VideoPlayer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/lesson-topics"
          element={<LessonTopics />}
        />

        <Route
          path="/video"
          element={<VideoPlayer />}
        />

      </Routes>
    </BrowserRouter>
  );
}