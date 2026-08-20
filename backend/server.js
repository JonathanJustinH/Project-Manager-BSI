const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const tickets = [
  {
    id: "T1041",
    name: "Release Checklist",
    desc: "Validasi checklist sebelum rilis build production",
    due: "20 Juni 2026",
    status: "need review",
    createdAt: "2026-06-20T08:30:00.000Z",
  },
  {
    id: "T1040",
    name: "Audit Log",
    desc: "Tambahkan logging untuk perubahan status tiket",
    due: "19 Juni 2026",
    status: "development",
    createdAt: "2026-06-19T07:45:00.000Z",
  },
  {
    id: "T1039",
    name: "Mobile Layout",
    desc: "Rapikan tampilan tiket pada layar kecil",
    due: "18 Juni 2026",
    status: "uat",
    createdAt: "2026-06-18T11:10:00.000Z",
  },
  {
    id: "T1038",
    name: "Status Sync",
    desc: "Sinkronkan status tiket dari layanan backend",
    due: "17 Juni 2026",
    status: "need review",
    createdAt: "2026-06-17T09:05:00.000Z",
  },
  {
    id: "T1037",
    name: "API Validation",
    desc: "Cek format response endpoint tickets",
    due: "16 Juni 2026",
    status: "development",
    createdAt: "2026-06-16T13:20:00.000Z",
  },
  {
    id: "T1036",
    name: "UI Polish",
    desc: "Perbaiki spacing pada table tiket dashboard",
    due: "15 Juni 2026",
    status: "uat",
    createdAt: "2026-06-15T10:15:00.000Z",
  },
  {
    id: "T1035",
    name: "API Error",
    desc: "Validasi error response untuk endpoint tickets",
    due: "12 Juni 2026",
    status: "need review",
    createdAt: "2026-06-12T12:00:00.000Z",
  },
  {
    id: "T1034",
    name: "Data Sync",
    desc: "Sinkronisasi status tiket dari backend",
    due: "11 Juni 2026",
    status: "development",
    createdAt: "2026-06-11T14:25:00.000Z",
  },
  {
    id: "T1033",
    name: "UI Review",
    desc: "Perbaiki alignment pada halaman dashboard",
    due: "10 Juni 2026",
    status: "uat",
    createdAt: "2026-06-10T16:40:00.000Z",
  },
  {
    id: "T1032",
    name: "QA Bug",
    desc: "Tidak bisa melakukan Banding",
    due: "09 Juni 2026",
    status: "need review",
    createdAt: "2026-06-09T09:55:00.000Z",
  },
  {
    id: "T1031",
    name: "Ticket Cleanup",
    desc: "Bersihkan tiket yang sudah selesai dari dashboard",
    due: "08 Juni 2026",
    status: "development",
    createdAt: "2026-06-08T08:05:00.000Z",
  },
  {
    id: "T1030",
    name: "Review Ready",
    desc: "Siapkan tiket untuk proses review QA",
    due: "07 Juni 2026",
    status: "need review",
    createdAt: "2026-06-07T07:20:00.000Z",
  },
];

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/api/tickets", (req, res) => {
  const limit = Number.parseInt(req.query.limit, 10);
  const maxItems = Number.isFinite(limit) && limit > 0 ? limit : 10;

  const latestTickets = [...tickets]
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
    .slice(0, maxItems)
    .map(({ createdAt, ...ticket }) => ticket);

  res.json({ tickets: latestTickets });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));