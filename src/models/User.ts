import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    email:   String,
    password: String,
    isAdmin: {type: Boolean, defualt: false},
  });

  const User = mongoose.model('User', userSchema);

  export default User