
import TodoItemCard from "@/components/TodoItemCard";
import { Todo } from "@/pages/Index";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
}

const TodoListPanel = ({ todos, onToggle, onEdit, onDelete }: Props) => {
  if (todos.length === 0) {
    return (
      <div className="rounded-xl bg-muted mx-8 mt-8 text-center py-10 text-muted-foreground text-lg shadow-inner">
        ✨ Your to-do list is empty! Add a task to get started.
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4 px-8 pt-3">
      {todos.map((todo) => (
        <TodoItemCard
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onEdit={onEdit}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoListPanel;
