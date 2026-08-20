import "./TicketsTable.css";

const data = [
  {
    id: "T1032",
    name: "QA Bug",
    desc: "Tidak bisa melakukan Banding",
    due: "09 Juni 2026",
    status: "need review",
  },
  {
    id: "T1033",
    name: "UI Review",
    desc: "Perbaiki alignment pada halaman dashboard",
    due: "10 Juni 2026",
    status: "uat",
  },
  {
    id: "T1034",
    name: "Data Sync",
    desc: "Sinkronisasi status tiket dari backend",
    due: "11 Juni 2026",
    status: "development",
  },
  {
    id: "T1034",
    name: "Data Sync",
    desc: "Sinkronisasi status tiket dari backend",
    due: "11 Juni 2026",
    status: "development",
  },
  {
    id: "T1034",
    name: "Data Sync",
    desc: "Sinkronisasi status tiket dari backend",
    due: "11 Juni 2026",
    status: "development",
  },
  {
    id: "T1034",
    name: "Data Sync",
    desc: "Sinkronisasi status tiket dari backend",
    due: "11 Juni 2026",
    status: "development",
  },
  {
    id: "T1034",
    name: "Data Sync",
    desc: "Sinkronisasi status tiket dari backend",
    due: "11 Juni 2026",
    status: "development",
  },
  {
    id: "T1034",
    name: "Data Sync",
    desc: "Sinkronisasi status tiket dari backend",
    due: "11 Juni 2026",
    status: "development",
  },
];

function TicketsTable() {
  const getStatusClass = (status) => `status-text status-${status.replace(/\s+/g, "-")}`;

  return (
    <div className="tickets-table-wrap">
      <table className="tickets-table" aria-label="Tickets table">
        <tbody>
          {data.map((ticket) => (
            <tr key={ticket.id}>
              <td className="ticket-col">{ticket.id}</td>
              <td className="details-col">
                <p className="ticket-name">{ticket.name}</p>
                <p className="ticket-desc">{ticket.desc}</p>
                <p className="ticket-due">Due: {ticket.due}</p>
              </td>
              <td className="status-col">
                <span className={getStatusClass(ticket.status)}>{ticket.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketsTable;