const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("server started");
  next();
});

const details = [
  { username: 'sivasakthi100', password: '12345678', email: "apjakgvs7@gmail.com" },
  { username: 'sakthivel100', password: '43267888', email: "apjakgvs8@gmail.com" },
  { username: 'sakthivel1001', password: '432678881', email: "apjakgvs81@gmail.com" }
];

app.get("/", (req, res) => {
  res.send("Server connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  console.log("Connected to React");
  console.log(req.body);
  const { username, password } = req.body;
  const check = details.find(e => e.username === username && e.password === password);
  if (check) {
    res.status(200).json({ responsemessage: "success" });
  } else {
    res.status(401).json({ responsemessage: "invalid details" });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
