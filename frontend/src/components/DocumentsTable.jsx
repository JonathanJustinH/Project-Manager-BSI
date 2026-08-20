import "./DocumentsTable.css";

const data = [
  {
    id: "D1032",
    name: "CR Omnichannel",
    desc: "Project B-Shine Omnichannel",
    upload: "09 Juni 2026",
    ver: "1.3",
  },
  {
    id: "D1033",
    name: "FSD Omnichannel",
    desc: "Project B-Shine Omnichannel",
    upload: "10 Juni 2026",
    ver: "1.3",
  },
  {
    id: "D1034",
    name: "BA UAT",
    desc: "Project 2",
    upload: "11 Juni 2026",
    ver: "1.3",
  },
  {
    id: "D1034",
    name: "BA UAT",
    desc: "Project 2",
    upload: "11 Juni 2026",
    ver: "1.3",
  },
  {
    id: "D1034",
    name: "BA UAT",
    desc: "Project 2",
    upload: "11 Juni 2026",
    ver: "1.3",
  },
  {
    id: "D1034",
    name: "BA UAT",
    desc: "Project 2",
    upload: "11 Juni 2026",
    ver: "1.3",
  },
  {
    id: "D1034",
    name: "BA UAT",
    desc: "Project 2",
    upload: "11 Juni 2026",
    ver: "1.3",
  },
  {
    id: "D1034",
    name: "BA UAT",
    desc: "Project 2",
    upload: "11 Juni 2026",
    ver: "1.3",
  },
];

function DocumentsTable() {
  const getStatusClass = (status) => `status-text status-${status.replace(/\s+/g, "-")}`;

  return (
    <div className="documents-table-wrap">
      <table className="documents-table" aria-label="Documents table">
        <tbody>
          {data.map((document) => (
            <tr key={document.id}>
              <td className="details-col">
                <p className="document-name">{document.name}</p>
                <p className="document-desc">{document.desc}</p>
              </td>
              <td className="status-col">
                <span className={getStatusClass(document.ver)}>v.{document.ver}</span>
              </td>
              <td className="document-col">
                <p className="document-due">{document.upload}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentsTable;