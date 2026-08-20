const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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