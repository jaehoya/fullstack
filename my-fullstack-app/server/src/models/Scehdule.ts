import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },     // 일정 날짜
    location: { type: String },               // 장소 (선택)
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // 작성자
  },
  { timestamps: true }
);

export const Schedule = mongoose.model("Schedule", scheduleSchema);
