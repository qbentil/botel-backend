import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
    },
    phone: {
        type: String
    },
    photoURL: {
        type: String
    } 
}, { timestamps: true });

export default mongoose.model('User', UserSchema);