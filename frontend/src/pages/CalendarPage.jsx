import { useMemo, useState } from "react";
import "./CalendarPage.css";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const staticEvents = {
  8: "Project review",
  10: "Client call",
  15: "UAT window",
  18: "Design sync",
  23: "Sprint planning",
};

const agendaItems = [
  { time: "09:00", title: "Daily standup", note: "Team status and blockers" },
  { time: "11:30", title: "Project review", note: "Milestone check-in" },
  { time: "14:00", title: "UAT session", note: "QA and feedback round" },
  { time: "16:30", title: "Schedule update", note: "Adjust deadlines and owners" },
];

export default function CalendarPage() {
  const now = new Date();
  const [currentMonthDate, setCurrentMonthDate] = useState(
    new Date(now.getFullYear(), now.getMonth(), 1)
  );

  const days = useMemo(() => {
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    const daysInPreviousMonth = new Date(year, month, 0).getDate();

    const cells = [];

    for (let index = firstDayOfMonth - 1; index >= 0; index -= 1) {
      cells.push({ day: daysInPreviousMonth - index, muted: true });
    }

    for (let day = 1; day <= daysInCurrentMonth; day += 1) {
      cells.push({ day, event: staticEvents[day] });
    }

    while (cells.length < 42) {
      cells.push({ day: cells.length - (firstDayOfMonth + daysInCurrentMonth) + 1, muted: true });
    }

    return cells;
  }, [currentMonthDate]);

  const monthTitle = `${monthNames[currentMonthDate.getMonth()]} ${currentMonthDate.getFullYear()}`;

  const goToToday = () => {
    const today = new Date();
    setCurrentMonthDate(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  const goToPreviousMonth = () => {
    setCurrentMonthDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonthDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const isToday = (item) => {
    if (item.muted) return false;

    return (
      item.day === now.getDate() &&
      currentMonthDate.getMonth() === now.getMonth() &&
      currentMonthDate.getFullYear() === now.getFullYear()
    );
  };

  return (
    <section className="calendar-page">
      <div className="calendar-actions">
        <button type="button" className="calendar-action" onClick={goToToday}>Today</button>
        <button type="button" className="calendar-action calendar-action-primary">Add event</button>
      </div>

      <div className="calendar-layout">
        <article className="calendar-panel calendar-grid-panel">
          <div className="calendar-month-bar">
            <div>
              <p className="calendar-month-label">{monthTitle}</p>
            </div>
            <div className="calendar-month-nav" aria-label="Month navigation">
              <button type="button" className="calendar-month-button" onClick={goToPreviousMonth}>
                Prev
              </button>
              <button type="button" className="calendar-month-button" onClick={goToNextMonth}>
                Next
              </button>
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
                className={`calendar-day ${item.muted ? "muted" : ""} ${item.event ? "has-event" : ""} ${
                  isToday(item) ? "today" : ""
                }`}
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
