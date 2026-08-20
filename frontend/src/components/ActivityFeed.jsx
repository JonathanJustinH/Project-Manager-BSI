import "./ActivityFeed.css";

const activities = [
  {
    id: 1,
    name: "Ayu Pratama",
    action: "updated ticket status",
    file: "T1032 - QA Bug",
    time: "20 Aug 2026, 09:15",
  },
  {
    id: 2,
    name: "Raka Wijaya",
    action: "uploaded a new file",
    file: "FSD Omnichannel.pdf / Project B-Shine",
    time: "20 Aug 2026, 10:40",
  },
  {
    id: 3,
    name: "Nadia Putri",
    action: "commented on document review",
    file: "CR Omnichannel / Document Status",
    time: "20 Aug 2026, 12:05",
  },
  {
    id: 4,
    name: "Bima Saputra",
    action: "moved a task to UAT",
    file: "Task board / Sprint 14",
    time: "20 Aug 2026, 13:20",
  },
  {
    id: 5,
    name: "Sari Melati",
    action: "reviewed the latest update",
    file: "Calendar / July planning",
    time: "20 Aug 2026, 14:50",
  },
];

function ActivityTable() {
  return (
    <div className="activity-feed-wrap">
      <table className="activity-feed-table" aria-label="Activity feed">
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id} className="activity-row">
              <td className="activity-avatar-cell">
                <span className="activity-avatar" aria-hidden="true">
                  👤
                </span>
              </td>
              <td className="activity-details-cell">
                <p className="activity-name-action">
                  <span className="activity-name">{activity.name}</span> {activity.action}
                </p>
                <p className="activity-file">{activity.file}</p>
                <p className="activity-time">{activity.time}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityTable;