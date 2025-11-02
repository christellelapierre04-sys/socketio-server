import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("Un joueur s'est connecté :", socket.id);

  socket.on("disconnect", () => {
    console.log("Un joueur s'est déconnecté :", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Serveur Socket.IO du quiz en ligne fonctionne !");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur le port ${PORT}`);
});
