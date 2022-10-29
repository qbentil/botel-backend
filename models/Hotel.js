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
    city: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    rooms:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Room'
        }]
    },
    status: {
        type: String,
        enum: ['Available', 'Unavailable'],
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.models['Hotel'] || mongoose.model('Hotel', HotelSchema);