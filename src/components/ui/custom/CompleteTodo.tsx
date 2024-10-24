import Link from "next/link";
import React from "react";

const CompleteTodo = ({
  todoId,
  onTodoComplete,
}: {
  todoId: string;
  onTodoComplete: (todoId: string) => void;
}) => {
  const handleTodoCompleteConfirm = async () => {
    // const response = await axios.get(`/api/complete-todo/${todoId}`);
    // toast(response.data.message);
    onTodoComplete(todoId);
  };

  return (
    <Link
      href="#"
      onClick={handleTodoCompleteConfirm}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
    >
      Mark as done
    </Link>
  );
};

export default CompleteTodo;
