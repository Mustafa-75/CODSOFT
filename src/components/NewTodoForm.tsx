
import { useState } from "react";
import { Plus } from "lucide-react";

const NewTodoForm = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      onAdd(value.trim());
      setValue("");
      setSubmitting(false);
    }, 290); // Subtle optimistic delay for animation
  };

  return (
    <form
      className="flex gap-2 items-center px-8 pb-6"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        type="text"
        placeholder="Add a new task…"
        className="flex-1 rounded-lg border-2 border-input px-4 py-2 text-lg bg-background placeholder:text-gray-400 focus:border-primary outline-none transition-all"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={100}
        disabled={submitting}
        aria-label="New to-do"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-medium flex items-center shadow hover-scale transition-all duration-150 disabled:opacity-60"
        disabled={!value.trim() || submitting}
        aria-label="Add task"
      >
        <Plus className="mr-1 w-5 h-5" />
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
