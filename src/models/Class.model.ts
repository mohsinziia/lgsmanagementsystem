import mongoose, { Schema } from "mongoose";
import { Subject, SubjectSchema } from "./Subject.model";

export interface Class extends Document {
  subject: Subject;
  teacherName: string;
  day: string;
  startingTime: Date;
  endingTime: Date;
}

export const ClassSchema: Schema<Class> = new Schema({
  subject: SubjectSchema,
  teacherName: {
    type: String,
    required: [true, "Teacher name is required"],
  },
  day: {
    type: String,
    required: true,
  },
  startingTime: {
    type: Date,
    required: [true, "Class starting time is required"],
  },
  endingTime: {
    type: Date,
    required: [true, "Class ending time is required"],
  },
});

const ClassModel =
  (mongoose.models.Class as mongoose.Model<Class>) ||
  mongoose.model("Class", ClassSchema);
export default ClassModel;
