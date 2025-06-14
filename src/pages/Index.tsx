
import { useState } from "react";
import NewTodoForm from "@/components/NewTodoForm";
import TodoListPanel from "@/components/TodoListPanel";
import TodoStatsBar from "@/components/TodoStatsBar";

// Define shape for all tasks
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add, update, delete handlers
  const addTodo = (text: string) => {
    setTodos((prev) => [
      { id: crypto.randomUUID(), text, completed: false },
      ...prev,
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="w-full max-w-3xl mx-auto my-12 shadow-xl rounded-2xl bg-card p-0 flex flex-col animate-fade-in">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary px-10 pt-10 pb-2">
          To-Do List
        </h1>
        <p className="text-muted-foreground px-10 pb-6 text-lg">
          Organize tasks with style.
        </p>

        <NewTodoForm onAdd={addTodo} />
        <TodoStatsBar todos={todos} />
        <TodoListPanel
          todos={todos}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />
        <div className="py-6" />
      </div>
      <footer className="mt-auto text-xs text-muted-foreground text-center py-8">
        Built with Tailwind, and shadcn/ui
      </footer>
    </div>
  );
};

export default Index;
