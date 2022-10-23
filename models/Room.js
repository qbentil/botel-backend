import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoomSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    },
    desc: {
        type: String,
        required: [true, 'Please add a description'],
    },
    image: {
        type: String,
        required: [true, 'Please provide an image']
    },
    maxPeople: {
        type: Number,
        required: [true, 'Please enter the maximum number of people'],
    },
    roomNumber: {
        type: String,
        required: [true, 'Please enter the room number'],
    },
    status: {
        type: String,
        enum: ['Available', 'Unavailable'],
        required: [true, 'Please enter the room status'],	
    }
}, { timestamps: true });

export default mongoose.models['Room'] || mongoose.model('Room', RoomSchema);