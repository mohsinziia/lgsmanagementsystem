import axios from "axios";
import { XSquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const RemoveTodo = ({
  todoId,
  onTodoDelete,
}: {
  todoId: string;
  onTodoDelete: (todoId: string) => void;
}) => {
  const handleTodoDeleteConfirm = async () => {
    // const response = await axios.delete(`/api/delete-todo/${todoId}`);
    // toast(response.data.message);
    onTodoDelete(todoId);
  };

  return (
    <Link
      href="#"
      onClick={handleTodoDeleteConfirm}
      className={`col-start-2 col-end-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2`}
    >
      Remove todo
    </Link>
  );
};

export default RemoveTodo;
