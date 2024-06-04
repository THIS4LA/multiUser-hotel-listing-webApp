import mongoose from "mongoose";
import Owner from "./OwnerSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Owner",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();

});

reviewSchema.statics.calcAverageRatings = async function (ownerId) {
  //this points the current review
  const stats = await this.aggregate([
    {
      $match: { owner: ownerId },
    },
    {
      $group: {
        _id: "$owner",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  await Owner.findByIdAndUpdate(ownerId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  });
};

reviewSchema.post("save", function(){
this.constructor.calcAverageRatings(this.owner);
});

export default mongoose.model("Review", reviewSchema);
