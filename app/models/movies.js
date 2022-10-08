import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({    //properties
    name: String,                    //String = type created by mongoose
    year: String,
    director: String,
    genre: String,
    runtime: Number
}, {
    timestamps: true,
    collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);