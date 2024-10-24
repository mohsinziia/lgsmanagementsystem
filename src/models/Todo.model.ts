import mongoose, { Schema, Document } from "mongoose";

export interface Todo extends Document {
  name: string;
  completed: boolean;
  owner?: string;
}

const TodoSchema: Schema<Todo> = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: [true, "Todo cannot be empty"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel =
  (mongoose.models.Todo as mongoose.Model<Todo>) ||
  mongoose.model<Todo>("Todo", TodoSchema);

export default TodoModel;
