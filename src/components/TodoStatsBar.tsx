
import { Todo } from "@/pages/Index";

const TodoStatsBar = ({ todos }: { todos: Todo[] }) => {
  const completed = todos.filter((t) => t.completed).length;
  const total = todos.length;

  return (
    <div className="flex gap-4 items-center px-8 pb-4 text-base">
      <span className="font-semibold text-primary">
        {completed} / {total} completed
      </span>
      <span className="text-muted-foreground text-sm">
        {total - completed} remaining
      </span>
      <div className="flex-1">
        <div className="w-full h-2 mt-2 rounded-lg bg-muted/50 overflow-hidden">
          <div
            className="h-full rounded-lg bg-primary transition-all duration-500"
            style={{
              width: total === 0 ? "0%" : `${(completed / total) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TodoStatsBar;
