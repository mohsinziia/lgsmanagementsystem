import mongoose, { Schema } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  avatar: string;
  refCode: string;
  timetable: [];
}
