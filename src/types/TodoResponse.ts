import { Todo } from "@/models/Todo.model";

export interface TodoResponse {
  success: boolean;
  message: string;
  todos?: Array<Todo>;
  todo?: Todo;
}
