import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
  });

UserSchema.methods.getToken =  function() {
   return  jwt.sign({ email: this.email }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};
UserSchema.methods.passwordMatched = async function() {
  return await bcrypt.compare(password, this.password);
}
UserSchema.methods.hashedPassword =async  function() {
  return await bcrypt.hash(password, 10);
}
export const User = mongoose.model('User', UserSchema);

