import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoomSchema = new Schema({
    title: {
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
    maxPeople: {
        type: Number,
        required: true
    },
    roomNumbers: [{number: Number, unavailableDates: {type: [Date], default: []}}],
}, { timestamps: true });

export default mongoose.models['Room'] || mongoose.model('Room', RoomSchema);