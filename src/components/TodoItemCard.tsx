
import { useState } from "react";
import { Check, Edit, Trash } from "lucide-react";
import { Todo } from "@/pages/Index";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onEdit: (id: string, newText: string) => void;
  onDelete: () => void;
}

const TodoItemCard = ({ todo, onToggle, onEdit, onDelete }: Props) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const onSaveEdit = () => {
    if (editText.trim() && editText.trim() !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setEditing(false);
  };

  return (
    <li
      className={`flex items-center group p-4 rounded-xl shadow transition-transform bg-background hover:bg-muted/60 border border-border ${
        todo.completed ? "opacity-60" : ""
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={onToggle}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        className={`w-6 h-6 mr-4 rounded-full border-2 border-primary flex items-center justify-center transition-all duration-150 
          ${todo.completed ? "bg-primary" : "bg-background hover:bg-muted"}`}
      >
        {todo.completed && (
          <Check className="w-4 h-4 text-primary-foreground transition-all animate-scale-in" />
        )}
      </button>

      {/* Task text or editor */}
      <div className="flex-1 min-w-0">
        {editing ? (
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              onSaveEdit();
            }}
          >
            <input
              className="bg-card border px-2 py-1 rounded-lg w-full text-lg border-input focus:border-primary"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              maxLength={100}
              autoFocus
              onBlur={onSaveEdit}
            />
          </form>
        ) : (
          <span
            className={`text-lg break-words group-hover:text-primary transition-colors
              ${todo.completed ? "line-through text-muted-foreground" : ""}`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pl-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          aria-label="Edit"
          onClick={() => setEditing(true)}
          className="text-blue-500 hover:bg-blue-100 rounded-lg p-1 transition-colors"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          aria-label="Delete"
          onClick={onDelete}
          className="text-destructive hover:bg-destructive/10 rounded-lg p-1 transition-colors"
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
};

export default TodoItemCard;
