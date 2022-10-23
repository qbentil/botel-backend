import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
}, { timestamps: true });

export default mongoose.models['Room'] || mongoose.model('Room', RoomSchema);