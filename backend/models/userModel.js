// LIBRARIES
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  lastName: { type: String, default: "lastName" },
  email: String,
  password: String,
  location: { type: String, default: "my city" },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
