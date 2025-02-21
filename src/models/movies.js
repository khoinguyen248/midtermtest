import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Bắt buộc phải có tên phim
    },
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actors: {
      type: [String], // Danh sách diễn viên
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genres: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    avgRate: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    images: {
      type: [String], // Danh sách URL ảnh
      required: true,
    },
    episodes: [
      {
        number: { type: Number, required: true },
        url: { type: String, required: true },
      },
    ],
  }
);

const movieModel = mongoose.model("movies", movieSchema);
export default movieModel;
