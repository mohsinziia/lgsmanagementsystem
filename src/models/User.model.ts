import mongoose, { Schema } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  avatar: string;
  refCode: string;
}

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  refCode: {
    type: String,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model("User", UserSchema);
export default UserModel;
