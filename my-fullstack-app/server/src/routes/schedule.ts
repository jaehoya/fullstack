import { Router } from "express";
import { Schedule } from "../models/Scehdule";

const router = Router();

// 일정 전체 조회
router.get("/", async (req, res) => {
  const schedules = await Schedule.find().sort({ date: 1 });
  res.json(schedules);
});

// 특정 날짜 일정 조회
router.get("/:date", async (req, res) => {
  const date = new Date(req.params.date);
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);

  const schedules = await Schedule.find({
    date: { $gte: date, $lt: nextDate },
  });
  res.json(schedules);
});

// 일정 추가 (관리자용)
router.post("/", async (req, res) => {
  const { title, description, date, location } = req.body;
  const newSchedule = new Schedule({ title, description, date, location });
  await newSchedule.save();
  res.status(201).json(newSchedule);
});

// 일정 수정
router.put("/:id", async (req, res) => {
  const updated = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// 일정 삭제
router.delete("/:id", async (req, res) => {
  await Schedule.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
