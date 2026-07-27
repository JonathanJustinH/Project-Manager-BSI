import { NavLink, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/Dashboard.png";
import projectsIcon from "../assets/Projects.png";
import tasksIcon from "../assets/Tasks.png";
import documentsIcon from "../assets/Documents.png";
import ticketsIcon from "../assets/Tickets.png";
import settingsIcon from "../assets/Settings.png";
import "./Sidebar.css";

const navigationItems = [
  { id: "home", to: "/", label: "Dashboard", icon: dashboardIcon },
  { id: "projects", to: "/projects", label: "Projects", icon: projectsIcon },
  { id: "tasks", to: "/tasks", label: "Tasks", icon: tasksIcon },
  { id: "documents", to: "/documents", label: "Documents", icon: documentsIcon },
  { id: "tickets", to: "/tickets", label: "Tickets", icon: ticketsIcon },
  { id: "settings", to: "/settings", label: "Settings", icon: settingsIcon },
];

export default function Sidebar({ status, user = { name: "John Doe", email: "john@example.com" } }) {
  const location = useLocation();
  const dashboardActive = location.pathname === "/" || location.pathname.startsWith("/calendar");

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav" aria-label="Primary">
        {navigationItems.map(item => (
          <NavLink
            key={item.id}
            to={item.to}
            end={item.to === "/"}
            className={() => `nav-item ${item.id === "home" && dashboardActive ? "active" : ""}`}
          >
            <img className="nav-icon" src={item.icon} alt="" aria-hidden="true" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className={`status-pill ${status}`}>
          <span className="status-dot" />
          {status === "loading" ? "Checking backend" : status === "online" ? "Online" : "Offline"}
        </div>

        <NavLink to="/settings" className="profile-btn">
          <div className="profile-avatar">JD</div>
        </NavLink>
      </div>
    </aside>
  );
}
