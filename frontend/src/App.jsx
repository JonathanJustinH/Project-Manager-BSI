import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import TasksPage from "./pages/TasksPage";
import DocumentsPage from "./pages/DocumentsPage";
import TicketsPage from "./pages/TicketsPage";
import SettingsPage from "./pages/SettingsPage";
import "./App.css";

function Layout({ status }) {
  return (
    <div className="app-shell">
      <Sidebar status={status} />
      <main className="content-area">
        <header className="topbar" aria-label="Placeholder topbar">
          <p className="topbar-label">BSI</p>
        </header>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  const [msg, setMsg] = useState("Connecting to the backend...");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => {
        if (!res.ok) throw new Error("Unable to reach the API");
        return res.json();
      })
      .then((data) => {
        setMsg(data.message || "Project Manager is ready.");
        setStatus("online");
      })
      .catch(() => {
        setMsg("Backend is offline right now, but the homepage is ready.");
        setStatus("offline");
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout status={status} />}>
          <Route
            index
            element={<HomePage backendMessage={msg} backendStatus={status} />}
          />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;