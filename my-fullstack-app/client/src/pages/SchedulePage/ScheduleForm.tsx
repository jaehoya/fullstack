import { useState } from "react";

type ScheduleData = {
  title: string;
  description?: string;
  date: string;      // ISO 형식 문자열 (예: 2025-07-17)
  location?: string;
};

type Props = {
  initialData?: ScheduleData;
  onSubmit: (data: ScheduleData) => void;
  onCancel?: () => void;
};

export default function ScheduleForm({ initialData, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<ScheduleData>({
    title: initialData?.title || "",
    description: initialData?.description || "",
    date: initialData?.date || new Date().toISOString().slice(0, 10),
    location: initialData?.location || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date) {
      alert("제목과 날짜는 필수입니다.");
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow">
      <div>
        <label className="block mb-1 font-medium">제목 *</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">설명</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">날짜 *</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">장소</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-1 border rounded bg-gray-100"
          >
            취소
          </button>
        )}
        <button type="submit" className="px-4 py-1 bg-blue-600 text-white rounded">
          저장
        </button>
      </div>
    </form>
  );
}
