import "./HomePage.css";

function HomePage({ backendMessage }) {
  return (
    <>
      <section className="feature-grid" aria-label="Homepage features">
        <article>
          <h2>Projects</h2>
        </article>
        <article>
          <h2>Tasks</h2>
        </article>
        <article>
          <h2>Tickets</h2>
        </article>
        <article>
          <h2>Documents</h2>
        </article>
        <article>
          <h2>Schedule</h2>
        </article>
      </section>
    </>
  );
}

export default HomePage;