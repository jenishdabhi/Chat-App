import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      required: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    recieverId: { type: String, required: true },
    text: { type: String, required: true, minlength: 6 },
    image: { type: String, default: "" },
    seen: { type: String, default: false },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
