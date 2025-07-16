import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "🌐 Hello from backend!" });
});

router.get("/ping", (req, res) => {
  res.send("pong");
});

export default router;
