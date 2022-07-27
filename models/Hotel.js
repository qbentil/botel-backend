import mongoose from 'mongoose';

const { Schema } = mongoose;

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    photos: {
        type: [String],

    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
    },
    featured: {
        type: Boolean,
        default: false
    },
    title:{
        type: String,
        required: true
    },
    rooms:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Room'
        }]
    },
    cheapestPrice: {
        type: Number,
        required: true
    }
})

export default mongoose.models['Hotel'] || mongoose.model('Hotel', HotelSchema);