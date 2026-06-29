import "./HomePage.css";
import ProjectsProgressChart from "../components/ProjectsProgressChart";
import TasksOverviewChart from "../components/TasksOverviewChart";

function HomePage({ backendMessage }) {
  return (
    <>
      <section className="feature-grid grid-5" aria-label="Homepage features">
        <div>
          <article>                     {/* angkanya masi placeholder */}
            <h2>Projects</h2>
            <h1>3</h1>
            <p>Active Projects</p>
          </article>
        </div>
        <article>
          <h2>Tasks</h2>
          <h1>65</h1>
          <p>12 in Progress</p>
        </article>
        <article>
          <h2>Tickets</h2>
          <h1>11</h1>
          <p>3 Urgent</p>
        </article>
        <article>
          <h2>Documents</h2>
          <h1>7</h1>
          <p>Need Review</p>
        </article>
        <article>
          <h2>Schedule</h2>
          <h1>2</h1>
          <p>To Attend</p>
        </article>
      </section>
      <section className="feature-grid grid-3" aria-label="Homepage features">
        <article>
          <h2>Projects Progress</h2>
          <ProjectsProgressChart />
        </article>
        <article>
          <h2>Tasks Overview</h2>
          <TasksOverviewChart />
        </article>
        <article>
          <h2>Tickets</h2>
        </article>
      </section>
      <section className="feature-grid grid-3" aria-label="Homepage features">
        <article>
          <h2>Document Status</h2>
        </article>
        <article>
          <h2>Activity Feed</h2>
        </article>
        <article>
          <h2>Calendar</h2>
        </article>
      </section>
    </>
  );
}

export default HomePage;