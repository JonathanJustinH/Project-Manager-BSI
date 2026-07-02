import "./CalendarPage.css";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const days = [
  { day: 30, muted: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8, event: "Project review" },
  { day: 9 },
  { day: 10, event: "Client call" },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15, event: "UAT window" },
  { day: 16 },
  { day: 17 },
  { day: 18, event: "Design sync" },
  { day: 19 },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23, event: "Sprint planning" },
  { day: 24 },
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 31 },
  { day: 1, muted: true },
  { day: 2, muted: true },
  { day: 3, muted: true },
  { day: 4, muted: true },
];

const agendaItems = [
  { time: "09:00", title: "Daily standup", note: "Team status and blockers" },
  { time: "11:30", title: "Project review", note: "Milestone check-in" },
  { time: "14:00", title: "UAT session", note: "QA and feedback round" },
  { time: "16:30", title: "Schedule update", note: "Adjust deadlines and owners" },
];

export default function CalendarPage() {
  return (
    <section className="calendar-page">
      <div className="calendar-actions">
        <button type="button" className="calendar-action">Today</button>
        <button type="button" className="calendar-action calendar-action-primary">Add event</button>
      </div>

      <div className="calendar-layout">
        <article className="calendar-panel calendar-grid-panel">
          <div className="calendar-month-bar">
            <div>
              <p className="calendar-month-label">July 2026</p>
            </div>
          </div>

          <div className="calendar-weekdays" aria-hidden="true">
            {weekdays.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>

          <div className="calendar-grid" role="grid" aria-label="Monthly calendar">
            {days.map((item, index) => (
              <div
                key={`${item.day}-${index}`}
                className={`calendar-day ${item.muted ? "muted" : ""} ${item.event ? "has-event" : ""}`}
                role="gridcell"
              >
                <span className="calendar-day-number">{item.day}</span>
                {item.event ? <span className="calendar-event">{item.event}</span> : null}
              </div>
            ))}
          </div>
        </article>

        <aside className="calendar-panel calendar-agenda-panel">
          <div className="calendar-month-bar">
            <div>
              <p className="calendar-month-label">Agenda</p>
            </div>
          </div>

          <div className="agenda-list">
            {agendaItems.map((item) => (
              <article key={item.time} className="agenda-item">
                <p className="agenda-time">{item.time}</p>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
