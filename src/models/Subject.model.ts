import mongoose, { Schema } from "mongoose";

export interface Subject extends Document {
  subjectName: string;
  teacherName: string;
}

export const SubjectSchema: Schema<Subject> = new Schema({
  subjectName: {
    type: String,
    required: [true, "Subject name is required"],
  },
  teacherName: {
    type: String,
    required: [true, "Teacher name is required"],
  },
});

const SubjectModel =
  (mongoose.models.Subject as mongoose.Model<Subject>) ||
  mongoose.model("Subject", SubjectSchema);
export default SubjectModel;
